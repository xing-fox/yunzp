<style lang="less" scoped>
  .nav-me {
    font-size: 0;
    width: 100%;
    .header {
      width: 100%;
      height: 4.43rem;
      padding: 1.5rem 0 0 0;
      box-sizing: border-box;
      background:linear-gradient(270deg, rgba(0, 137, 249, 1) 0%, rgba(35, 179, 255, 1) 100%);
      .uers {
        display: flex;
        padding: 0 0 0 .3rem;
        position: relative;
        i {
          display: inline-block;
          width: .42rem;
          height: .42rem;
          position: absolute;
          left: 1.18rem;
          bottom: 0;
          background-image: url('../../icon/me/photo.png');
          background-size: 100% 100%;
        }
        img {
          width: 1.3rem;
          height: 1.3rem;
          margin: 0 .3rem 0 0;
          border-radius: 50%;
        }
        .users-login {
          color: #fff;
          font-size: .28rem;
          height: .65rem;
          line-height: .65rem;
          margin: .06rem 0 0 0;
          text-align: left;
          .title {
            font-size: .46rem;
            font-weight:400;
          }
        }
      }
      .nav {
        height: 1.7rem;
        margin: .58rem .3rem 0;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 7px 11px 0px rgba(243, 247, 251, 1);
        border-radius: .06rem;
        ul {
          display: flex;
          width: 100%;
          li {
            flex: 1;
            color:rgba(60, 60, 60, 1);
            font-size: .28rem;
            padding: .3rem 0 0 0;
            text-align: center;
            img {
              width: .64rem;
              height: .64rem;
            }
            span {
              display: inline-block;
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
    .server {
      margin: 1.3rem .3rem 0;
      .title {
        color: rgba(60, 60, 60, 1);
        font-size: .38rem;
        font-weight: 600;
        height: .53rem;
        line-height: .53rem;
        text-align: left;
      }
      ul {
        width: 100%;
        margin: .56rem 0 0 0;
        text-align: left;
        li {
          display: inline-block;
          color: rgba(60, 60, 60, 1);
          font-size: .28rem;
          width: 1.14rem;
          margin: 0 .75rem .5rem 0;
          text-align: center;
          &:nth-child(4) {
            margin: 0;
          }
          img {
            width: .6rem;
            height: .6rem;
          }
          span {
            display: inline-block;
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            margin: .1rem 0 0 0;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="nav-me">
    <div class="header">
      <div class="uers">
        <img src="../../icon/me/user.png" />
        <i class="photo" />
        <div class="users-login">
          <div class="title" v-if="!UserInfo.user_login" @click="loginInFunc">登陆注册</div>
          <div class="name" v-else>{{ UserInfo.user_login }}</div>
          <div>欢迎来到云雇佣~</div>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li @click="routeChange('/mywallet')">
            <img src="../../icon/me/my_wallet.png">
            <span>我的钱包</span>
          </li>
          <li @click="routeChange('/mystaff')">
            <img src="../../icon/me/my_staff.png">
            <span>我的员工</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="server">
      <div class="title">其他服务</div>
      <ul>
        <li @click="routeChange('/mytraderecord')">
          <img src="../../icon/me/icon_money.png">
          <span>交易记录</span>
        </li>
        <li @click="routeChange('/myemployrecord')">
          <img src="../../icon/me/icon_employ.png">
          <span>雇佣记录</span>
        </li>
        <li @click="routeChange('/myresume')">
          <img src="../../icon/me/icon_resume.png">
          <span>已收简历</span>
        </li>
        <li @click="routeChange('/myresume')">
          <img src="../../icon/me/icon_collet.png">
          <span>我的收藏</span>
        </li>
        <!-- <li @click="routeChange('/myresume')">
          <img src="../../icon/me/icon_invite.png">
          <span>邀请好友</span>
        </li> -->
        <li @click="routeChange('/myresume')">
          <img src="../../icon/me/icon_server.png">
          <span>联系客服</span>
        </li>
        <li @click="signOut">
          <img src="../../icon/me/icon_close.png">
          <span>退出登录</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Loginout } from '@/fetch/api'
export default {
  name: 'Me',
  computed: mapState({
    UserInfo: state => state.Login.LoginInfo
  }),
  methods: {
    ...mapMutations([
      'StoreLoginInfo'
    ]),
    signOut () {
      Loginout().then(res => {
        if (res.code === 200) {
          this.StoreLoginInfo({})
          this.$vux.toast.text('已退出登录')
        }
      })
    },
    loginInFunc () {
      this.$router.push({
        path: '/login'
      })
    },
    routeChange (path) {
      if (this.UserInfo.user_login) {
        this.$router.push({
          path: path
        })
      } else {
        this.$vux.confirm.show({
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
    }
  }
}
</script>
