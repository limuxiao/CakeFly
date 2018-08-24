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
      "http://img3.3lian.com/2013/s1/19/d/56.jpg",
      "http://pic.58pic.com/58pic/15/63/77/17u58PICAqC_1024.jpg",
      "http://pic.58pic.com/58pic/11/24/67/00958PICfNK.jpg"
    ],
    // entryItems:[
    //   new EntryItem(Config.Imgs.img_cake, Config.Pages.page_cake, Config.Text.text_cake),
    //   new EntryItem(Config.Imgs.img_bread, Config.Pages.page_bread, Config.Text.text_bread),
    //   new EntryItem(Config.Imgs.img_milk, Config.Pages.page_milk, Config.Text.text_milk),
    //   new EntryItem(Config.Imgs.img_snack, Config.Pages.page_snack, Config.Text.text_snack)
    // ]
    entryItems: [
      new EntryItem("/imgs/icon_entry_cake.png", "/pages/cake/cake", "蛋糕"),
      new EntryItem("/imgs/icon_entry_bread.png", "/pages/bread/bread", "面包"),
      new EntryItem("/imgs/icon_entry_milk.png", "/pages/milk/milk", "奶茶"),
      new EntryItem("/imgs/icon_entry_snack.png", "/pages/snack/snack", "零食"),
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('...home page load...')
    console.log(app.globalData.userInfo)
    console.log(getCurrentPages()   )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('...home page ready...')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('...home page show...')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('...home page hide...')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('...home page unload...')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      var banner = this.selectComponent("#banner")
      var imgs = [
        "http://img.zcool.cn/community/01c53f5567f0930000016756edc878.jpg@1280w_1l_2o_100sh.png",
        "http://www.pptbz.com/d/file/p/201708/865766c363ecc1a203f39201b8805990.jpg"
      ]
      banner.changeImgs(imgs)
      wx.stopPullDownRefresh()
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('用户拉到底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('...home page share...')
  }
})