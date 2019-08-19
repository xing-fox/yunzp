<style lang="less" scoped>
.my-resume {
  font-size: 0;
  width: 100%;
  ul {
    padding: 0 .3rem;
    li {
      width: 100%;
      padding: .4rem 0;
      border-bottom: 1px solid #eee;
      .li-content {
        display: flex;
        width: 100%;
        img {
          width: 1.14rem;
          height: 1.14rem;
          border-radius: 50%;
        }
        .content {
          flex: 1;
          margin: 0 0 0 0.2rem;
          padding: 0.06rem 0 0 0;
          text-align: left;
          .title {
            color: #3c3c3c;
            font-size: 0.34rem;
            font-weight: bold;
            &.top {
              margin: 0.46rem 0 0 0;
            }
          }
          .main {
            color: #3c3c3c;
            font-size: 0.3rem;
            margin: 0.1rem 0 0 0;
          }
        }
        .salary {
          color: #ff0000;
          font-size: 0.34rem;
          font-weight: bold;
        }
      }
      .li-bottom {
        width: 100%;
        margin: .14rem 0 0 0;
        text-align: right;
        .button {
          display: inline-block;
          font-size: 0.28rem;
          width: 1.66rem;
          height: 0.64rem;
          text-align: center;
          margin: 0 0 0 0.32rem;
          border-radius: 0.32rem;
          box-sizing: border-box;
          vertical-align: middle;
          .button-box {
            display: table;
            color: #fff;
            width: 100%;
            height: 100%;
            border-radius: .48rem;
            background: #0089F9;
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
  <div class="my-resume">
    <ul>
      <li>
        <div class="li-content">
          <img src="../../icon/home/man.png">
          <div class="content">
            <div class="title">哪吒传奇</div>
            <div class="main">3年工作经验|北京</div>
            <div class="title top">北京卫视电视台/设计</div>
            <div class="main">2019/09-至今</div>
          </div>
          <div class="salary">5000元/月</div>
        </div>
        <div class="li-bottom">
          <div class="button">
            <div class="button-box">
              <span>查看简历</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyResume'
}
</script>
