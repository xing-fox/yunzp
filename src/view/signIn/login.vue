<style lang="less" scoped>
  .signIn-login {
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
        display: inline-block;
        width: 100%;
        &:nth-child(1) {
          margin: 0 0 .6rem 0;
        }
        input {
          border: none;
          color: #666;
          font-size: .36rem;
          width: 100%;
          height: .55rem;
          line-height: .55rem;
          padding: 0 0 .2rem 0;
          border-bottom: 1px solid #eee;
        }
      }
      .forget-password {
        color: #c8c8c8;
        font-size: .28rem;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        margin: .2rem 0 0 0;
        text-align: right;
      }
      .submit {
        color: #fff;
        font-size: .36rem;
        width: 6rem;
        height: .9rem;
        line-height: .9rem;
        margin: .6rem auto 1.3rem;
        border-radius: .45rem;
        text-align: center;
        background:rgba(0, 137, 249, .5);
      }
    }
    .to-register {
      color:rgba(0, 137, 249, 1);
      font-size: .32rem;
      font-weight: 400;
      width: 100%;
      text-align: center;
    }
  }
</style>

<template>
  <div class="signIn-login">
    <div class="title">欢迎来到云雇佣</div>
    <div class="content">
      <label for="account">
        <input type="text" placeholder="请输入账号">
      </label>
      <label for="account">
        <input type="text" placeholder="请输入密码">
      </label>
      <div class="forget-password">
        <span>忘记密码</span>
      </div>
      <div class="submit">
        <span>登录</span>
      </div>
    </div>
    <div class="to-register">
      <span>没有账号？立即注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
