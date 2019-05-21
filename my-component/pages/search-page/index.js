//获取应用实例
const app = getApp();


Page({
  data: {
    keyName: null,
    searchResultDatas: [
      { "Id": "1", "text": "徘徊着的  在路上的  你要走吗易碎的  骄傲着  那也曾是我的模样沸腾着的  不安着的  你要去哪谜一样的  沉默着的  故事你真的在听吗" },
      { "Id": "2", "text": "我曾经跨过山和大海  也穿过人山人海我曾经拥有着一切     转眼都飘散如烟我曾经失落失望失掉所有方向直到看见平凡才是唯一的答案当你仍然  还在幻想  你的明天她会好吗  还是更烂  对我而言是另一天" },
      { "Id": "3", "text": "我曾经毁了我的一切  只想永远地离开我曾经堕入无边黑暗   想挣扎无法自拔我曾经象你象他象那野草野花绝望着 渴望着 也哭也笑平凡着" },
      { "Id": "4", "text": "向前走 就这么走   就算你被给过什么向前走 就这么走   就算你被夺走什么                                        向前走 就这么走   就算你会错过什么向前走 就这么走   就算你会" },
    ],
  },

  onLoad: function (e) {
 
  },
  onShow:function(){
    this.searchTap();
  },
  // 输入框正在输入
  bindInput: function (e) {
    var that = this;
    that.setData({
      keyName: that.trim(e.detail.value)
    })
    that.searchTap();
  },

  // 搜索关键字
  searchTap: function () {
    let keyName = this.data.keyName;
    let searchData = this.data.searchResultDatas.map(function (res) {
      return { key: keyName, name: res.text }
    })
    this.setData({
       searchData
    })
  
  },
  trim: function (s) {//去首尾空格
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }
})