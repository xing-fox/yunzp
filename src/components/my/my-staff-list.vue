<style lang="less" scoped>
  .my-staff-list {
    font-size: 0;
    width: 100%;
    ul {
      padding: 0 0 .5rem 0;
      li {
        width: 100%;
        padding: .3rem 0 .4rem 0;
        border-bottom: 1px solid #eee;
        .li-content {
          display: flex;
          width: 100%;
          .c-left {
            width: 1.54rem;
            height: 1.84rem;
            vertical-align: top;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .c-right {
            flex: 1;
            padding: .1rem 0 0 .18rem;
            vertical-align: top;
            .title {
              color: #3c3c3c;
              font-size: .34rem;
              font-weight: bold;
              height: .48rem;
              line-height: .48rem;
              span {
                float: left;
                font-size: .3rem;
                width: 50%;
                &.type {
                  text-align: right;
                }
                &.type-success {
                  color: #ff0000;
                }
                &.type-fail {
                  color: #0089F9;
                }
              }
            }
            .time,
            .money {
              color: #9b9b9b;
              font-size: .3rem;
              height: .26rem;
              line-height: .26rem;
              margin: .3rem 0 0 0;
              span {
                color: #3c3c3c;
              }
            }
            .money {
              span {
                color: #FF0000;
                font-weight: bold;
              }
            }
          }
        }
        .li-bottom {
          width: 100%;
          margin: .6rem 0 0 0;
          text-align: right;
          .button {
            display: inline-block;
            font-size: .28rem;
            width: 1.9rem;
            height: .64rem;
            text-align: center;
            margin: 0 0 0 .32rem;
            border-radius: .32rem;
            box-sizing: border-box;
            vertical-align: middle;
            &.button-pay {
              color: #0089F9;
              border: 1px solid #0089F9;
            }
            &.button-color {
              color: #222;
              border: 1px solid rgba(140, 140, 140, .6);
            }
            .button-box {
              display: table;
              width: 100%;
              height: 100%;
              overflow: hidden;
              span {
                vertical-align: middle;
                display: table-cell;
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="my-staff-list">
    <ul>
      <li v-for="(item, index) in Data" :key="index">
        <div class="li-content">
          <div class="c-left">
            <img :src="item.avator">
          </div>
          <div class="c-right">
            <div class="title">
              <span>{{ item.user_login }}</span>
              <!-- <span class="type type-success">交易成功</span> -->
              <span v-if="!FromTrade && !FromStaff" class="type type-fail">退款成功</span>
            </div>
            <div class="time">
              雇佣周期：<span>{{ item.start_time }}—{{ item.end_time }}</span>
            </div>
            <div class="money" v-if="!FromTrade">
              托管金额：<span>¥{{ item.gongzi }}</span>
            </div>
            <div class="money" v-if="FromTrade">
              托管金额：<span>¥{{ item.gongzi }}</span>
            </div>
          </div>
        </div>
        <div class="li-bottom" v-if="NoButton">
          <div v-if="FromTrade && !FromStaff" class="button button-color">
            <div class="button-box">
              <span>联系Ta</span>
            </div>
          </div>
          <div v-if="!FromTrade && !FromStaff" class="button button-color">
            <div class="button-box">
              <span>取消订单</span>
            </div>
          </div>
          <div v-if="!FromTrade && !FromStaff" class="button button-pay">
            <div class="button-box">
              <span>取消订单</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyStaffList',
  props: {
    NoButton: {
      type: Boolean,
      default: true
    },
    FromTrade: {
      type: Boolean,
      default: false
    },
    FromEmploy: {
      type: Boolean,
      defaul: false
    },
    FromStaff: {
      type: Boolean,
      default: false
    },
    Data: {
      type: Array
    }
  }
}
</script>
