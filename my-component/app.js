//app.js
App({
  onLaunch: function () {
   
   
  },
  globalData: {
    userInfo: null,
    iconList: [{//首页功能菜单
      icon: 'discoverfill',
      color: 'cyan',
      badge: 0,
      name: '日报',
      url: "/pages/daily/index",
      code: 'daily',
      power: 'production.procedure.header'
    },
    {
      icon: 'noticefill',
      color: 'olive',
      badge: 0,
      name: '质检',
      url: "/pages/quality-test/index",
      code: 'quality',
      power: ''
    }, {
      icon: 'icloading',
      color: 'cyan',
      badge: 0,
      name: '进度',
      url: "/pages/progress/index",
      code: 'progress',
      power: ''
    }, {
      icon: 'rankfill',
      color: 'brown',
      badge: 0,
      name: '库存',
      code: 'stock',
      url: "/pages/stock/index",
      code: 'stock',
      power: ''
    }
    ]
  }
})