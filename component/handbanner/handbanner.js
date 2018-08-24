// component/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrls: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoadImage: function(event){
      console.log(event)
    }
  },

  created: function () {
    

  },

  ready: function () {
    
    this.setData({
      imgUrls: this.properties.imageUrls
    })
    
  },




})
