<style lang="less" scoped>
  @path: '../icon/home';
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
</style>

<template>
  <ul>
    <li v-for="(item, index) in Data" :key="index">
      <img :src="item.avatar">
      <div class="intro">
        <div class="intro-list">
          <span class="name">{{ item.user_login }}</span>
          <span class="money">{{ item.yuexin }}元/月</span>
        </div>
        <div class="intro-list">
          <i class="icon-work" />
          <span class="work-time">{{ item.gongling }}年工作经验</span>
          <span class="address">{{ item.province }}</span>
        </div>
        <div class="intro-list">
          <i class="icon-power" />
          <span class="work-power">能力值</span>
          <i v-for="(list, eq) in Number(item.level)" :key="eq" class="power-type power-type-1" />
          <!-- <i class="power-type power-type-2" />
          <i class="power-type power-type-3" /> -->
        </div>
        <div class="intro-list">
          <span v-for="(list, eq) in item.tag" :key="eq" v-if="eq < 3" class="work-type" :class="'color' + (eq + 1)">{{ list }}</span>
          <!-- <span class="work-type color1">网页设计</span>
          <span class="work-type color2">banner</span>
          <span class="work-type color3">电商设计</span> -->
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    Data: {
      type: Array
    }
  }
}
</script>
