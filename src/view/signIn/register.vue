<style lang="less" scoped>
.signIn-register {
  font-size: 0;
  width: 100%;
  .title {
    color: #222;
    font-size: 0.5rem;
    font-weight: bold;
    margin: 1.28rem 0 1rem 0.7rem;
    text-align: left;
  }
  .content {
    padding: 0 0.7rem;
    .choise {
      display: flex;
      color: #3c3c3c;
      font-size: 0.36rem;
      height: 0.5rem;
      line-height: 0.5rem;
      margin: 0 0 0.6rem 0;
      padding: 0 0 0.2rem 0;
      border-bottom: 1px solid #eee;
      span {
        font-weight: bold;
        &.tip {
          color: #c8c8c8;
          font-weight: inherit;
          margin: 0 0.2rem 0 0;
        }
      }
    }
    label {
      display: inline-block;
      width: 100%;
      padding: 0 0 0.2rem 0;
      border-bottom: 1px solid #eee;
      &:nth-child(1) {
        margin: 0 0 0.6rem 0;
      }
      input {
        border: none;
        color: #666;
        font-size: 0.32rem;
        width: 100%;
        height: 0.55rem;
        line-height: 0.55rem;
        border-radius: 0;
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
      background: rgba(0, 137, 249, 0.5);
      &.active {
        background: rgba(0, 137, 249, 1);
      }
    }
  }
  .to-login {
    font-weight: 400;
    width: 100%;
    text-align: center;
    a {
      color: rgba(0, 137, 249, 1);
      font-size: .32rem;
    }
  }
  .step1 {
    width: 100%;
  }
  .step2 {
    width: 100%;
    padding: 3rem 0 0 0;
  }
}
</style>

<template>
  <div class="signIn-register">
    <div class="step1" v-if="step == 0">
      <div class="title">欢迎来到云雇佣</div>
      <div class="content">
        <!-- 选择身份 -->
        <!-- <div class="choise">
          <span class="tip">请选择身份</span>
          <popup-picker :data="roleData" :columns="1" :show-name="true" v-model="roleVal"/>
        </div> -->
        <label for="account">
          <input v-model="username" type="text" placeholder="请输入用户名">
        </label>
        <div :class="{submit: true, active: vertifyUserName}" @click="step = 1">
          <span>下一步</span>
        </div>
      </div>
      <div class="to-login">
        <router-link to="/login">
          <span>使用账号密码登录</span>
        </router-link>
      </div>
    </div>
    <div class="step2" v-if="step == 1">
      <div class="content">
        <label for="account">
          <input v-model="telephone" type="text" placeholder="请输入手机号">
        </label>
        <label for="account">
          <input v-model="password" type="text" placeholder="请输入密码">
        </label>
        <div :class="{submit: true, active: vertifyRegister}" class="submit" @click="submitFunc">
          <span>注册</span>
        </div>
      </div>
      <div class="to-login">
        <router-link to="/login">
          <span>使用账号密码登录</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { PopupPicker } from 'vux'
import { Register } from '@/fetch/api'
export default {
  name: 'Login',
  data () {
    return {
      roleVal: ['1'],
      roleData: [{
        value: '1',
        name: '雇主'
      }, {
        value: '2',
        name: '员工'
      }],
      step: 0,
      username: '',
      password: '',
      telephone: ''
    }
  },
  computed: {
    vertifyUserName () {
      return this.username
    },
    vertifyRegister () {
      return this.password && this.telephone
    }
  },
  components: {
    PopupPicker
  },
  methods: {
    submitFunc () {
      Register({
        mobile: this.telephone, // 手机号码
        username: this.username, // 用户名
        user_pass: this.password // 密码
        // work_type: '' // 身份类型
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$vux.toast.text('注册成功')
          this.$router.push({
            path: '/login'
          })
        } else {
          this.step = 0
          this.$vux.toast.text(res.msg)
        }
      })
    }
  }
}
</script>
