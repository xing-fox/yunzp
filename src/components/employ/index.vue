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
      .content-main {
        width: 100%;
        .list {
          display: flex;
          width: 100%;
          margin: 0 0 .5rem 0;
          overflow: hidden;
          textarea {
            font-size: .28rem;
            width: 100%;
            height: 1.5rem;
            padding: .15rem .2rem;
            border-radius: .06rem;
            box-sizing: border-box;
            background: rgba(242, 242, 242, 1);
          }
          .list-left {
            flex: 1;
            color: #9b9b9b;
            font-size: .3rem;
            line-height: .5rem;
            text-align: left;
            &.list-type {
              line-height: .66rem;
            }
          }
          .list-right {
            .switch {
              display: flex;
              color: #3c3c3c;
              font-size: .3rem;
              width: 2.86rem;
              height: .66rem;
              line-height: .66rem;
              border-radius: .33rem;
              background:rgba(242, 242, 242, 1);
              li {
                flex: 1;
                span {
                  &.active {
                    display: inline-block;
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    border-radius: .33rem;
                    background: #0089F9;
                  }
                }
              }
            }
            input {
              color: #ff0000;
              font-size: .3rem;
              width: 1.5rem;
              height: .66rem;
              padding: 0 0 0 .2rem;
              border-radius: .06rem;
              border: 1px solid rgba(200, 200, 200, 1);
              box-sizing: border-box;
            }
            span.unit {
              color: #9b9b9b;
              font-size: .32rem;
              margin: 0 0 0 .1rem;
            }
            .employ-time {
              display: flex;
              width: 2rem;
              height: .58rem;
              line-height: .58rem;
              border-radius: .06rem;
              border: 1px solid rgba(200, 200, 200, 1);
              li {
                flex: 1;
                color: #c8c8c8;
                font-size: .3rem;
                font-weight: bold;
                &.employ-count {
                  color: #0089F9;
                  font-size: .3rem;
                  font-weight: initial;
                  border-left: 1px solid rgba(200, 200, 200, 1);
                  border-right: 1px solid rgba(200, 200, 200, 1);
                }
              }
            }
            .salary {
              color: #ff0000;
              font-size: .3rem;
              font-weight: bold;
              height: .5rem;
              line-height: .5rem;
            }
          }
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
      <div class="title">雇佣详情</div>
      <i class="close" @click="$emit('closeEmploy')"/>
      <div class="content-main">
        <!-- <div class="list">
          <div class="list-left list-type">雇佣方式</div>
          <div class="list-right">
            <ul class="switch">
              <li @click="employType = true">
                <span :class="{active: employType}">包月</span>
              </li>
              <li @click="employType = false">
                <span :class="{active: !employType}">定制</span>
              </li>
            </ul>
          </div>
        </div> -->
        <div class="list" v-if="!employType">
          <div class="list-left">导师费用</div>
          <div class="list-right">
            <span class="salary">￥{{ employMoney }}/时</span>
          </div>
        </div>
        <!-- <div class="list">
          <div class="list-left">项目开始时间</div>
          <div class="list-right">
            <group>
              <datetime v-model="startDate" placeholder="请选择时间"/>
            </group>
          </div>
        </div> -->
        <div class="list" v-if="!employType">
          <div class="list-left">雇佣时间</div>
          <div class="list-right">
            <ul class="employ-time">
              <li @click="employTimeAction(0)">-</li>
              <li class="employ-count">{{ employTime }}</li>
              <li @click="employTimeAction(1)">+</li>
            </ul>
          </div>
        </div>
        <div class="list" v-if="employType">
          <div class="list-left">项目结束时间</div>
          <div class="list-right">
            <group>
              <datetime v-model="endDate" placeholder="请选择时间"/>
            </group>
          </div>
        </div>
        <div class="list">
          <textarea placeholder="请输入制作内容"></textarea>
        </div>
        <div class="list">
          <div class="list-left list-type">托管金额</div>
          <div class="list-right">
            <input v-model="employDeposit" type="text" placeholder="0">
            <span class="unit">元</span>
          </div>
        </div>
      </div>
      <div class="submit" @click="computeMoney">
        <span>确认佣金并支付</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Datetime, Group } from 'vux'
export default {
  components: {
    Group,
    Datetime
  },
  data () {
    return {
      employType: false, // 雇佣方式 包月 true 、定制 false
      employMoney: 1200, // 雇佣费用
      employTime: 1, // 雇佣时间
      employDeposit: 10, // 托管金额
      startDate: this.$moment().format('YYYY-MM-DD'),
      endDate: this.$moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    employTimeAction (flag) {
      if (flag === 0 && this.employTime !== 1) this.employTime--
      if (flag === 1) this.employTime++
    },
    computeMoney () {
      this.$emit('paySure', Number(this.employMoney) * Number(this.employTime))
    }
  }
}
</script>
