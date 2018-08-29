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
  constructor(title, desc, tag, imgLeft, imgRight, disposeUrl, titleColor){
    this.title = title
    this.desc = desc
    this.imgLeft = imgLeft
    this.imgRight = imgRight
    this.disposeUrl = disposeUrl
    this.titleColor = titleColor
  }

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
    new RecommendItem("淘鲜达", "上海盒马生鲜", "标签1", "", "", "", "#ff401a"),
    new RecommendItem("有好货", "高颜值美货", "标签2", "", "", "", "#34aaf1"),
    new RecommendItem("淘抢购", "应该倒计时", "标签3", "", "", "", "#f22c2b"),
    new RecommendItem("必买清单", "购物全攻略", "标签4", "", "", "", "#ff4261"),
    new RecommendItem("爱逛街", "2018流行啥", "标签5", "", "", "", "#ff5777"),
    new RecommendItem("映像淘宝", "有趣又有料", "标签6", "", "", "", "#f6c04b"),
  ]

}

module.exports = {
  EntryItem: EntryItem,
  RecommendItem: RecommendItem,
  Config: Config
}
