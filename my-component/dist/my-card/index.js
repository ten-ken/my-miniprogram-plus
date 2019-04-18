
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag_color: {
      type: String,
      value: 'orange',
    },
    imgUrl: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String,
    },
    price: {
      type: Number
    },
    number: {
      type: Number
    },
    otherPrice: {
      type: Number
    },
    tag: {
      type: String,
      value: null
    },
    hidden_desc: {
      type: Boolean,
      value: false
    },
    tag_type: {
      type: String,
      value: ''
    },
    comdityId: {
      type: String,
      value: '0',//商品id
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
    skip_commdity: function (eve) {//绑定page页面 ==方法为skipPage
      //console.log(eve)
      let commdityId = eve.currentTarget.dataset.comdityid;
      this.triggerEvent('skipPage', { commdityId: commdityId })
    }
  }
})