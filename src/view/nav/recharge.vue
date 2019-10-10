<style lang="less" scoped>
@path: '../../icon/buy';
#wrapper-buy {
  padding: .22rem .32rem 1rem;
  .account {
    color: #101010;
    font-size: .36rem;
    height: .5rem;
    line-height: .5rem;
    span {
      font-weight: bold;
    }
  }
  .balance {
    color: #fff;
    width: 6.86rem;
    height: 2.2rem;
    margin: .2rem auto 0;
    text-align: center;
    background-image: url('@{path}/balance_bg.png');
    background-size: 100% 100%;
    .title {
      font-size: .3rem;
      width: 100%;
      padding: .54rem 0 0 0;
    }
    .money {
      font-size: .4rem;
      font-weight: bold;
      width: 100%;
      line-height: .84rem;
      span {
        font-size: .6rem;
      }
    }
  }
}
.content{
  margin: .64rem 0 0 0;
  .content-title{
    color: #222;
    font-size: .36rem;
    font-weight: bold;
    line-height: .5rem;
    position: relative;
  }
  .list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: .3rem 0 0 0;
    .list-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #A07B34;
      width: 3.38rem;
      height: 2.1rem;
      margin-right: .1rem;
      margin-bottom: .1rem;
      border: .02rem solid #D0BA8A;
      border-radius: .08rem;
      text-align: center;
      position: relative;
      &.active {
        background-image: linear-gradient(90deg, #F4DD9F 0%, #E2C687 100%);
      }
      &:nth-child(2n) {
        margin: 0;
      }
      span{
        font-size: .44rem;
        font-weight: bold;
        text-indent: -.02rem;
      }
      p{
        font-size: .3rem;
      }
    }
  }
}
.select::before{
  position: absolute;
  content: '';
  display: block;
  width: .6rem;
  height: .6rem;
  background: url('@{path}/select_icon.png') no-repeat;
  background-size: contain;
  top: 0;
  left: 0;
}
.btn{
  color: #fff;
  font-size: .36rem;
  width: 100%;
  height: .9rem;
  line-height: .9rem;
  margin: .6rem 0 0 0;
  letter-spacing: 1px;
  border-radius: .45rem;
  background:linear-gradient(270deg, rgba(0, 137, 249, 1) 0%, rgba(35, 179, 255, 1) 100%);
}
</style>

<style lang="less">
  .vux-popup-dialog {
    z-index: 502 !important;
  }
</style>

<template>
  <div id="wrapper-buy">
    <div class="account">
      <span>账号：</span>{{userInfo.user_login || '未登录'}}
    </div>
    <div class="balance">
      <div class="title">当前可用</div>
      <div class="money">￥<span>{{userInfo.money}}</span></div>
    </div>
    <div class="content">
      <div class="content-title">充值专区</div>
      <div class="list">
        <div
        v-for="(item, index) in list"
        :key="index"
        :class="{'list-item': true, 'active': index == select}"
        @click="changeSelect(index)">
        <span>￥{{item.rechargeFee}}</span>
        </div>
      </div>
      <div class="btn" @click="payStatus = true">立即以{{list[select].rechargeFee}}元充值</div>
    </div>
    <!-- 支付页面 -->
    <Popup
      v-model="payStatus"
      :is-transparent="true"
      :popup-style="{popupPayStyle}">
      <pay-way
        @paySure="payFunc"
        :payMoney="payMoney"
        @closeEmploy="payStatus = false" />
    </Popup>
  </div>
</template>

<script>
import { Popup } from 'vux'
import { MemberRecharge } from '@/fetch/api'
import PayWay from '@/components/pay/index'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'commonBuy',
  data () {
    return {
      list: [{
        rechargeFee: 1000
      }, {
        rechargeFee: 3000
      }, {
        rechargeFee: 5000
      }, {
        rechargeFee: 10000
      }],
      select: 0,
      payStatus: false,
      payMoney: 0,
      popupPayStyle: {
        zIndex: 10
      }
    }
  },
  computed: mapState({
    userInfo: state => state.Login.LoginInfo
  }),
  components: {
    Popup,
    PayWay
  },
  methods: {
    ...mapMutations([
      'StoreLoginInfo'
    ]),
    payFunc () {
      MemberRecharge({
        amount: 0.01,
        pay_type: 1,
        client_type: 1
        // user_id: 1340
      }).then(res => {
        if (res.code === 200) {
          window.location.href = res.data.pay_url
        }
      })
    },
    changeSelect (index) {
      this.select = index
    },
    canBuy () {
      this.showBuyBox = true
    },
    update () {
      // this.closeBuyBox()
      this.$vux.toast.show({
        text: '充值成功',
        type: 'success',
        position: 'middle'
      })
      this.getUserInfo()
    },
    getIndexCoupon () {
      // GetIndexCoupon().then((res) => {
      //   this.list = res.data
      // })
    },
    getUserInfo () {
      // GetUserInfo().then(res => {
      //   if (res.code === 0) {
      //     this.StoreLoginInfo(res.data)
      //   }
      // })
    },
    testPay () {
      if (sessionStorage.getItem('outTradeNo')) {
        this.$vux.loading.show({
          text: '充值中'
        })
        // PostQueryRecharge({outTradeNo: sessionStorage.getItem('outTradeNo')}).then(res => {
        //   this.$vux.loading.hide()
        //   if (res.code === 0) {
        //     this.$vux.toast.show({
        //       text: '充值成功',
        //       type: 'success',
        //       position: 'middle'
        //     })
        //     this.getUserInfo()
        //   } else {
        //     this.$vux.toast.show({
        //       text: `充值失败`,
        //       type: 'cancel',
        //       position: 'middle'
        //     })
        //   }
        //   sessionStorage.removeItem('outTradeNo')
        // })
      } else {
        this.$vux.toast.show({
          text: '未检测到订单',
          type: 'cancel',
          position: 'middle',
          time: 2000
        })
      }
    },
    payCallback () {
      this.$vux.confirm.show({
        title: '是否完成支付',
        confirmText: '已支付',
        cancelText: '未支付',
        onConfirm: this.testPay,
        onCancel: () => {
          sessionStorage.removeItem('outTradeNo')
        }
      })
    }
  },
  mounted () {
    this.payMoney = this.list[this.select].rechargeFee
  }
}
</script>
