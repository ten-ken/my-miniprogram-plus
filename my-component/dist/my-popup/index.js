 Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    id:String,
    title: {            
      type: String,     
      value: '标题'
    },
    // 弹窗内容
    content: {
      type: String,
      value: '内容'
    }, 
    btn_no: String,// 弹窗取消按钮文字
    btn_ok: String, // 弹窗确认按钮文字
    line_color:{ //提示下的线的颜色
      type: String,
      value: 'red'
    },
    suc_bc:{//确认/成功按钮的颜色
      type: String,
      value: 'red'
    },
    err_bc:{//取消按钮的颜色
      type: String,
      value: 'grey'
    },
    title_color:{ //提示文字的颜色
      type: String,
      value: 'black'
    },
    show:{
      type: Boolean,
      value: false
    },
    type: {//展示内容类型  支持 文字 或图片 
      type: String,
      value: 'String'
    },
    needBind:String,//确定按钮的绑定事件
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hidePopup: function () {
      this.setData({
        show: !this.data.show
      })
    },
    //展示弹框
    showPopup (title,content) {
      if (title){
        this.setData({
          title: title
        })
      }
      if (content) {
        this.setData({
          content: content
        })
      }
      this.setData({
        show: !this.data.show
      })
    },
    _onCancel () {//取消按钮
      this.showPopup();
      // this.triggerEvent("error")
    },
    _onConfirm() {//确认按钮
      let needBind = this.properties.needBind;
      if (needBind){
        this.triggerEvent('onConfirm');
        //this.hidePopup();
      }else{
        this.hidePopup();
      }
    }
 

  }
})
