// component/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    entryItems:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    entrys: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
    * 跳转到指定页面
    */
    toDisposePage: function (event) {
      console.log("...toDisposePage...")
      const { pageUrl } = event.currentTarget.dataset
      wx.navigateTo({
        url: pageUrl,
      })
    }


  },

  created: function(){
    console.log("...entrt...created...")

  },

  ready: function () {
    console.log('...entry...ready...')
    wx.showToast({
      title: '数据长度：' + this.properties.entryItems.length,
    })
    this.setData({
      entrys: this.properties.entryItems
    })
  },

 
  

})
