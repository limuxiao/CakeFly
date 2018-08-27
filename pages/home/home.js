// pages/home/home.js

const Common = require("../../utils/Common.js").default

var { EntryItem, Config } = Common

const app = getApp()  

Page({

  /**
   * 页面的初始数据
   */

  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],

    entryItems: [
      {
        "iconUrl": Config.Imgs.img_cake,
        "pageUrl": Config.Pages.page_cake,
        "content": Config.Text.text_cake
      },
      {
        "iconUrl": Config.Imgs.img_bread,
        "pageUrl": Config.Pages.page_bread,
        "content": Config.Text.text_bread
      },
      {
        "iconUrl": Config.Imgs.img_milk,
        "pageUrl": Config.Pages.page_milk,
        "content": Config.Text.text_milk
      },
      {
        "iconUrl": Config.Imgs.img_snack,
        "pageUrl": Config.Pages.page_snack,
        "content": Config.Text.text_snack
      }
    ],

    hasUser: false,
    loginSuccess: app.globalData.loginSuccess


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh({})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.stopPullDownRefresh()

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})