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
    goodList: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
   

  },

  created: function () {

  },

  ready: function () {
    this.setData({
      goodList:[
        { title: "哈哈"},
        { title: "呵呵"},
        { title: "嘿嘿"},
        { title: "哼哼"}
      ]
    })
  },




})
