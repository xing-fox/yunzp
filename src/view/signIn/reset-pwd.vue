<style lang="less" scoped>
  @path: '../../icon/login';
  .reset-pwd {
    font-size: 0;
    width: 100%;
    .content {
      padding: 1.28rem .7rem 0 .7rem;
      .title {
        color: #222;
        font-size: .5rem;
        font-weight: bold;
        margin: 0 0 1rem 0;
        text-align: left;
      }
      label {
        display: flex;
        width: 100%;
        padding: 0 0 .2rem 0;
        text-align: left;
        border-bottom: 1px solid #eee;
        input {
          border: none;
          color: #666;
          font-size: .32rem;
          width: 100%;
          height: .5rem;
          line-height: .5rem;
        }
      }
      .submit {
        color: #fff;
        font-size: .36rem;
        width: 6rem;
        height: .9rem;
        line-height: .9rem;
        margin: .7rem auto 1.3rem;
        border-radius: .45rem;
        text-align: center;
        background:rgba(0, 137, 249, .5);
        &.active {
          pointer-events: fill;
          background: rgba(0, 137, 249, 1);
        }
      }
    }
    .content1 {
      padding: 1rem .7rem 0 .7rem;
      .title {
        color: #222;
        font-size: .36rem;
        font-weight: bold;
      }
      i.success {
        display: inline-block;
        width: 1.1rem;
        height: 1.1rem;
        margin: 1.3rem auto 0;
        background-image: url('@{path}/icon_success.png');
        background-size: 100% 100%;
      }
      .tip {
        color: #9b9b9b;
        font-size: .28rem;
        height: .5rem;
        line-height: .5rem;
        margin: .7rem 0;
      }
      .submit {
        color: #fff;
        font-size: .36rem;
        width: 6rem;
        height: .9rem;
        line-height: .9rem;
        margin: .7rem auto 1.3rem;
        border-radius: .45rem;
        text-align: center;
        background: rgba(0, 137, 249, 1);
      }
    }
  }
</style>

<template>
  <div class="reset-pwd">
    <div class="content" v-if="step == 0">
      <div class="title">重置密码</div>
      <label for="pwd">
        <input v-model="password" type="password" placeholder="请输入新密码">
      </label>
      <div :class="{submit: true, active: VertifyLogin}" @click="sureFunc">
        <span>确认</span>
      </div>
    </div>
    <div class="content1" v-else>
      <div class="title">重置成功</div>
      <i class="success"></i>
      <div class="tip">
        <span>密码重置成功，请登录</span>
      </div>
      <div class="submit" @click="returnFunc">
        <span>回到登录页</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Resetpassword } from '@/fetch/api'
export default {
  name: 'ResetPwd',
  data () {
    return {
      step: 0,
      password: ''
    }
  },
  computed: {
    VertifyLogin () {
      return this.password
    }
  },
  methods: {
    sureFunc () {
      Resetpassword({
        mobile: this.$route.query.tele,
        pass_word: this.password
      }).then(res => {
        if (res.code === 200) {
          this.step = 1
        } else {
          this.$vux.toast.text(res.msg)
        }
      })
    },
    returnFunc () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
