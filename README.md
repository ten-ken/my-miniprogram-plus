# 我的小程序组件
## 1 my-miniprogram-plus 插件

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

| 事件       | 作用   |参数    | 
| --------   | -----:  |-----:  | 
| bindskipPage    | 绑定点击整个商品的触发事件 | eve | 

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





### 1.2空数据组件--black-page


| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| bgColor    | 背景颜色类名 |String  |   ''    |
| isBack     | 是否开启返回 | Boolean |   false |
| bgImage    | 背景图片路径 | String  |  ''     |

| slot块       | 作用   |
| --------   | -----:  |
| backText    | 返回时的文字 | 
| content     | 中间区域 | 
| right    | 右侧区域(小程序端可使用范围很窄！)  | 

