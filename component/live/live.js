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

    test: (event) => {
      console.log("...点击了视频。。。")
    },

    onActivePause: function(event){
      console.log("...视频暂停了。。。")
      this.isPlaying = false
      console.log(this)
    },

    onActivePlay: function(event){
      console.log("...视频播放了。。。")
      this.isPlaying = true
    },

    play: function(){
      if (this.videoContext) {
        console.log("...有context对象 play ...")
        this.videoContext.play()
      }
    }

  },

  created: function () {    
    console.log("...live create...")
    
    
    
  },

  ready: function () {
    console.log("...live ready...")
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
