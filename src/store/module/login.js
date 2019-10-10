export default {
  state: {
    LoginStatus: false, // 登录界面
    LoginInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
  },
  actions: {},
  mutations: {
    ChangeLoginStatus (state, info) {
      state.LoginStatus = info
    },
    StoreLoginInfo (state, info) {
      state.LoginInfo = info
      sessionStorage.setItem('userInfo', JSON.stringify(info))
    }
  },
  getters: {
  }
}
