// 创建小程序
App({
  // 生命周期函数 启动
  onLaunch(option) {
    //query scene
    console.log("app onLaunch",option);
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  // 生命周期函数 重新展示的时候
  onShow(option){
    console.log("app onShow",option);
  },
  // 生命周期函数
  onHide(){
    console.log("app onHide");
  },
  // 生命周期函数
  onError(msg){
    console.log("onError", msg);
  },

  //自定义的函数
  globalData: {
    userInfo: null
  }
})
