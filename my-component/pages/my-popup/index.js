//获取应用实例
const app = getApp()
import Popup from '../../dist/my-popup/popup';

Page({
  data: {
    //show:false
  },
  onReady: function () {

  },
  showPopup() {//显示弹窗框
    Popup.alert({
      selector: '#my-Popups',//绑定的id选择器
      title: '提示',
      content: '今天从上海到北京，走了三百公里,哈哈哈哈哈哈',
      type: 'String'
    });

    // Popup.alert({
    //   selector:'#my-Popups',
    //   title: '提示',
    //   content: '今天从上海到北京，走了三百公里,哈哈哈哈哈哈',
    //   type:'String'
    // }).then((res) => {
    //   console.log(111)
    // }).catch((res) => {
    //   console.log(222)
    // });
  },
  _onConfirm(){//确认的点击回调事件
    Popup.close({selector: '#my-Popups'});
    console.log("回调方法");
  }
})