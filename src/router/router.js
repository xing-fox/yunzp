export default [
  {
    path: '/',
    redirect: '/home',
    component: resolve => require(['@/view/common/index'], resolve),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: resolve => require(['@/view/nav/home'], resolve),
        meta: {
          title: '首页'
        }
      }, {
        path: 'search',
        name: 'Search',
        component: resolve => require(['@/view/nav/search'], resolve),
        meta: {
          title: '找人才'
        }
      }, {
        path: 'me',
        name: 'Me',
        component: resolve => require(['@/view/nav/me'], resolve),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/view/signIn/login'], resolve),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/forgetpwd',
    name: 'ForgetPwd',
    component: resolve => require(['@/view/signIn/forget-pwd'], resolve),
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/getcode',
    name: 'GetCode',
    component: resolve => require(['@/view/signIn/get-code'], resolve),
    meta: {
      title: '输入验证码'
    }
  },
  {
    path: '/resetpwd',
    name: 'ResetPwd',
    component: resolve => require(['@/view/signIn/reset-pwd'], resolve),
    meta: {
      title: '重置密码'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: resolve => require(['@/view/signIn/register'], resolve),
    meta: {
      title: '注册'
    }
  }
]
