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
  }
  // {
  //   path: '/my_order',
  //   name: 'my_order',
  //   component: resolve => require(['@/view/my/my-order'], resolve),
  //   meta: {
  //     title: '我的订单'
  //   }
  // }
]
