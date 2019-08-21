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
    z-index: 10000;
    ul.footer-nav {
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
  .publish-content {
    font-size: 0;
    padding: .5rem .24rem 0;
    background: #fff;
    position: relative;
    z-index: 10000;
    ul {
      display: flex;
      width: 100%;
      padding: 0 0 .4rem 0;
      position: relative;
      li {
        flex: 1;
        text-align: center;
        a {
          display: inline-block;
          color: #222;
          font-size: .28rem;
          width: 100%;
          img {
            width: 1.06rem;
            height: 1.06rem;
            margin: 0 0 .2rem 0;
          }
          span {
            display: inline-block;
            width: 100%;
            height: .4rem;
            line-height: .4rem;
          }
        }
      }
    }
    .cancel {
      color: #3c3c3c;
      font-size: .36rem;
      width: 100%;
      height: 1.06rem;
      line-height: 1.06rem;
      text-align: center;
    }
  }
</style>

<template>
  <div class="common-footer">
    <ul class="footer-nav">
      <li :class="{active: Flag == 0}" @click="changeRoute(0, '/home')">
        <i class="home"></i>
        <span>首页</span>
      </li>
      <li :class="{active: Flag == 1}" @click="changeRoute(1, '/search')">
        <i class="search"></i>
        <span>找人才</span>
      </li>
      <li class="publish" @click="publishStatus=true"></li>
      <li :class="{active: Flag == 2}" @click="changeRoute(2, '/news')">
        <i class="news"></i>
        <span>消息</span>
      </li>
      <li :class="{active: Flag == 3}" @click="changeRoute(3, '/me')">
        <i class="me"></i>
        <span>我的</span>
      </li>
    </ul>
    <!-- 发布信息 -->
    <Popup v-model="publishStatus" position="bottom" :is-transparent="true">
      <div class="publish-content">
        <ul>
          <li>
            <router-link to="/publistneed">
              <img src="../../icon/footer/publish-need.png">
              <span>发布需求</span>
            </router-link>
          </li>
          <li>
            <router-link to="/publistpost">
              <img src="../../icon/footer/publish-post.png">
              <span>发布职位</span>
            </router-link>
          </li>
        </ul>
      </div>
    </Popup>
  </div>
</template>

<script>
import { Popup } from 'vux'
export default {
  name: 'CommonFooter',
  data () {
    return {
      Flag: 0,
      publishStatus: false
    }
  },
  components: {
    Popup
  },
  methods: {
    changeRoute (arg, url) {
      this.Flag = arg
      this.$router.push({
        path: url
      })
    }
  }
}
</script>
