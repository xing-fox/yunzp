<style lang="less" scoped>
@path: "../../icon/search";
.nav-search {
  font-size: 0;
  width: 100%;
  .header {
    width: 100%;
    padding: 0.2rem 0 0 0;
    position: relative;
    .search {
      width: 7rem;
      height: 0.7rem;
      margin: 0 auto 0.2rem;
      border-radius: 0.35rem;
      overflow: hidden;
      position: relative;
      i {
        width: 0.85rem;
        height: 0.7rem;
        background-image: url("@{path}/search.png");
        background-size: 0.3rem 0.3rem;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
      }
      input {
        border: none;
        color: #fff;
        font-size: 0.3rem;
        width: 100%;
        height: 0.7rem;
        padding: 0 0 0 0.85rem;
        background: rgba(242, 242, 242, 1);
      }
    }
  }
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
              height: 0.05rem;
              margin: 0 auto;
              border-radius: 0.05rem;
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
          color: rgba(60, 60, 60, 1);
          font-size: 0.28rem;
          font-weight: 500;
          margin: 0 0.2rem 0 0;
          padding: 0.1rem 0.18rem;
          border-radius: 0.06rem;
          vertical-align: middle;
          background: rgba(242, 242, 242, 1);
        }
      }
    }
    .main-nav-search {
      display: flex;
      color: rgba(60, 60, 60, 1);
      font-size: 0.28rem;
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      .title {
        font-weight: 500;
        width: 1.2rem;
        margin: 0 0.7rem 0 0;
        text-align: center;
      }
      ul {
        flex: 1;
        li {
          display: inline-block;
          width: 1.2rem;
          margin: 0 0.5rem 0 0;
          position: relative;
          &:nth-last-child(1) {
            margin: 0;
          }
          &.active {
            color: #0089f9;
            i {
              transform: rotate(180deg);
              border-color: #0089f9 transparent transparent transparent;
            }
          }
          span {
            font-weight: 500;
            vertical-align: middle;
          }
          i {
            display: inline-block;
            width: 0;
            height: 0;
            margin: auto 0.1rem 0;
            border-width: 3px;
            border-style: solid;
            transition: all 0.3s ease-in;
            transform-origin: 50% 25%;
            vertical-align: middle;
            border-color: #3c3c3c transparent transparent transparent;
          }
        }
      }
    }
    .main-list {
      display: flex;
      width: 100%;
      margin: 0.15rem 0 0 0;
      ul {
        width: 100%;
      }
    }
  }
}
</style>

<style lang="less">
  .nav-search {
    .weui-cell {
      padding: 0;
    }
    .vux-cell-box {
      height: 0 !important;
      opacity: 0 !important;
    }
  }
</style>

<template>
  <div class="nav-search">
    <div class="header">
      <div class="search">
        <i></i>
        <input type="text" placeholder="网页设计">
      </div>
    </div>
    <div class="main">
      <div class="main-nav wrapper" ref="navScroll">
        <ul ref="navContent">
          <li
            ref="navItem"
            v-for="(list, eq) in navType"
            :key="eq"
            :class="{active: eq == navTypeIndex}"
          >{{ list }}</li>
        </ul>
      </div>
      <div class="main-nav-details">
        <ul>
          <li>电商美工</li>
          <li>网站设计</li>
          <li>平面设计</li>
        </ul>
      </div>
      <div class="main-nav-search">
        <div class="title">综合排序</div>
        <ul>
          <li
            v-for="(item, index) in navSearch"
            :key="index"
            :class="{active: navSearchIndex == index}"
            @click="searchFunc(index)"
          >
            <popup-picker
              :data="item.data"
              :columns="1"
              :show-name="true"
              v-model="item.val"
              @on-hide="navSearchIndex = -1"
            />
            <span>{{ item.title }}</span>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="main-list">
        <ul>
          <List/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import List from '@/components/list'
import { PopupPicker } from 'vux'
export default {
  name: 'Search',
  data () {
    return {
      navSearchIndex: -1, // 综合排序索引值
      navSearch: [{
        title: '价格',
        val: ['1'],
        data: [{
          value: '1',
          name: '1000'
        }, {
          value: '2',
          name: '2000'
        }, {
          value: '3',
          name: '3000'
        }, {
          value: '4',
          name: '5000'
        }]
      }, {
        title: '经验',
        val: ['2'],
        data: [{
          value: '1',
          name: '1年一下'
        }, {
          value: '2',
          name: '2年'
        }, {
          value: '3',
          name: '3年'
        }, {
          value: '4',
          name: '4年'
        }, {
          value: '5',
          name: '5年及以上'
        }]
      }, {
        title: '评价',
        val: ['3'],
        data: [{
          value: '1',
          name: '好评'
        }, {
          value: '2',
          name: '中评'
        }, {
          value: '3',
          name: '差评'
        }]
      }],
      navTypeIndex: 0,
      navType: ['平面设计', '新媒体运营', '电话销售', '文案撰写', '电话销售', '新媒体运营']
    }
  },
  components: {
    List,
    PopupPicker
  },
  methods: {
    searchFunc (arg) {
      this.navSearchIndex = arg
    }
  },
  mounted () {
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
  }
}
</script>
