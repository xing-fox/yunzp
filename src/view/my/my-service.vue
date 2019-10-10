<style lang="less" scoped>
  .my-service {
    font-size: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .15);
    position: relative;
    .content {
      width: 70vw;
      height: 7.9rem;
      line-height: initial;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto auto;
      img {
        width: 100%;
        border-radius: 5px;
      }
      span {
        display: inline-block;
        color: #333;
        font-size: .2rem;
        margin: .2rem 0 0 0;
        padding: .2rem;
        border-radius: 5px;
        background:#fff;
      }
    }
  }
</style>

<template>
  <div class="my-service">
    <div class="content">
      <img src="../../images/ewm.jpg">
      <span>长按图片保存至微信添加客服</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerService'
}
</script>
