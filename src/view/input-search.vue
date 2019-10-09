<style lang="less" scoped>
  .input-search {
    font-size: 0;
    width: 100%;
    height: 100%;
    padding: .2rem 0;
    box-sizing: border-box;
    .header {
      display: flex;
      margin: 0 0 0 .24rem;
      position: relative;
      input {
        color: #9b9b9b;
        font-size: .3rem;
        width: 6rem;
        height: .7rem;
        line-height: initial;
        padding: 0 0 0 .3rem;
        border-radius: .35rem;
        box-sizing: border-box;
        background:rgba(242, 242, 242, 1);
      }
      i {
        display: inline-block;
        width: .9rem;
        height: .7rem;
        border-radius: 0 .35rem .35rem 0;
        background-image: url('../icon/search/search-btn.png');
        background-size: .35rem .35rem;
        background-repeat: no-repeat;
        background-color: rgba(0, 0, 0, .2);
        background-position: center center;
        position: absolute;
        top: 0;
        left: 5.1rem;
      }
      span {
        flex: 1;
        color: #9b9b9b;
        font-size: .28rem;
        text-align: center;
        line-height: .7rem;
      }
    }
    .content {
      margin: .5rem .3rem 0;
      .title {
        color: #3c3c3c;
        font-size: .26rem;
        font-weight: bold;
        line-height: .4rem;
        margin: 0 0 .2rem 0;
        text-align: left;
      }
      ul {
        width: 100%;
        text-align: left;
        li {
          display: inline-block;
          vertical-align: middle;
          color: #3c3c3c;
          font-size: .26rem;
          height: .6rem;
          line-height: .6rem;
          padding: 0 .3rem;
          margin: 0 .2rem .2rem 0;
          border-radius: .3rem;
          background:rgba(242, 242, 242, 1);
        }
      }
    }
  }
</style>

<template>
  <div class="input-search">
    <div class="header">
      <input v-model="search" type="text" placeholder="请输入">
      <i class="search" @click="searchFunc" />
      <span @click="$router.go(-1)">返回</span>
    </div>
    <!-- <div class="content">
      <div class="title">历史搜索</div>
      <ul>
        <li>平面设计</li>
        <li>客服</li>
        <li>XLY2019</li>
        <li>电商设计</li>
        <li>客服</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchFunc () {
      this.$router.push({
        path: '/search',
        query: {
          keyWord: this.search
        }
      })
    }
  }
}
</script>
