// logs.js
const util = require('../../utils/util.js')

// 获取应用实例，使用app对象可以调用app.js里定义的方法与属性
const app = getApp()

Page({
  //定义了data属性后，可以在wxml中使用{{data中的属性}}
  data: {
    content:"content..",
    motto: 'Hello World',
    names: [{name:"ice"},{name:"fy"}],
    logs:[]
  },

  // 声明周期函数 页面被加载到内存，或者页面第一次启动的时候
  onLoad() {
    console.log("index onLoad");
    //wx 全局的api
    wx.request({
      url: 'https://www.fastmock.site/mock/d2e73e8dea1e92fd3de39716e4c0a246/weixin/api/getData',
      success(msg){
        console.log("index request", msg);
      }
    });
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  // 声明周期函数 页面被加载到内存，或者页面第一次启动的时候，并且页面被渲染完成
  onReady(){
    console.log("index onReady");

  },
  // 声明周期函数 页面被展示
  onShow(){
    console.log("index onShow");
  },
  // 生命周期函数
  onHide(){
    console.log("index onHide");
  },
  onPullDownRefresh(){
    console.log("index onPullDownRefresh");
  },
  // 页面滑动到底部
  onReachBottom(){
    console.log("index onReachBottom");
  },
  // 点击分享
  onShareAppMessage(){
    console.log("index onShareAppMessage");
    return {
      title:"ice",
      path:"pages/index/index"
    }
  },
  onPageScroll(){
    console.log("index onPageScroll");
  },

  //自定义的函数 可以在wxml中调用<view bindtap="changeText">
  changeText(){
    console.log("index changeText");
    //改变data中属性的值
    this.setData({
      motto:"ice"
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
