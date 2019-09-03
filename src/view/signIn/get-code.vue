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
        margin: .1rem 0 0 0;
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
      <div class="resend" @click="setTimeFunc">
        <span v-if="time == 0" @click="countTime">重新发送</span>
        <span v-else>({{ time }}s)</span>
      </div>
      <div :class="{submit: true, active: VertifyLogin}" @click="checkCodeFunc">
        <span>验证码验证</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Getcode, Checkcode } from '@/fetch/api'
export default {
  name: 'GetCode',
  VertifyLogin () {
    return this.code
  },
  data () {
    return {
      code: '',
      time: 60,
      setTime: ''
    }
  },
  computed: {
    VertifyLogin () {
      return this.code
    }
  },
  mounted () {
    this.countTime()
  },
  methods: {
    countTime () {
      Getcode({
        mobile: this.$route.query.tele
      }).then(res => {
        console.log(res)
      })
      this.setTime = setInterval(() => {
        this.time--
        if (this.time === 0) clearInterval(this.setTime)
      }, 1000)
    },
    setTimeFunc () {},
    checkCodeFunc () {
      Checkcode({
        mobile: this.$route.query.tele,
        verification_code: this.code
      }).then(res => {
        if (res.code === 200) {
          this.$router.push({
            path: '/resetpwd',
            query: {
              tele: this.$route.query.tele
            }
          })
        } else {
          this.$vux.toast.text(res.msg)
        }
      })
    }
  }
}
</script>
