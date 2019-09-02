<style lang="less" scoped>
  .get-code {
    font-size: 0;
    width: 100%;
    .title {
      color: #222;
      font-size: .5rem;
      font-weight: bold;
      margin: 1.28rem 0 0 .7rem;
      text-align: left;
    }
    .content {
      margin: .1rem .7rem;
      text-align: left;
      .phone {
        width: 100%;
        span {
          font-size: .28rem;
          height: .5rem;
          line-height: .5rem;
          vertical-align: middle;
          &.color1 {
            color: #c8c8c8;
            margin: 0 .1rem 0 0;
          }
          &.color2 {
            color: #3c3c3c;
          }
        }
      }
      label {
        display: flex;
        width: 100%;
        color: #666;
        font-size: .34rem;
        height: .55rem;
        line-height: .55rem;
        margin: .7rem 0 0 0;
        padding: 0 0 .2rem 0;
        border-bottom: 1px solid #eee;
        input {
          flex: 1;
          border: none;
          color: #666;
          font-size: .32rem;
          width: 100%;
          height: .55rem;
          line-height: .55rem;
        }
      }
      .resend {
        color: #9b9b9b;
        font-size: .28rem;
        height: .5rem;
        line-height: .5rem;
        margin: .36rem 0 0 0;
      }
    }
  }
</style>

<template>
  <div class="get-code">
    <div class="title">请输入验证码</div>
    <div class="content">
      <div class="phone">
        <span class="color1">6位验证码已发送</span>
        <span class="color2">0086 {{ $route.query.tele }}</span>
      </div>
      <label for="vertify-code">
        <input v-model="code" type="text" placeholder="请输入验证码">
      </label>
      <div class="resend">
        <span>重新发送 (60s)</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Getcode } from '@/fetch/api'
export default {
  name: 'GetCode',
  VertifyLogin () {
    return this.code
  },
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    Getcode({
      mobile: this.$route.query.tele
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
