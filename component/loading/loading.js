// component/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
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
   
    getUserInfo: function(e){
      console.log("...loading getUserInfo...")
      console.log(e)
    }

  },

  created: function () {


  },

  ready: function () {

    console.log("...loading ready...")

    wx.getSetting({
      success: res => {

        console.log("...loading getSetting success...")
        console.log(res)        
      }
    })

  },




})
