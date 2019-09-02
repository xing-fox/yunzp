<style lang="less" scoped>
  .publish-need-wrapper {
    font-size: 0;
    width: 100%;
    ul {
      padding: .3rem .21rem 0 .24rem;
      li {
        display: flex;
        color: #9b9b9b;
        font-size: .32rem;
        width: 100%;
        height: .5rem;
        margin: 0 0 .6rem;
        &.textarea {
          display: initial;
          text-align: left;
          span {
            width: 100%;
            text-align: left;
            margin: 0;
          }
          textarea {
            color: #9b9b9b;
            font-size: .28rem;
            line-height: .4rem;
            width: 100%;
            height: 2.4rem;
            margin: .2rem 0 .4rem;
            padding: .2rem .15rem;
            box-sizing: border-box;
            border-radius: .06rem;
            background: #eee;
          }
        }
        span {
          display: inline-block;
          margin: 0 .5rem 0 0;
        }
        input {
          flex: 1;
          border: none;
          -webkit-appearance: none;
          font-size: .32rem;
          line-height: .5rem;
          text-align: right;
        }
        .choise {
          flex: 1;
          color: #9b9b9b;
          font-size: .32rem;
          height: .5rem;
          text-align: right;
          position: relative;
        }
      }
    }
    .submit {
      color: #fff;
      font-size: .32rem;
      height: .9rem;
      line-height: .9rem;
      margin: .2rem .24rem;
      border-radius: .45rem;
      background: #0089F9;
    }
  }
</style>

<style lang="less">
  .publish-need-wrapper {
    .vux-popup-picker-select {
      font-size: .32rem;
      height: .5rem;
    }
    .weui-cell {
      padding: 0;
      height: .5rem;
      line-height: .5rem;
    }
    .weui-cell__ft {
      padding-right: 0;
      &:after,
      &:before {
        content: none;
      }
    }
  }
</style>

<template>
  <div class="publish-need-wrapper">
    <ul>
      <li>
        <span>
          填写标题
        </span>
        <input v-model="formData.title" type="text" placeholder="限10个字">
      </li>
      <li>
        <span>
          选择员工
        </span>
        <div class="choise">
          <popup-picker
            :data="staffData"
            :columns="1"
            v-model="formData.staff"
            placeholder="请选择"
          />
        </div>
      </li>
      <li>
        <span>
          雇佣类型
        </span>
        <div class="choise">
          <popup-picker
            :data="staffData"
            :columns="1"
            v-model="formData.staff"
            placeholder="请选择"
          />
        </div>
      </li>
      <li>
        <span>
          选择类目
        </span>
        <div class="choise">
          <popup-picker
            :data="staffData"
            :columns="1"
            v-model="formData.staff"
            placeholder="请选择"
          />
        </div>
      </li>
      <li>
        <span>
          薪资预算
        </span>
        <div class="choise">
          <popup-picker
            :data="staffData"
            :columns="1"
            v-model="formData.staff"
            placeholder="请选择"
          />
        </div>
      </li>
      <li class="textarea">
        <span>
          具体要求
        </span>
        <textarea placeholder="请填写您的具体要求，限于300字"></textarea>
      </li>
    </ul>
    <div class="submit">
      <span>发布需求</span>
    </div>
  </div>
</template>

<script>
import { PopupPicker } from 'vux'
export default {
  name: 'PublistNeed',
  data () {
    return {
      formData: {
        title: '',
        staff: []
      },
      staffData: ['张三', '李四', '王五', '赵六']
    }
  },
  components: {
    PopupPicker
  }
}
</script>
