<style lang="less" scoped>
  .forget-password {
    font-size: 0;
    width: 100%;
    .title {
      color: #222;
      font-size: .5rem;
      font-weight: bold;
      margin: 1.28rem 0 1rem .7rem;
      text-align: left;
    }
    .content {
      padding: 0 .7rem;
      label {
        display: flex;
        width: 100%;
        color: #666;
        font-size: .34rem;
        height: .55rem;
        line-height: .55rem;
        padding: 0 0 .2rem 0;
        border-bottom: 1px solid #eee;
        span {
          color: #222;
          font-size: .34rem;
          vertical-align: middle;
        }
        input {
          flex: 1;
          border: none;
          color: #666;
          font-size: .32rem;
          width: 100%;
          height: .55rem;
          line-height: .55rem;
          padding: 0 0 0 .52rem;
          vertical-align: middle;
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
  }
</style>

<template>
  <div class="forget-password">
    <div class="title">验证手机号</div>
    <div class="content">
      <label for="phone">
        <span>+86</span>
        <input v-model="telephone" type="text" placeholder="请输入手机号">
      </label>
      <div :class="{submit: true, active: VertifyLogin}" @click="GetcodeFunc">
        <span>获取验证码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPwd',
  computed: {
    VertifyLogin () {
      return this.telephone
    }
  },
  data () {
    return {
      telephone: ''
    }
  },
  methods: {
    GetcodeFunc () {
      let Reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if (!Reg.test(this.telephone)) return this.$vux.toast.text('手机号输入有误')
      this.$router.push({
        path: '/getcode',
        query: {
          tele: this.telephone
        }
      })
    }
  }
}
</script>
