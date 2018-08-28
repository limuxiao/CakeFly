
const HTTP = require("../../utils/HTTP.js")

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
    recommendList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {   
    changeRecommends: (values) => {      
      this.setData({
        recommendList: values
      })
    },

  },

  created: function () {
    

  },

  ready: function () {
      this.setData({
        recommendList: [
          {

          },
          {

          },
          {

          },
          {
            
          }
        ]
      })
  },

  




})
