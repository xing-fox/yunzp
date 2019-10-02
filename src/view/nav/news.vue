<style lang="less" scoped>
  .nav-news {
    font-size: 0;
    width: 100%;
    ul {
      width: 100%;
      li {
        display: flex;
        margin: 0 .22rem 0 .29rem;
        padding: .2rem 0 0 0;
        img {
          width: 1.06rem;
          height: 1.06rem;
          border-radius: 50%;
        }
        .content {
          flex: 1;
          height: 100%;
          margin: 0 0 0 .2rem;
          padding: 0 0 .28rem 0;
          display: inline-flex;
          .middle {
            flex: 1;
            text-align: left;
            .middle-title {
              line-height: .45rem;
              margin: .05rem 0 0 0;
              span {
                color: #3c3c3c;
                font-size: .3rem;
                vertical-align: middle;
                &.size {
                  font-size: .32rem;
                  font-weight: bold;
                  margin: .2rem 0 0;
                }
              }
            }
            .middle-content {
              color: #979797;
              font-size: .28rem;
              margin: .12rem 0 0 0;
            }
          }
          .time {
            color: #979797;
            font-size: .24rem;
            line-height: .32rem;
            margin: .18rem 0 0 0;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="nav-news">
    <ul>
      <li>
        <img src="../../icon/home/man.png">
        <div class="content bor-b">
          <div class="middle">
            <div class="middle-title">
              <span class="size">游乐</span>
              <span>设计师</span>
            </div>
            <div class="middle-content">
              <span>是否方便留个联系方式？</span>
            </div>
          </div>
          <div class="time">
            <span>6月27日</span>
          </div>
        </div>
      </li>
      <li>
        <img src="../../icon/home/man.png">
        <div class="content bor-b">
          <div class="middle">
            <div class="middle-title">
              <span class="size">游乐</span>
              <span>设计师</span>
            </div>
            <div class="middle-content">
              <span>是否方便留个联系方式？</span>
            </div>
          </div>
          <div class="time">
            <span>6月27日</span>
          </div>
        </div>
      </li>
      <li>
        <img src="../../icon/home/man.png">
        <div class="content bor-b">
          <div class="middle">
            <div class="middle-title">
              <span class="size">游乐</span>
              <span>设计师</span>
            </div>
            <div class="middle-content">
              <span>是否方便留个联系方式？</span>
            </div>
          </div>
          <div class="time">
            <span>6月27日</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>
