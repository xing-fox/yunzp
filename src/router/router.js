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
