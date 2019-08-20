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
      ul.nav {
        display: flex;
        width: 100%;
        li {
          flex: 1;
          color: #9b9b9b;
          font-size: .3rem;
          height: .6rem;
          line-height: .6rem;
          text-align: center;
          &.active {
            color: #3c3c3c;
            font-size: .32rem;
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
        margin: .7rem auto .6rem;
        text-align: left;
      }
      ul.box {
        width: 7rem;
        margin: 0 auto;
        padding: .34rem 0 .54rem .2rem;
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
      .box {
        flex: 1;
        text-align: center;
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
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        border-radius: .45rem;
        background: #0089F9;
      }
      .employ {
        color: #fff;
        font-size: .32rem;
        width: 2.58rem;
        height: .9rem;
        line-height: .4rem;
        margin: 0 0 0 .2rem;
        padding: .05rem 0 0 0;
        text-align: center;
        border-radius: .45rem;
        box-sizing: border-box;
        background: #0089F9;
        span {
          display:inline-block;
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="resume-details">
    <div class="header">
      <div class="info">
        <img src="../icon/home/man.png">
        <div class="name">
          <span>猫猫（tata4567）</span>
        </div>
        <div class="tag">
          <span>网页设计/Banner/电商设计</span>
        </div>
      </div>
      <ul class="evaluate">
        <li>
          <div class="title">服务态度</div>
          <div class="score">
            <i class="full" />
            <i class="half" />
            <i class="empty" />
          </div>
        </li>
        <li>
          <div class="title">设计能力</div>
          <div class="score">
            <i class="full" />
            <i class="half" />
            <i class="empty" />
          </div>
        </li>
        <li>
          <div class="title">相应态度</div>
          <div class="score">
            <i class="full" />
            <i class="half" />
            <i class="empty" />
          </div>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul class="nav">
        <li class="active">简历</li>
        <li>作品(12)</li>
        <li>评价(15)</li>
      </ul>
      <div class="title">
        <span>基本信息</span>
      </div>
      <ul class="box">
        <li>
          <span>最高学历：</span>
          本科
        </li>
        <li>
          <span>工作年限：</span>
          3年以上
        </li>
        <li>
          <span>出生年份：</span>
          1989-09-09
        </li>
        <li>
          <span>所在城市：</span>
          合肥市
        </li>
        <li>
          <span>擅长类目：</span>
          足球/篮球/羽毛球
        </li>
      </ul>
      <div class="title">
        <span>工作经历</span>
      </div>
      <div class="tree">
        <div class="time">2017/03-2019/04</div>
        <div class="content">
          <div class="company">
            春虎愿意官方旗舰店
          </div>
          <div class="main">
            主要负责网页的设计，页面的设计；主要负责网页的设计，页面的设计主要负责网页的设计，页面的设计；主要负责网页的设计，页面的设计
          </div>
        </div>
      </div>
      <div class="tree">
        <div class="time">2017/03-2019/04</div>
        <div class="content">
          <div class="company">
            春虎愿意官方旗舰店
          </div>
          <div class="main">
            主要负责网页的设计，页面的设计；主要负责网页的设计，页面的设计主要负责网页的设计，页面的设计；主要负责网页的设计，页面的设计
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="box">
        <i class="collect"></i>
        <span>收藏</span>
      </div>
      <div class="box">
        <i class="share"></i>
        <span>分享</span>
      </div>
      <div class="contact">
        立即联系
      </div>
      <div class="employ">
        雇佣
        <span>¥1666/月</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeDetails',
  mounted () {
    // console.log(this.$route.meta)
  }
}
</script>
