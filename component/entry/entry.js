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
      const { pageUrl } = event.currentTarget.dataset
      wx.navigateTo({
        url: pageUrl,
      })
    },
    
    /**
     * 更新入口图标
     */
    checkNewEntry: function(){

    }

  },

  created: function(){
    

  },

  ready: function () {
    
    this.setData({
      entrys: this.properties.entryItems
    })
  },

 
  

})
