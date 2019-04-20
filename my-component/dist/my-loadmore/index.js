
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isOver: {
      type: Boolean,
      value: false,
    },
    isHideLoadMore: {
      type: Boolean,
      value: false,
    },
    totalPages: {
      type: Number,
      value:0
    },
    content: {
      type: String,
      value:"暂无数据"
    },
    loading_info: {
      type: String,
      value: "正在加载中~"
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
   
  }
})