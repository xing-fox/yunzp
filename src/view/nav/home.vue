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
        input {
          border: none;
          color: #fff;
          font-size: .3rem;
          width: 100%;
          height: .7rem;
          padding: 0 0 0 .85rem;
          background-color: rgba(255, 255, 255, .7);
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
                flex: 2;
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
        ul {
          width: 100%;
          li {
            display: flex;
            padding: .25rem 0 .4rem 0;
            img {
              width: 1.86rem;
              height: 2.24rem;
            }
            .intro {
              flex: 1;
              .intro-list {
                display: flex;
                margin: 0 0 .2rem 0;
                padding: 0 0 0 .28rem;
                i, span {
                  display: inline-block;
                  vertical-align: middle;
                }
                .name {
                  flex: 1;
                  color: #3c3c3c;
                  font-size: .34rem;
                  line-height: .42rem;
                  font-weight: bold;
                }
                .money {
                  flex: 1;
                  color: #ff0000;
                  font-size: .34rem;
                  font-weight: bold;
                  line-height: .42rem;
                  text-align: right;
                }
                .work-time,
                .work-power {
                  color: #3c3c3c;
                  font-size: .32rem;
                  line-height: .42rem;
                  margin: 0 0 0 .08rem;
                }
                .address {
                  flex: 1;
                  color: #3c3c3c;
                  font-size: .3rem;
                  line-height: .42rem;
                  text-align: right;
                }
                .work-type {
                  font-size: .26rem;
                  height: .36rem;
                  line-height: .36rem;
                  padding: 0 .09rem;
                  margin: 0 .2rem 0 0;
                  border-radius: .06rem;
                  &.color1 {
                    color: #F53C28;
                    background: #FFECE8;
                  }
                  &.color2 {
                    color: #1DAEFF;
                    background: #DBF1FF;
                  }
                  &.color3 {
                    color: #39C809;
                    background: #E3FFDA;
                  }
                }
                i {
                  &.icon-work {
                    width: .3rem;
                    height: .3rem;
                    margin: .06rem 0 0 0;
                    background-image: url('@{path}/icon_work.png');
                    background-size: 100% 100%;
                  }
                  &.icon-power {
                    width: .28rem;
                    height: .28rem;
                    margin: .06rem 0 0 0;
                    background-image: url('@{path}/icon_power.png');
                    background-size: 100% 100%;
                  }
                  &.power-type {
                    margin: .06rem .05rem 0;
                  }
                  &.power-type-1 {
                    width: .24rem;
                    height: .24rem;
                    background-image: url('@{path}/icon_power3.png');
                    background-size: 100% 100%;
                  }
                  &.power-type-2 {
                    width: .24rem;
                    height: .24rem;
                    background-image: url('@{path}/icon_power2.png');
                    background-size: 100% 100%;
                  }
                  &.power-type-3 {
                    width: .24rem;
                    height: .24rem;
                    background-image: url('@{path}/icon_power1.png');
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }
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
      <div class="search">
        <i></i>
        <input type="text" placeholder="网页设计">
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
        <li v-for="(item, index) in navList" :key="index">
          <div class="list">
            <img :src="item.img">
            <p>{{ item.value }}</p>
          </div>
        </li>
      </ul>
      <div class="content-dynamic">
        <div class="title" />
        <div class="swiper-container-1" ref="swiperContainer1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <span class="intro">张**雇佣李**</span>
              <span class="money">300元</span>
              <span class="time">10小时</span>
            </div>
            <div class="swiper-slide">
              <span class="intro">张**雇佣李**</span>
              <span class="money">300元</span>
              <span class="time">10小时</span>
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
      <div class="main-nav wrapper" ref="navScroll">
        <ul ref="navContent">
          <li ref="navItem" v-for="(list, eq) in navType" :key="eq" :class="{active: eq == navTypeIndex}">{{ list }}</li>
        </ul>
      </div>
      <div class="main-list">
        <ul>
          <li>
            <img src="../../icon/home/man.png">
            <div class="intro">
              <div class="intro-list">
                <span class="name">哪吒传奇</span>
                <span class="money">5000元/月</span>
              </div>
              <div class="intro-list">
                <i class="icon-work" />
                <span class="work-time">三年工作经验</span>
                <span class="address">北京</span>
              </div>
              <div class="intro-list">
                <i class="icon-power" />
                <span class="work-power">能力值</span>
                <i class="power-type power-type-1" />
                <i class="power-type power-type-2" />
                <i class="power-type power-type-3" />
              </div>
              <div class="intro-list">
                <span class="work-type color1">网页设计</span>
                <span class="work-type color2">banner</span>
                <span class="work-type color3">电商设计</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../../icon/home/man.png">
            <div class="intro">
              <div class="intro-list">
                <span class="name">哪吒传奇</span>
                <span class="money">5000元/月</span>
              </div>
              <div class="intro-list">
                <i class="icon-work" />
                <span class="work-time">三年工作经验</span>
                <span class="address">北京</span>
              </div>
              <div class="intro-list">
                <i class="icon-power" />
                <span class="work-power">能力值</span>
                <i class="power-type power-type-1" />
                <i class="power-type power-type-2" />
                <i class="power-type power-type-3" />
              </div>
              <div class="intro-list">
                <span class="work-type color1">网页设计</span>
                <span class="work-type color2">banner</span>
                <span class="work-type color3">电商设计</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'Swiper'
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data () {
    return {
      Swiper: '',
      Swiper1: '',
      BScroll: '',
      navList: [
        {
          img: require('@/icon/home/wabj.png'),
          value: '文案编辑'
        }, {
          img: require('@/icon/home/sjmg.png'),
          value: '设计美工'
        }, {
          img: require('@/icon/home/xsyy.png'),
          value: '线上运营'
        }, {
          img: require('@/icon/home/zxkf.png'),
          value: '在线客服'
        }, {
          img: require('@/icon/home/zxxs.png'),
          value: '在线销售'
        }, {
          img: require('@/icon/home/spzz.png'),
          value: '视频制作'
        }, {
          img: require('@/icon/home/itjs.png'),
          value: 'IT技术'
        }, {
          img: require('@/icon/home/dzxq.png'),
          value: '定制需求'
        }, {
          img: require('@/icon/home/qbfl.png'),
          value: '全部分类'
        }
      ],
      navTypeIndex: 0,
      navType: ['平面设计', '新媒体运营', '电话销售', '文案撰写', '电话销售', '新媒体运营']
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
    // banner
    this.Swiper = new Swiper(this.$refs.swiperContainer, {
      direction: 'horizontal',
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    // 雇佣
    this.Swiper1 = new Swiper(this.$refs.swiperContainer1, {
      direction: 'vertical',
      autoplay: true
    })
  }
}
</script>
