// component/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrls:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: null,
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeImgs: function(imgs){
      
      this.setData({
        imgUrls: imgs
      })
    }
  },

  ready: function(){
    
    this.setData({
      imgUrls: this.properties.imageUrls
    })

    setInterval(() => {
      var index = this.data.currentIndex
      if (index == this.data.imgUrls.length - 1) {
        index = 0
      } else {
        index++
      }

      this.setData({
        currentIndex: index
      })
    },5000,1000)

  }

})
