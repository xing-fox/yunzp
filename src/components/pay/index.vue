<style lang="less" scoped>
  .employ-model-wrapper {
    font-size: 0;
    width: 100%;
    background: #fff;
    .employ-model-content {
      width: 100%;
      padding: .46rem .3rem .24rem;
      box-sizing: border-box;
      position: relative;
      .title {
        color: #3c3c3c;
        font-size: .36rem;
        font-weight: bold;
        line-height: .5rem;
        text-align: center;
        margin: 0 0 .6rem 0;
      }
      .close {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        background-image: url('../../icon/close.png');
        background-size: 60% 60%;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        top: .46rem;
        left: .38rem;
      }
      .price {
        display: flex;
        color: #222;
        font-size: .3rem;
        line-height: .42rem;
        text-align: left;
        margin: .3rem 1.1rem 0 1rem;
        span {
          flex: 1;
          &:nth-last-child(1) {
            text-align: right;
          }
        }
      }
      .total-money {
        color: #222;
        font-size: .4rem;
        font-weight: bold;
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        margin: .2rem auto;
        span {
          font-size: .24rem;
        }
      }
      .pay-way {
        display: flex;
        margin: 0 .32rem .8rem;
        i.wx {
          width: .4rem;
          height: .4rem;
          background-image: url('../../icon/pay-wx.png');
          background-size: 100% 100%;
        }
        span {
          flex: 1;
          color: #222;
          font-size: .3rem;
          line-height: .42rem;
          margin: 0 0 0 .34rem;
          text-align: left;
        }
        i.choise {
          width: .4rem;
          height: .4rem;
          background-image: url('../../icon/select.png');
          background-size: 100% 100%;
        }
      }
      .submit {
        color: #fff;
        font-size: .36rem;
        width: 100%;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        border-radius: .45rem;
        background: #0089F9;
      }
    }
  }
</style>

<style lang="less">
  .employ-model-wrapper {
    .vux-no-group-title {
      margin-top: 0;
    }
    .weui-cell {
      padding: 0;
      height: .5rem;
      line-height: .5rem;
    }
    .weui-cells {
      margin-top: 0;
      &:before,
      &:after {
        content: none;
      }
    }
    .vux-cell-value {
      color: #3c3c3c;
      font-size: .3rem;
    }
  }
</style>

<template>
  <div class="employ-model-wrapper">
    <div class="employ-model-content">
      <div class="title">支付金额</div>
      <i class="close" @click="$emit('closeEmploy')"/>
      <div class="price">
        <span>合计费用</span>
        <span>¥{{ payMoney }}</span>
      </div>
      <div class="total-money">
        <span>¥</span>{{ payMoney }}
      </div>
      <div class="pay-way">
        <i class="wx" />
        <span>微信支付</span>
        <i class="choise" />
      </div>
      <div class="submit" @click="$emit('paySure')">
        <span>支付宝支付¥{{ payMoney }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payMoney: {
      type: Number || String,
      default: 0
    }
  },
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>
