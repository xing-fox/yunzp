export default {
  state: {
    LoginStatus: false, // 登录界面
    LoginInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
  },
  actions: {},
  mutations: {
    ChangeLoginStatus (state, info) {
      state.LoginStatus = info
    },
    StoreLoginInfo (state, info) {
      state.LoginInfo = info
      localStorage.setItem('userInfo', JSON.stringify(info))
    }
  },
  getters: {
  }
}
