class EntryItem{

  constructor(iconUrl, pageUrl, content){
    this.iconUrl = iconUrl
    this.pageUrl = pageUrl
    this.content = content
  }

}

let Common = {}

Common.EntryItem = EntryItem

Common.sayHello = () =>{
  console.log("hello")
}

/**
 * 基本配置， 方便修改资源路径
 */
Common.Config = {
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
  }

}

export default Common
