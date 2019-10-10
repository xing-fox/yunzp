<style lang="less" scoped>
  @path: '../../icon/home';
  .nav-home {
    font-size: 0;
    width: 100%;
    .header {
      width: 100%;
      padding: .2rem 0 0 0;
      position: relative;
      &:after {
        content: '';
        width: 100%;
        height: 3.25rem;
        background-image: url('@{path}/header_bg.png');
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
      }
      .search {
        width: 7rem;
        height: .7rem;
        margin: 0 auto .2rem;
        border-radius: .35rem;
        overflow: hidden;
        position: relative;
        i {
          width: .85rem;
          height: .7rem;
          background-image: url('@{path}/search.png');
          background-size: .3rem .3rem;
          background-repeat: no-repeat;
          background-position: center center;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
        }
        .input {
          display: table;
          border: none;
          color: #fff;
          font-size: .3rem;
          width: 100%;
          height: .7rem;
          line-height: initial;
          padding: 0 0 0 .85rem;
          text-align: left;;
          background-color: rgba(255, 255, 255, .3);
          span {
            display: table-cell;
            vertical-align: middle;
          }
        }
      }
      .swiper-container,
      .swiper-wrapper {
        width: 7rem;
        height: 2.4rem;
        border-radius: 5px;
        .swiper-slide {
          width: 100%;
          height: 2.4rem;
          text-align: center;
          img {
            display: inline-block;
            width: 7rem;
            height: 2.4rem;
            border-radius: 5px;
            box-sizing: border-box;
          }
        }
      }
    }
    .content {
      width: 100%;
      margin: .4rem 0 0 0;
      ul {
        width: 100%;
        text-align: left;
        li {
          display: inline-block;
          width: 20%;
          margin: 0 0 .26rem 0;
          .list {
            width: 100%;
            text-align: center;
            img {
              width: .84rem;
              height: .84rem;
              margin: 0 0 .04rem 0;
              border-radius: .42rem;
            }
            p {
              color: #3c3c3c;
              font-size: .28rem;
              width: 100%;
              height: .4rem;
              line-height: .4rem;
            }
          }
        }
      }
      .content-dynamic {
        display: flex;
        width: 100%;
        height: .45rem;
        padding: .08rem .24rem 0;
        box-sizing: border-box;
        .title {
          width: 1.32rem;
          height: .34rem;
          margin: .06rem 0 0 0;
          background-image: url('@{path}/dynamic.png');
          background-size: 100% 100%;
        }
        .swiper-container-1 {
          flex: 1;
          height: .45rem;
          overflow: hidden;
          .swiper-slide {
            display: flex;
            width: 100%;
            height: .45rem !important;
            text-align: center;
            span {
              font-size: .28rem;
              &.intro {
                flex: 1.5;
                color: #3c3c3c;
              }
              &.money {
                color: #ff0000;
                font-weight: bold;
              }
              &.time {
                flex: 1;
                color: #9b9b9b;
                text-align: right;
              }
            }
          }
        }
      }
    }
    .banner {
      padding: 0 .24rem;
      margin: .5rem 0;
      img {
        width: 100%;
        height: 1.53rem;
      }
    }
    .main {
      padding: 0 .24rem;
      text-align: left;
      .main-title {
        color: #3c3c3c;
        font-size: .38rem;
        font-weight: bold;
        line-height: .53rem;
      }
      .main-nav {
        width: 100%;
        height: .5rem;
        line-height: .4rem;
        margin: .3rem 0 0 0;
        white-space: nowrap;
        overflow: hidden;
        ul {
          height: .4rem;
          li {
            display: inline-block;
            color: #9b9b9b;
            font-size: .29rem;
            padding: 0 .38rem 0 0;
            &.active {
              color: #3c3c3c;
              font-size: .32rem;
              position: relative;
              &:after {
                content: '';
                width: .4rem;
                height: .05rem;
                margin: 0 auto;
                border-radius: .05rem;
                background: #0089F9;
                position: absolute;
                left: 0;
                right: .38rem;
                bottom: -.1rem;
              }
            }
            &:nth-last-child(1) {
              padding: 0;
            }
          }
        }
      }
      .main-list {
        display: flex;
        width: 100%;
        margin: .15rem 0 0 0;
      }
      .main-no-list {
        color: #3C3C3C;
        font-size: .28rem;
        width: 100%;
        padding: .5rem 0;
        text-align: center;
        img {
          width: 2rem;
          margin: 0 0 .1rem 0;
        }
      }
    }
  }
