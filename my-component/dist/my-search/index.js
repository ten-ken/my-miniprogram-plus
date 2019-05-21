
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    datas: {
      type: Object,
      observer: "_dataChange"
    },
    color:{
      type: String,
      value:'red'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _dataChange: function (newVal) {
      console.log(newVal)
      let searchArray = this._getLightArr(newVal.content,newVal.key)
      this.setData({
        keyName: newVal.key,
        searchArray: searchArray
      })
    },
    _getLightArr: function (str,key) {
      return str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');
    }
  }
})