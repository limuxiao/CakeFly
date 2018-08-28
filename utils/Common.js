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
   */
  constructor(title, desc, tag, imgLeft, imgRight, disposeUrl){
    this.title = title
    this.desc = desc
    this.imgLeft = imgLeft
    this.imgRight = imgRight
    this.disposeUrl = disposeUrl
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
}

module.exports = {
  EntryItem: EntryItem,
  RecommendItem: RecommendItem,
  Config: Config
}
