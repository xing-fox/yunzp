<style lang="less" scoped>
  @path: '../icon/home';
  @path1: '../icon/me';
  .resume-details {
    font-size: 0;
    width: 100%;
    position: relative;
    .header {
      width: 100%;
      height: 3.65rem;
      padding: .5rem 0 0 0;
      box-sizing: border-box;
      background:rgba(216, 216, 216, 1);
      position: relative;
      .info {
        width: 100%;
        text-align: center;
        img {
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
          background-image: url('@{path1}/user.png');
          background-size: 1rem 1rem;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .name {
          color: #fff;
          font-size: .42rem;
          font-weight: bold;
          width: 100%;
          margin: .15rem 0 .06rem;
        }
        .tag {
          color: #fff;
          font-size: .3rem;
          span {
            margin: 0 .02rem;
          }
        }
      }
      ul.evaluate {
        display: flex;
        width: 7.02rem;
        height: 1.6rem;
        margin: .3rem auto 0;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 8px 16px 0px rgba(245, 245, 245,0.5);
        border-radius: .06rem;
        li {
          flex: 1;
          padding: .4rem 0;
          text-align: center;
          .title {
            color: #3c3c3c;
            font-size: .28rem;
            height: .4rem;
            line-height: .4rem;
          }
          .score {
            margin: .1rem 0 0 0;
            i {
              display: inline-block;
              width: .28rem;
              height: .28rem;
              margin: 0 .02rem 0 0;
              background-size: 100% 100%;
              &:nth-last-child(1) {
                margin: 0;
              }
              &.full {
                background-image: url('@{path}/icon_power3.png');
              }
              &.half {
                background-image: url('@{path}/icon_power2.png');
              }
              &.empty {
                background-image: url('@{path}/icon_power1.png');
              }
            }
          }
        }
      }
    }
    .content {
      padding: 1.86rem .24rem 1.5rem;
      position: relative;
      ul.nav {
        display: flex;
        width: 100%;
        padding: .2rem 0;
        background: #fff;
        &.fix {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
        li {
          flex: 1;
          color: #9b9b9b;
          font-size: .3rem;
          height: .6rem;
          line-height: .6rem;
          text-align: center;
          &.active {
            color: #3c3c3c;
            font-size: .34rem;
            position: relative;
            &:after {
              content: '';
              width: .34rem;
              height: .04rem;
              border-radius: .02rem;
              background: #0089F9;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              margin: 0 auto;
            }
          }
        }
      }
      .title {
        color: #222;
        font-size: .38rem;
        font-weight: bold;
        height: .5rem;
        line-height: .5rem;
        margin: .5rem auto .6rem;
        text-align: left;
      }
      ul.box {
        width: 7rem;
        margin: 0 auto;
        padding: .4rem 0 .4rem .2rem;
        text-align: left;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        box-shadow: -.04rem .03rem .3rem 0 rgba(231, 230, 230, .5);
        border-radius: .06rem;
        li {
          color: #3c3c3c;
          font-size: .3rem;
          font-weight: bold;
          height: .42rem;
          line-height: .42rem;
          span {
            color: #9b9b9b;
            font-size: .28rem;
            font-weight: initial;
          }
        }
      }
      .tree {
        width: 100%;
        text-align: left;
        .time {
          color: #9b9b9b;
          font-size: .28rem;
        }
        .content {
          width: 6.3rem;
          margin: .2rem 0 .2rem .73rem;
          padding: .34rem .47rem .34rem .43rem;
          box-sizing: border-box;
          box-shadow: -.04rem .03rem .3rem 0 rgba(231, 230, 230, .5);
          border-radius: .06rem;
          position: relative;
          &:before {
            content: '';
            width: .02rem;
            height: 100%;
            background: #eee;
            position: absolute;
            top: 0;
            left: -.3rem;
            bottom: 0;
          }
          .company {
            color: #3c3c3c;
            font-size: .3rem;
            font-weight: bold;
            span {
              font-size: .24rem;
              font-weight: initial;
            }
          }
          .main {
            color: #3c3c3c;
            font-size: .28rem;
            margin: .2rem 0 0 0;
          }
        }
      }
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 1.3rem;
      padding: .2rem;
      box-sizing:border-box;
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-top: 1px solid #eee;
        position: absolute;
        left: 0;
        bottom: 0;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        box-sizing: border-box;
      }
      .box {
        flex: 1;
        text-align: left;
        padding: .1rem 0 0 0;
        i {
          display: inline-block;
          width: .44rem;
          height: .44rem;
          background-size: 100% 100%;
          &.collect {
            background-image: url('@{path1}/icon_collet.png');
          }
          &.share {
            background-image: url('@{path1}/icon_invite.png');
          }
        }
        span {
          display: inline-block;
          color: #3c3c3c;
          font-size: .2rem;
          width: 100%;
        }
      }
      .contact {
        color: #fff;
        font-size: .32rem;
        width: 2.14rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        border-radius: .45rem;
        background: #0089F9;
      }
      .employ {
        color: #fff;
        font-size: .32rem;
        width: 2rem;
        height: .8rem;
        line-height: .8rem;
        margin: 0 0 0 .2rem;
        text-align: center;
        border-radius: .45rem;
        box-sizing: border-box;
        background: #0089F9;
      }
    }
  }
</style>

<template>
  <div class="resume-details">
    <div class="header">
      <div class="info">
        <img :src="Data.avatar">
        <div class="name">
          <span>{{ Data.xingming }}</span>
        </div>
        <div class="tag">
          <span
            v-for="(item, index) in Data.tag_name"
            :key="index">
            {{ item }}</span>
        </div>
      </div>
      <ul class="evaluate">
        <li>
          <div class="title">服务态度</div>
          <div class="score">
            <i
              v-for="(item, index) in Data.service_attitude"
              :key="index"
              class="full" />
            <!-- <i class="half" />
            <i class="empty" /> -->
          </div>
        </li>
        <li>
          <div class="title">技能等级</div>
          <div class="score">
            <i
              v-for="(item, index) in Data.design_capacity"
              :key="index"
              class="full" />
          </div>
        </li>
        <li>
          <div class="title">相应态度</div>
          <div class="score">
            <i
              v-for="(item, index) in Data.related_attitude"
              :key="index"
              class="full" />
          </div>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul :class="['nav', {fix: scrollTop > compileHeight}]">
        <li class="active">个人简历</li>
        <!-- <li>作品(12)</li>
        <li>评价(15)</li> -->
      </ul>
      <div class="title">
        <span>基本信息</span>
      </div>
      <ul class="box">
        <li>
          <span>最高学历：</span>
          {{ Data.xueli | EducatFilter}}
        </li>
        <li>
          <span>工作年限：</span>
          {{ Data.gongling }}年以上
        </li>
        <li>
          <span>出生日期：</span>
          {{ Data.nian }}年 {{ Data.yue }}月
        </li>
        <li>
          <span>所在城市：</span>
          {{ Data.address }}
        </li>
        <!-- <li>
          <span>擅长类目：</span>
          足球/篮球/羽毛球
        </li> -->
      </ul>
      <div class="title">
        <span>工作经历</span>
      </div>
      <div class="tree" v-for="(item, index) in Data.work_history" :key="index">
        <div class="time">{{ item.start_time }} —— {{ item.end_time }}</div>
        <div class="content">
          <div class="company">
            {{ item.CompName }} <span>-- {{ item.PositionName}}</span>
          </div>
          <div class="main">
            {{ item.Performance }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- <div class="box" @click="collectFunc">
        <i class="collect"></i>
        <span>收藏</span>
      </div>
      <div class="box">
        <i class="share"></i>
        <span>分享</span>
      </div> -->
      <div class="contact" @click="routeChange">
        立即联系
      </div>
      <div class="employ" @click="employStatus = true">
        聘用
        <!-- <span>¥1666/小时</span> -->
      </div>
    </div>
    <!-- 雇佣详情 -->
    <Popup :popup-style="{popupStyle}" v-model="employStatus" :is-transparent="true">
      <resume-employ @closeEmploy="employStatus = false" @paySure="payEmployMoney" />
    </Popup>
    <!-- 支付页面 -->
    <Popup :popup-style="{popupPayStyle}" v-model="payStatus" :is-transparent="true">
      <pay-way :payMoney="payMoney" @paySure="payFunc" @closeEmploy="payStatus = false" />
    </Popup>
  </div>
</template>

<script>
import { Popup } from 'vux'
import PayWay from '@/components/pay/index'
import ResumeEmploy from '@/components/employ/index'
import { ResumeInfo, MemberRecharge } from '@/fetch/api'
export default {
  name: 'ResumeDetails',
  data () {
    return {
      Data: {}, // 数据
      scrollTop: 0,
      popupStyle: {
        zIndex: 10
      },
      popupPayStyle: {
        zIndex: 11
      },
      payStatus: false,
      employStatus: false,
      payMoney: 0 // 支付金额
    }
  },
  computed: {
    compileHeight () {
      return window.innerWidth * 0.73
    }
  },
  components: {
    Popup,
    PayWay,
    ResumeEmploy
  },
  filters: {
    EducatFilter (val) {
      return ['初中', '高中', '大专', '本科', '研究生', '博士'][Number(val) + 1]
    }
  },
  methods: {
    collectFunc () {
      this.$vux.toast.text('已收藏')
    },
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || document.scrollingElement.scrollTop || 0
    },
    payEmployMoney (val) {
      this.payMoney = val
      this.payStatus = true
    },
    payFunc () {
      MemberRecharge({
        amount: 0.01,
        pay_type: 1,
        client_type: 1
        // user_id: 1340
      }).then(res => {
        if (res.code === 200) {
          window.location.href = res.data.pay_url
        }
      })
    },
    routeChange () {
      this.$router.push({
        path: '/customerservice'
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    ResumeInfo({
      member_id: this.$route.query.id
      // user_id: 1340
    }).then(res => {
      if (res.code === 200) {
        this.Data = res.data
      }
    })
  }
}
</script>
