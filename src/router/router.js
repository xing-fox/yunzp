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
        path: 'news',
        name: 'News',
        component: resolve => require(['@/view/nav/news'], resolve),
        meta: {
          title: '消息'
        }
      }, {
        path: 'recharge',
        name: 'Recharge',
        component: resolve => require(['@/view/nav/recharge'], resolve),
        meta: {
          title: '充值'
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
    path: '/searchpage',
    name: 'Searchpage',
    component: resolve => require(['@/view/input-search'], resolve),
    meta: {
      title: '搜索页面'
    }
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
  },
  {
    path: '/mystaff',
    name: 'MyStaff',
    component: resolve => require(['@/view/my/my-staff'], resolve),
    meta: {
      title: '我的员工'
    }
  },
  {
    path: '/mywallet',
    name: 'MyWallet',
    component: resolve => require(['@/view/my/my-wallet'], resolve),
    meta: {
      title: '我的钱包'
    }
  },
  {
    path: '/myresume',
    name: 'MyResume',
    component: resolve => require(['@/view/my/my-resume'], resolve),
    meta: {
      title: '已收简历'
    }
  },
  {
    path: '/myemployrecord',
    name: 'MyEmployRecord',
    component: resolve => require(['@/view/my/my-employ-record'], resolve),
    meta: {
      title: '雇佣记录'
    }
  },
  {
    path: '/mytraderecord',
    name: 'MyTradeRecord',
    component: resolve => require(['@/view/my/my-trade-record'], resolve),
    meta: {
      title: '交易记录'
    }
  },
  {
    path: '/resumedetails',
    name: 'ResumeDetails',
    component: resolve => require(['@/view/resume-details'], resolve),
    meta: {
      title: '简历详情'
    }
  },
  {
    path: '/publistneed',
    name: 'PublistNeed',
    component: resolve => require(['@/view/publish/publish-need'], resolve),
    meta: {
      title: '发布需求'
    }
  },
  {
    path: '/publistpost',
    name: 'PublistPost',
    component: resolve => require(['@/view/publish/publish-post'], resolve),
    meta: {
      title: '发布简历'
    }
  }
]
