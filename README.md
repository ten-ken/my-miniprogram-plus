# 我的小程序组件
## 1 my-miniprogram-plus 插件
### 1.1 商品列表组件
  json引入:
 ```
   "usingComponents": {
    "x-card":"/dist/my-card/index",
    "x-button": "/dist/my-button/index"
  }
```
| 参数       | 作用   |类型    |  默认值 |其他|
| --------   | -----:  |-----:  | :----:  |:----: |
| type    | 列表样式 |String  |   ''    |:----: |
| imgUrl     | 商品图片 | String |  '' |:----: |
| title    | 商品标题 | String  |  ''    |:----: |
| price    | 商品售价/折后价 | String  |  ''     |:----: |
| otherPrice    | 商品原价 | String  |  ''   |:----: |
| tag    | 标签| String  |  ''     |:----: |
| tag_color    | 标签颜色 | String  |  ''  |颜色参考下列的参数 |
| description    | 描述 | String  |  ''    |:----: |
| hidden_desc    | 是否隐藏描述 | boolean  |  false  |:----: |
| tag_type    | 标签样式 | String  |  默认是矩形,'circle'为右侧半圆形|:----: |
| comdityId    | 商品id | String/Number  |  ''   |:----: |

### type为默认的样式

 <p align="center"><img src="https://github.com/ten-ken/my-miniprogram-plus/blob/master/images/default%E7%B1%BB%E5%9E%8B.png?raw=true" alt="" ></p>	

### type为'flex'的样式

 <p align="center"><img src="https://github.com/ten-ken/my-miniprogram-plus/blob/master/images/fiex%E7%B1%BB%E5%9E%8B.png?raw=true" alt="" ></p>	
 
 ### type为'inline-block'的样式

 <p align="center"><img src="https://github.com/ten-ken/my-miniprogram-plus/blob/master/images/inline-block%E7%B1%BB%E5%9E%8B.png?raw=true" alt="" ></p>	

| 事件       | 作用   |参数    | 
| --------   | -----:  |-----:  | 
| bindskipPage    | 绑定点击整个商品的触发事件 | 无 | 

| 颜色code       |  描述|
| --------   | :----: |
| red    | 红色 |
| orange    |橙色|
| yellow    |黄色 |
| olive    | :----: |
| green    |绿色|
| blue    |蓝色 |
| purple    | :----: |
| purple    | :----: |
| mauve    | :----: |
| pink    | :----: |
| grey    | :----: |
| brown    | :----: |
| black    | :----: |
| white    | :----: |





### 1.2空数据组件
  json引入:
 ```
  "usingComponents": {
    "my-loading": "/dist/blank-page/index"
  }
```
  <my-loading isShow="{{true}}" showTypes="SEARCH" isHideLoadMore="{{isHideLoadMore}}" title="抱歉！没找到相关秒杀商品" tip="" ></my-loading>

| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| isShow    | ----- |  是否显示|  true   |
| showTypes     | 图片内容类型 | String |   DATA |
| isHideLoadMore    | 当这个为true不显示组件内容 | Boolean  |  false   |
| title    | 文本    | String  |  ''     |
| tip    | ----  | String  |  ''     |

showTypes参照以下json里面的属性名
 ```
 export default {
  'REQUEST_ERROR': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_3bd517df2kgkclkhgl71bg4b37dcc_514x260.png',
    title: '网络加载失败',
    button: '点击刷新',
    tip: ''
  },
  'NOT_FOUND': {
    image: 'https://s8.mogucdn.com/pic/150112/17y7h4_ieydcyjsha2dgndcmuytambqgiyde_410x354.png',
    title: '很抱歉，找不到你要访问的页面',
    button: '返回',
    tip: ''
  },
  'DATA': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_27e7gegi3f9acl5e05f3951if5855_514x260.png',
    title: '没有相关数据哦',
    button: '',
    tip: ''
  },
  'FOLLOW': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_61ech6ihe399d85abhjhcigd38444_514x260.png',
    title: '关注有趣的人',
    button: '',
    tip: '不再错过他们每一条动态'
  },
  'FEED': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_2ie7eb3ae0khl20g0g1glgb852e5i_514x260.png',
    title: '还没有任何反馈哦',
    button: '',
    tip: ''
  },
  'SHOP': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_8acll7f4b4j2ljf8i164d5h7bl78g_514x260.png',
    title: '稍后再来试试吧~',
    button: '',
    tip: ''
  },
  'WEIBO': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_3gh3bj6dk8k46783c78e414aeh7g0_514x260.png',
    title: '',
    button: '',
    tip: ''
  },
  'SEARCH': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_74hhee883cbf190e3di6cljk23679_514x260.png',
    title: '抱歉！没找到相关商品~',
    button: '',
    tip: ''
  },
  'TAG': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_76h1c5hjc8heecjehlfgekjdl2ki0_514x260.png',
    title: '',
    button: '',
    tip: ''
  },
  'MESSAGE': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_21f4ij449lb4h67k0afjic82d0f31_514x260.png',
    title: '消息通知空空如也',
    button: '',
    tip: ''
  },
  'LIVE': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_682e8fg28d8lk27b9l95jecghd4jl_514x260.png',
    title: '',
    button: '',
    tip: ''
  },
  'ORDER': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_7b01ig2ih5egggj85l1gd8d38790f_514x260.png',
    title: "还没有相关订单哦",
    button: '',
    tip: ''
  },
  'CART': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_1h082815bh50k99dajicd53ll1dhl_514x260.png',
    title: '购物车还是空的哦~',
    button: '去逛逛',
    tip: ''
  },
  'FOOTPRINT': {
    image: 'https://s10.mogucdn.com/p2/161213/upload_3c4d952gd6k9809gj4g8eg974lk14_514x260.png',
    title: '你还没有足迹~',
    button: '',
    tip: ''
  },
  'COUPON': {
    image: 'https://s10.mogucdn.com/mlcdn/c45406/170607_52khi3193g9ba5e023l7a6ecee326_514x258.png',
    title: '你还没有可用的店铺优惠券哦',
    button: '',
    tip: ''
  },
  "NO_SEARCH":{//没有搜索结果
    image: 'https://cc.jiangqiaotech.com/images/noSearchResult.png',
    title: '没有搜索结果哦',
    button: '',
    tip: ''
  }
}
```
### 1.3加载更多组件
  json引入:
 ```
  "usingComponents": {
    "my-loading": "/dist/my-loadmore/index"
  }
```
| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| isOver    |是否无数据  | ----- |  true   |
| isHideLoadMore     | 图片内容类型 | String |   DATA |
| content    |  无数据的文本内容 | String  |  暂无数据   |
| loading_info    | 加载更多的文本内容    | String  | 正在加载中    |
| totalPages    | 数据条数 |  Number | 默认为0 |
