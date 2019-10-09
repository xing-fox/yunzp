<style lang="less" scoped>
  @path: '../icon/home';
  @path1: '../icon/me';
  ul {
    width: 100%;
    li {
      display: flex;
      padding: .25rem 0 .4rem 0;
      img {
        width: 1.86rem;
        height: 2.24rem;
        background-image: url('@{path1}/user.png');
        background-size: 1.5rem 1.5rem;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .intro {
        flex: 1;
        .intro-list {
          display: flex;
          align-items: center;
          justify-content: left;
          margin: 0 0 .2rem 0;
          padding: 0 0 0 .28rem;
          i, span {
            line-height: initial;
            display: inline-block;
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
              background-image: url('@{path}/icon_work.png');
              background-size: 100% 100%;
            }
            &.icon-power {
              width: .28rem;
              height: .28rem;
              background-image: url('@{path}/icon_power.png');
              background-size: 100% 100%;
            }
            &.power-type {
              margin: 0 .05rem 0;
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
    <li class="bor-b" v-for="(item, index) in Data" :key="index" @click="changeRoute(item.id)">
      <img :src="item.avatar">
      <div class="intro">
        <div class="intro-list">
          <span class="name">{{ item.user_login }}</span>
          <span class="money">{{ item.yuexin || 0 }}元/小时</span>
        </div>
        <div class="intro-list">
          <i class="icon-work" />
          <span class="work-time" v-if="item.gongling">{{ item.gongling }}年工作经验</span>
          <span class="address" v-if="item.province">{{ item.province }}</span>
        </div>
        <div class="intro-list" v-if="item.level">
          <i class="icon-power" />
          <span class="work-power">能力值</span>
          <i v-for="(list, eq) in Number(item.level)" :key="eq" class="power-type power-type-1" />
          <!-- <i class="power-type power-type-2" />
          <i class="power-type power-type-3" /> -->
        </div>
        <div class="intro-list">
          <span
            v-for="(list, eq) in item.tag"
            :key="eq"
            v-show="eq < 3"
            class="work-type"
            :class="'color' + (eq + 1)">
            {{ list }}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    Data: {
      type: Array
    }
  },
  computed: mapState({
    userInfo: state => state.Login.LoginInfo
  }),
  methods: {
    changeRoute (id) {
      if (!this.userInfo.user_login) {
        return this.$vux.confirm.show({
          title: '',
          content: '您当前还未登录，请先登录?',
          onCancel: () => {},
          confirmText: '登录',
          onConfirm: () => {
            this.$router.push({
              path: 'login'
            })
          }
        })
      }
      this.$router.push({
        path: '/resumedetails',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
