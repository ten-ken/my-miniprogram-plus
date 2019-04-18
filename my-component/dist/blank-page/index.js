const imageType = require("imageType.js");
//const image = imageType.default.type;

Component({
  externalClasses: ['x-class'],
  properties: {
    isHideLoadMore: {//隐藏展示更多
      type: Boolean,
      value: false
    },
    // 字体及icon颜色
    image: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value:""
    },
    tip:{
      type: String,
      value: ''
    },
    showTypes: {
      type: String,
      value: "DATA",
    },
    isShow: {
      type: Boolean,
      value: true
    },
  },
  options: {
    // 在组件定义时的选项中启用多slot支持
    multipleSlots: true
  },
  // relations: {
  //   '../steps/index': {
  //     type: 'parent'
  //   }
  // },
  data: {
    imageInfo: imageType.default,
    abc: "abc"
  },
  methods: {
    getData(eve) {
      console.log(this.data.imageInfo['COUPON'].title);
      //console.log(showType);
      // this.setData({
      //   len: options.len,
      //   index: options.index,
      //   direction: options.direction
      // })
    }
  }

})