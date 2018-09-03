const Common = require("../../utils/Common.js")

const {Config} = Common

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
    liveList: null
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onActivePause: function(event){
      console.log("...视频暂停了。。。")
      this.isPlaying = false
      console.log(this)
    },

    onActivePlay: function(event){
      console.log("...视频播放了。。。")
      this.isPlaying = true
    }

  },

  created: function () {    
    console.log("...live create...")
    
    
    
  },

  ready: function () {
    console.log("...live ready...")
    this.setData({
      liveList: Config.liveList
    })
    this.videoContext = wx.createVideoContext("myVideo", this)
    this.videoContext.play()
  },

  pageLifetimes: {
    show: function(){
      console.log("... live 检测到 home show...")
      console.log(this)
      
      setTimeout(()=>{
        if (!this.isPlaying) {
          this.videoContext.play()
        }
        
      }, 1000)
        
       
      console.log("...isPlaying:" + this.isPlaying)
    }
  }

})
