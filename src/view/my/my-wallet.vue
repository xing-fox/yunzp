<style lang="less" scoped>
  .my-wallet {
    font-size: 0;
    width: 100%;
    .bg {
      width: 100%;
      height: 1.56rem;
      background: #0089F9;
      position: relative;
      ul {
        display: flex;
        width: 6.9rem;
        height: 1.7rem;
        background: rgba(255,255,255,1);
        box-shadow: 0px 4px 18px -1px rgba(234,245,255,1);
        border-radius: .06rem;
        position: absolute;
        top: .73rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        &:after {
          content: '';
          width: .01rem;
          height: .56rem;
          background: #ccc;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto auto;
        }
        li {
          flex: 1;
          padding: .37rem 0 0 0;
          .money {
            color: #000;
            font-size: .5rem;
            font-weight: bold;
            height: .7rem;
            line-height: .7rem;
            &.color {
              color: #c8c8c8;
            }
          }
          .title {
            color: #3c3c3c;
            font-size: .28rem;
            height: .4rem;
            line-height: .4rem;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="my-wallet">
    <div class="bg">
      <ul>
        <li>
          <div class="money">¥{{ canUseMoney }}</div>
          <div class="title">可用余额</div>
        </li>
        <li>
          <div class="money color">¥{{ frozenMoney }}</div>
          <div class="title">冻结余额</div>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
import { Mywallet } from '@/fetch/api'
export default {
  name: 'MyWallet',
  data () {
    return {
      canUseMoney: 0,
      frozenMoney: 0
    }
  },
  mounted () {
    Mywallet().then(res => {
      this.canUseMoney = res.data.money
      this.frozenMoney = res.data.freeze
    })
  }
}
</script>
