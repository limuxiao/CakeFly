
const HTTP = require("../../utils/HTTP.js")
const Common = require("../../utils/Common.js")
var { Config } = Common

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

    changeRecommends: function(values){  
      console.log(values[0].title)
      this.setData({
        recommendList: values
      })
    },

    /**
     * 更新推荐信息
     */
    checkNewCommendList: function(obj){
      var re = this
      // 发送网络请求
      HTTP.request({
        url: HTTP.URL.URL_WEATHER,
        method:"GET",
        success: function(data){ 
          console.log("推荐信息更新完成！")
          re.changeRecommends(Config.recommendList)
          if(obj.success)
            obj.success(data)
        },
        fail: obj.fail || function(err){ console.log("推荐信息更新失败：" + err) }
      })
    }

  },

  created: function () {
    

  },

  ready: function () {

    var _recommendList = [
      {
        title:"",
        desc:"",
        imgLeft:"",
        imgRight:"",
        disposeUrl:""
      },
      {},
      {},
      {},
      {},
    ]

    this.setData({
      recommendList: _recommendList}
    )
  },

  
  lost: () => {
    console.log("...lost...")
  }



})
