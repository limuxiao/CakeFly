/**
 * 入口Item
 */
class EntryItem{

  /**
   * 构造
   * @param iconUrl -- 图标路径
   * @param pageUrl -- 页面路径
   * @param content -- 入口名称
   */
  constructor(iconUrl, pageUrl, content){
    this.iconUrl = iconUrl
    this.pageUrl = pageUrl
    this.content = content
  }

}

/**
 * 推荐内容item
 */
class RecommendItem{

  /**
   * 构造
   * @param title -- 标题
   * @param desc  -- 副标题
   * @param tag   -- 标签
   * @param imgLeft -- 左侧图片路径
   * @param imgRight -- 右侧图片路径
   * @param disposeUrl -- 跳转目标路径
   * @param titleColor -- 标题颜色
   */
  constructor(title, desc, imgLeft, imgRight, disposeUrl, titleColor){
    this.title = title
    this.desc = desc
    this.imgLeft = imgLeft
    this.imgRight = imgRight
    this.disposeUrl = disposeUrl
    this.titleColor = titleColor
  }

}

/**
 * 视频 item
 */
class LiveItem{
  /**
   * 构造
   * @param titel  -- 标题
   * @param desc   -- 藐视
   * @param showUrl -- 显示用的URL 图片或者视频
   * @param disposeUrl  -- 跳转url
   */
  constructor(obj){
    if(obj){
      this.title = obj.title || ""
      this.desc = obj.desc || ""
      this.showUrl = obj.showUrl || ""
      this.disposeUrl = obj.disposeUrl || ""
    }
    
  }
}

/**
 * 商品瀑布 item
 */
class GoodItem{
  /**
   * 构造
   * @param desc  --  描述
   * @param collect -- 收藏数
   * @param live  --  点赞数
   * @param comment  -- 评论数
   * @param disposeUrl  --  目标路径
   * @param imgUrl  --  显示图片路径
   */
  constructor(obj){
    if(obj){
      this.desc = obj.desc || ""
      this.collect = obj.collect || ""
      this.live = obj.live || ""
      this.comment = obj.comment || ""
      this.disposeUrl = obj.disposeUrl || ""
      this.imgUrl = obj.imgUrl || ""
    }
  }
}

const Notofication = {
  
}




/**
 * 基本配置， 方便修改资源路径
 */
const Config = {
  /**
   * 页面路径配置
   */
  Pages:{
    page_cake: "/pages/cake/cake",
    page_bread: "/pages/bread/bread",
    page_milk: "/pages/milk/milk",
    page_snack: "/pages/snack/snack"
  },

  /**
   * 图片资源路径配置
   */
  Imgs:{
    img_cake:"/imgs/icon_entry_cake.png",
    img_bread:"/imgs/icon_entry_bread.png",
    img_milk:"/imgs/icon_entry_milk.png",
    img_snack:"/imgs/icon_entry_snack.png"
  },

  /**
   * 文本资源配置
   */
  Text:{
    text_cake:"蛋糕",
    text_bread:"面包",
    text_milk:"奶茶",
    text_snack:"零食"
  },

  recommendList:[
    {
      title:"淘鲜达", 
      desc:"上海盒马生鲜", 
      tag:"品质生鲜 1小时达", 
      titleColor:"#ff401a",
              imgRight:"https://img.alicdn.com/imgextra/i3/2107975731/TB1_s_Jtr9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg",
      disposeUrl:"http://www.baidu.com"
    },
    {
      title: "有好货", desc: "高颜值美货", tag: "", titleColor: "#34aaf1", 
      imgLeft:"https://img.alicdn.com/imgextra/i3/2107975731/TB1_s_Jtr9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg",
      imgRight: ""
    },
    {
      title: "淘抢购", 
      desc: "应该倒计时", 
      tag:"", 
      titleColor: "#f22c2b",
    },
    {
      title: "必买清单", 
      desc: "购物全攻略", 
      titleColor: "#ff4261",
      imgRight:"http://img.hb.aicdn.com/2aba7a3da5bcdf6455a182383f6fe5f3de43c3cf10722-qqX7Pg_fw658"
    },
    {
      title: "爱逛街", 
      desc: "2018流行啥", 
      titleColor: "#ff7777",
    },
    {
      title: "映像淘宝", 
      desc: "有趣又有料", 
      titleColor: "#f6c04b",
    }  
  ],

  liveList:[
    new LiveItem({
      title:"华为智能世界", desc:"把数字世界带入每个人、每个家庭、每个组织",
      showUrl:"https://www-file.huawei.com/-/media/corporate/minisite/hc2018/v1/video/2018has-cn.mp4",
      disposeUrl:"https://www-file.huawei.com/-/media/corporate/minisite/hc2018/v1/video/2018has-cn.mp4"
    }),
    new LiveItem({
      title:"巴黎之约", desc:"梦幻埃菲尔的别样体验",
      showUrl:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      disposeUrl:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"

    }),
    new LiveItem({
      title: "巴黎之约", desc: "梦幻埃菲尔的别样体验",
      showUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      disposeUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
    }),
    new LiveItem({
      title: "巴黎之约", desc: "梦幻埃菲尔的别样体验",
      showUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
      disposeUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    }),
    new LiveItem({
      title: "巴黎之约", desc: "梦幻埃菲尔的别样体验",
      showUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      disposeUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
    }),

  ],
  goodList: [
    new GoodItem(),
    new GoodItem(),
    new GoodItem(),
    new GoodItem(),
    new GoodItem()  
  ]


}

module.exports = {
  EntryItem: EntryItem,
  RecommendItem: RecommendItem,
  Config: Config
}
