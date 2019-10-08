import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import moment from 'moment'
// import fastclick from 'fastclick'
import { ToastPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'
import '@/style/common.css'

Vue.use(ToastPlugin, {position: 'top'})
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.prototype.$moment = moment
Vue.config.productionTip = false

// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', () => {
//     fastclick.attach(document.body)
//   }, false)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
