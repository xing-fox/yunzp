<style lang="less" scoped>
.my-employ-record {
  font-size: 0;
  width: 100%;
  .main {
    padding: 0 0.24rem;
    text-align: left;
    .main-nav {
      width: 100%;
      height: 0.5rem;
      line-height: 0.4rem;
      margin: 0.3rem 0 0 0;
      white-space: nowrap;
      overflow: hidden;
      ul {
        height: 0.4rem;
        li {
          display: inline-block;
          color: #9b9b9b;
          font-size: 0.29rem;
          padding: 0 0.38rem 0 0;
          position: relative;
          &.active {
            color: #3c3c3c;
            font-size: 0.32rem;
            position: relative;
            &:after {
              content: "";
              width: 0.4rem;
              height: 0.06rem;
              margin: 0 auto;
              border-radius: 0.06rem;
              background: #0089f9;
              position: absolute;
              left: 0;
              right: 0.38rem;
              bottom: -0.1rem;
            }
          }
          &:nth-last-child(1) {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.my-employ-record {
  .vux-cell-box {
    height: 0 !important;
    opacity: 0 !important;
  }
}
</style>

<template>
  <div class="my-employ-record">
    <div class="main">
      <div class="main-nav wrapper" ref="navScroll">
        <ul ref="navContent">
          <li
            ref="navItem"
            v-for="(list, eq) in navList"
            :key="eq"
            :class="{active: eq == navTypeIndex}"
          >{{ list.name }}</li>
        </ul>
      </div>
      <staff-list :NoButton="false" :FromTrade="true" />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import StaffList from '@/components/my/my-staff-list'
import { Getworktype } from '@/fetch/api'
export default {
  name: 'MyEmployRecord',
  data () {
    return {
      navTypeIndex: 0,
      navList: []
    }
  },
  components: {
    StaffList
  },
  mounted () {
    Getworktype().then(res => {
      if (res.code === 200) {
        this.navList = res.data
      }
    }).then(() => {
      // nav滚动
      this.$refs.navContent.style.width = (() => {
        let width = 0
        for (let i = 0; i < this.navList.length; i++) {
          width += this.$refs.navItem[i].getBoundingClientRect().width
        }
        return width + 'px'
      })()
      this.BScroll = new BScroll(this.$refs.navScroll, {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false
      })
    })
  }
}
</script>
