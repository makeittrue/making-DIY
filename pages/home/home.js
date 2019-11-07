// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    email: 'software_hb@163.com',
    version: 'v.bate0.0.1',
    libVersion: 'bate0.0.1'
  },

  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo.nickName) {
      this.setData({
        userInfo
      })
    } else {
      // 查看是否授权
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: res => {
                this.setData({
                  userInfo: res.userInfo
                })
              }
            })
          }
        }
      })
    }
  },

  onGotUserInfo(e) {
    let userInfo = e.detail.userInfo
    wx.setStorageSync('userInfo', userInfo)
    this.setData({
      userInfo
    })
  }
})