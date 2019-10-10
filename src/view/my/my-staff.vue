<style lang="less" scoped>
.my-staff {
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
    .main-nav-details {
      width: 100%;
      margin: 0.3rem 0;
      ul {
        width: 100%;
        li {
          display: inline-block;
          color: #3c3c3c;
          font-size: 0.28rem;
          margin: 0 0.2rem 0 0;
          padding: 0.1rem 0.18rem;
          border-radius: 0.06rem;
          vertical-align: middle;
          background: rgba(242, 242, 242, 1);
          &.active {
            color: #fff;
            background:rgba(0, 137, 249, 1);
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.my-staff {
  .vux-cell-box {
    height: 0 !important;
    opacity: 0 !important;
  }
}
</style>

<template>
  <div class="my-staff">
    <div class="main">
      <div class="main-nav wrapper" ref="navScroll">
        <ul ref="navContent">
          <li
            ref="navItem"
            v-for="(list, eq) in navType"
            :key="eq"
            :class="{active: eq == navTypeIndex}"
            @click="changeWorkType(eq)"
          >{{ list.name }}</li>
        </ul>
      </div>
      <div class="main-nav-details">
        <ul>
          <li v-for="(item, index) in statusList" :key="index" :class="{ active: statusIndex === index}" @click="changeStatus(index)">{{ item }}</li>
        </ul>
      </div>
      <staff-list :FromStaff="true" :Data="dataList" />
    </div>
  </div>
</template>

<script>
import { Mystaff, Getworktype } from '@/fetch/api'
import BScroll from 'better-scroll'
import StaffList from '@/components/my/my-staff-list'
export default {
  name: 'MyStaff',
  data () {
    return {
      status: 1, // 支付状态(1 待支付  2 已完成)
      workType: '', // 工作类型
      navTypeIndex: 0,
      navType: [], // 工种类型
      dataList: [],
      statusIndex: 0,
      statusList: ['待支付', '已支付']
    }
  },
  components: {
    StaffList
  },
  methods: {
    getData () {
      Mystaff({
        status: this.status,
        work_type: this.workType
      }).then(res => {
        if (res.code === 200) this.dataList = res.data
      })
    },
    changeStatus (eq) {
      this.statusIndex = eq
      this.status = eq + 1
      this.getData()
    },
    changeWorkType (eq) {
      this.navTypeIndex = eq
      this.workType = this.navType[eq].parent_id
      this.getData()
    }
  },
  mounted () {
    // 获取所有工种
    Getworktype().then(res => {
      if (res.code === 200) {
        this.navType = res.data
        this.workType = res.data[this.navTypeIndex].parent_id
        this.getData()
      }
    }).then(() => {
      // nav滚动
      this.$refs.navContent.style.width = (() => {
        let width = 0
        for (let i = 0; i < this.navType.length; i++) {
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
