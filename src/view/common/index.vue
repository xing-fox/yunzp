<style lang="less" scoped>
  .common-index {
    width: 100%;
    padding: 0 0 1rem 0;
  }
</style>

<template>
  <div class="common-index">
    <router-view />
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from '@/view/common/footer'
export default {
  name: 'CommonIndex',
  components: {
    CommonFooter
  }
}
</script>
