Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 表单数据
    assets: [],
    assetIndex: 0,
    isCostText: '支出',
    date: '',
    amount: null,
    descripition: '',
    // 用来放弹窗内容的，里面的格式应该为[{label: 'sadsa', value: 'dsadsad'}]
    dialogContent: []
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },
  // 点击了提交记录按钮
  submitData(e) {
    // 打开确认框
    const data = this.data
    const dialogContent = [
      {
        label: '资产项目',
        value: data.assets[form.assetIndex].assetName
      },
      {
        label: '收入/支出',
        value: data.isCostText
      },
      {
        label: '交易日期',
        value: data.date
      },
      {
        label: '金额',
        value: `${data.amount} 元`
      },
      {
        label: '备注详情',
        value: data.description
      }
    ]
    this.setData({
      dialogContent: dialogContent
    })
    // 不定时也行的
    setTimeout(() => {
      // 打开弹窗
      this.dialog.show()
    }, 100)
  },
  // 点击了弹出框的取消
  handleCancelDialog() {
    this.dialog.hide()
  },
  // 点击了弹出框的确认
  handleConfirmDialog() {
    console.log(111);
    this.dialog.hide()
    wx.showLoading({
      title: '正在提交'
    })
    const form = this.data
    const params = {
      masterAssetId: this.data.assets[form.assetIndex].assetId,
      amount: form.isCost ? -form.amount : form.amount,
      description: form.description,
      transactionTime: form.date
    }
    // 这里一般都是与后台交互过程
    // 关闭loading
    wx.hideLoading()
  },
  handleSubmit:function(e){
    console.log(88899);
    this.submitData(e);
  }
})