</style>

<style lang="less">
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    height: .2rem;
    bottom: .09rem;
  }
  .swiper-pagination-bullet {
    width: .08rem;
    height: .08rem;
    border-radius: .04rem;
    background: #fff;
  }
  .swiper-pagination-bullet-active {
    width: .12rem;
    height: .12rem;
    border-radius: .06rem;
    background: #fff;
  }
</style>

<template>
  <div class="nav-home">
    <div class="header">
      <div class="search" @click="changeSearch">
        <i></i>
        <div class="input">
          <span>网页设计</span>
        </div>
      </div>
      <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../images/banner/banner_1.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../images/banner/banner_1.png" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          @click="RouteChange(index)">
          <div class="list">
            <img :src="item.icon">
            <p>{{ item.name }}</p>
          </div>
        </li>
      </ul>
      <div class="content-dynamic">
        <div class="title" />
        <div class="swiper-container-1" ref="swiperContainer1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in workType" :key="index">
              <span class="intro">{{ item.desc }}</span>
              <span class="money">{{ item.amount }}元</span>
              <span class="time">{{ item.add_time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="../../icon/home/banner.png" alt="">
    </div>
    <div class="main">
      <div class="main-title">为您推荐人才</div>
      <!-- <div class="main-nav wrapper" ref="navScroll">
        <ul ref="navContent">
          <li ref="navItem" v-for="(list, eq) in recommendData" :key="eq" :class="{active: eq == navTypeIndex}" @click="choiseRecommend(eq)">{{ list.name }}</li>
        </ul>
      </div> -->
      <div class="main-list" v-if="listData.length">
        <List :Data="listData" />
      </div>
      <div class="main-no-list" v-else>
        <img src="../../icon/resume-data.png">
        <div>暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'Swiper'
// import BScroll from 'better-scroll'
import List from '@/components/list'
import { Getworktype, Employstate, RecommendData } from '@/fetch/api'
export default {
  name: 'Home',
  data () {
    return {
      Swiper: '',
      Swiper1: '',
      // BScroll: '',
      navList: [],
      navTypeIndex: 0,
      // navType: ['平面设计', '新媒体运营', '电话销售', '文案撰写', '电话销售', '新媒体运营'],
      workType: [],
      recommendData: [],
      listData: []
    }
  },
  components: {
    List
  },
  mounted () {
    // banner
    this.Swiper = new Swiper(this.$refs.swiperContainer, {
      direction: 'horizontal',
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    // 推荐人才
    RecommendData().then(res => {
      if (res.code === 200) {
        // this.recommendData = res.data
        // this.listData = this.recommendData[this.navTypeIndex].member_list
        this.listData = res.data
      }
    }).then(() => {
      // nav滚动
      // this.$refs.navContent.style.width = (() => {
      //   let width = 0
      //   for (let i = 0; i < this.recommendData.length; i++) {
      //     width += this.$refs.navItem[i].getBoundingClientRect().width
      //   }
      //   return width + 'px'
      // })()
      // this.BScroll = new BScroll(this.$refs.navScroll, {
      //   startX: 0,
      //   click: true,
      //   scrollX: true,
      //   scrollY: false
      // })
    })
    // 获取工种类型
    Getworktype().then(res => {
      if (res.code === 200) {
        this.navList = res.data
      }
    })
    // 雇佣动态
    Employstate().then(res => {
      if (res.code === 200) {
        this.workType = res.data
      }
    }).then(() => {
      // 雇佣
      this.Swiper1 = new Swiper(this.$refs.swiperContainer1, {
        direction: 'vertical',
        autoplay: true
      })
    })
  },
  methods: {
    // 路由跳转
    RouteChange (eq) {
      this.$router.push({
        path: 'search',
        query: {
          workType: this.navList[eq].parent_id,
          keyWord: this.navList[eq].name
        }
      })
    },
    changeSearch () {
      this.$router.push({
        path: '/searchpage'
      })
    },
    choiseRecommend (arg) {
      this.navTypeIndex = arg
      this.listData = this.recommendData[arg].member_list
    }
  }
}
</script>
