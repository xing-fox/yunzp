<style lang="less" scoped>
  .publish-post-wrapper {
    font-size: 0;
    width: 100%;
    height: 100vh;
    padding: .4rem 0 0 0;
    box-sizing: border-box;
    position: relative;
    .post-main {
      display: flex;
      width: 100%;
      .list-type,
      .list-type-content {
        width: 2rem;
        height: calc(100vh - .4rem);
        overflow: hidden;
        &.type-margin {
          padding: 0 1rem 0 0;
        }
        ul {
          width: 100%;
          li {
            color: #3c3c3c;
            font-size: .32rem;
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            margin: 0 0 .6rem 0;
            &.active {
              color: #0089F9;
              font-size: .34rem;
            }
          }
        }
      }
    }
  }
</style>

<style lang="less">
  .publish-post-wrapper {
    .publish-post-content {
      font-size: 0;
      width: 100%;
      min-height: 100vh;
      padding: 0 0 .2rem 0;
      background: #fff;
      ul {
        padding: .3rem .21rem 0 .24rem;
        li {
          display: flex;
          color: #9b9b9b;
          font-size: .32rem;
          width: 100%;
          height: .5rem;
          margin: 0 0 .6rem;
          overflow: hidden;
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
              margin: .2rem 0 .3rem;
              padding: .2rem .15rem;
              border-radius: .06rem;
              box-sizing: border-box;
              background: #eee;
            }
          }
          span {
            display: inline-block;
            height: .5rem;
            line-height: .5rem;
            margin: 0 .5rem 0 0;
            vertical-align: top;
            &.span-1 {
              color: #222;
              margin: 0 0 0 .3rem;
              line-height: .55rem;
            }
          }
          input {
            border: none;
            -webkit-appearance: none;
            flex: 1;
            font-size: .32rem;
            height: .5rem;
            line-height: .5rem;
            text-align: right;
            vertical-align: top;
            &.input-type {
              width: 1rem;
            }
          }
          .choise {
            flex: 1;
            color: #9b9b9b;
            font-size: .32rem;
            height: .5rem;
            text-align: right;
            position: relative;
            span {
              margin: 0;
            }
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
      .vux-popup-picker-select {
        font-size: .32rem;
        height: .5rem;
      }
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
      .weui-cell__ft {
        padding-right: 0;
        &:after,
        &:before {
          content: none;
        }
      }
    }
  }
</style>

<template>
  <div class="publish-post-wrapper">
    <div class="post-main">
      <div class="list-type" ref="listScroll">
        <ul>
          <li v-for="(item, index) in ListTypeData" :key="index" :class="{active: index == 0}">{{ item.val }}</li>
        </ul>
      </div>
      <div class="list-type-content">
        <ul>
          <li v-for="(list, eq) in ListTypeData[0].children" :key="eq" :class="{active: eq == 0}" @click="publishPostStatus = true">{{ list }}</li>
        </ul>
      </div>
    </div>
    <!-- 发布信息 -->
    <Popup v-model="publishPostStatus" :popup-style="{popupStyle}" width="86%" position="right" :is-transparent="true" height="100%">
      <div class="publish-post-content">
        <ul>
          <li>
            <span>
              工作类型
            </span>
            <div class="choise">
              <popup-picker
                :data="workTypeData"
                :columns="1"
                v-model="formData.worktype"
                placeholder="请选择"
              />
            </div>
          </li>
          <li>
            <span>
              职位名称
            </span>
            <input v-model="formData.title" type="text" placeholder="请输入职位名称">
          </li>
          <li>
            <span>
              经验要求
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
              学历要求
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
              薪资范围
            </span>
            <input class="input-type" v-model="formData.title" type="text" placeholder="最低薪资">
            <span class="span-1">至</span>
            <input class="input-type" v-model="formData.title" type="text" placeholder="最高薪资">
          </li>
          <li>
            <span>
              填写邮箱
            </span>
            <input v-model="formData.title" type="text" placeholder="请输入邮箱">
          </li>
          <li class="textarea">
            <span>
              具体要求
            </span>
            <textarea placeholder="请填写您的具体要求，限于300字"></textarea>
          </li>
        </ul>
        <div class="submit">
          <span>发布职位</span>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import { Popup, PopupPicker } from 'vux'
import BScroll from 'better-scroll'
export default {
  name: 'PublistPost',
  data () {
    return {
      popupStyle: {
        zIndex: 10
      },
      publishPostStatus: false,
      formData: {
        title: '',
        staff: [],
        worktype: []
      },
      workTypeData: [{
        value: 1,
        name: '全职'
      }, {
        value: 2,
        name: '兼职'
      }, {
        value: 3,
        name: '半兼职'
      }],
      staffData: ['张三', '李四', '王五', '赵六'],
      ListTypeData: [{
        val: '设计美工',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '文案编辑',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '线上运营',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '在线客服',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '在线销售',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '视频制作',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: 'IT技术',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '文案编辑',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '线上运营',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '在线客服',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '在线销售',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '视频制作',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: 'IT技术',
        children: ['电商美工', '网站设计', '平面设计']
      }, {
        val: '文案编辑',
        children: ['电商美工', '网站设计', '平面设计']
      }],
      LYDScroll: ''
    }
  },
  components: {
    Popup,
    PopupPicker
  },
  mounted () {
    this.LYDScroll = new BScroll(this.$refs.listScroll, {
      startY: 0,
      click: true,
      scrollX: false,
      scrollY: true
    })
  }
}
</script>
