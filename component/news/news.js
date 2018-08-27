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
    newItems:[],
    animationData:{}    
  },

  /**
   * 组件的方法列表
   */
  methods: {

      onTest: function(e){
        console.log(e)
      }

  },

  created: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.currentIndex = 0
  },

  ready: function () {
    this.setData({
      newItems:[
        {
          topTitle:"新iPhone将于9月14日预定",
          topTag:"超赞",
          bottomTitle:"小米出新品，或许是史上颜值最高",
          bottomTag:"最新",
          imgUrl:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
        },
        {
          topTitle: "全球排名第一的手机，在中国却销售惨淡",
          topTag: "精华",
          bottomTitle: "信仰，索尼MDR-Z1R新动圈旗舰手机",
          bottomTag: "评测",
          imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        },
        {
          topTitle: "用美漫的方式打开海贼王，女帝简直辣眼睛",
          topTag: "福利",
          bottomTitle: "有一合资轿车投降认输，从16万降至7万",
          bottomTag: "评测",
          imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }
      ],
      animationData: this.animation.export()
    })

    setInterval(() => {
      if (this.currentIndex < this.data.newItems.length - 1){
        this.currentIndex ++
      }else{
        this.currentIndex = 0
      }
      this.animation.translateY(-70 * this.currentIndex).step()
      this.setData({
        animationData: this.animation.export()
      })

    }, 2500,2500)

  },

})