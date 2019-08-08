<style lang="less" scoped>
  @path: '../../icon/footer';
  .common-footer {
    width: 100%;
    height: .9rem;
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    ul {
      display: flex;
      width: 100%;
      li {
        flex: 1;
        font-size: 0;
        height: .9rem;
        color: #c8c8c8;
        text-align: center;
        i {
          display: inline-block;
          width: .36rem;
          height: .36rem;
          margin: .15rem 0 .05rem 0;
          background-size: 100% 100%;
          &.home {
            background-image: url('@{path}/home.png');
          }
          &.search {
            background-image: url('@{path}/search.png');
          }
          &.news {
            background-image: url('@{path}/news.png');
          }
          &.me {
            background-image: url('@{path}/me.png');
          }
        }
        span {
          display: inline-block;
          font-size: .2rem;
          width: 100%;
          line-height: initial;
        }
        &.active {
          color: #222;
          i {
            &.home {
              background-image: url('@{path}/home_1.png');
            }
            &.search {
              background-image: url('@{path}/search_1.png');
            }
            &.news {
              background-image: url('@{path}/news_1.png');
            }
            &.me {
              background-image: url('@{path}/me_1.png');
            }
          }
        }
        &.publish {
          flex: initial;
          width: 1.4rem;
          height: 1.4rem;
          margin: -.58rem 0 0 0;
          background-image: url('@{path}/publish.png');
          background-size: 90% 90%;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }
</style>

<template>
  <div class="common-footer">
    <ul>
      <li :class="{active: Flag == 0}" @click="changeRoute(0)">
        <i class="home"></i>
        <span>首页</span>
      </li>
      <li :class="{active: Flag == 1}" @click="changeRoute(1)">
        <i class="search"></i>
        <span>找人才</span>
      </li>
      <li class="publish"></li>
      <li :class="{active: Flag == 2}" @click="changeRoute(2)">
        <i class="news"></i>
        <span>消息</span>
      </li>
      <li :class="{active: Flag == 3}" @click="changeRoute(3)">
        <i class="me"></i>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      Flag: 0
    }
  },
  methods: {
    changeRoute (arg) {
      this.Flag = arg
    }
  }
}
</script>
