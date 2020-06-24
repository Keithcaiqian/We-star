// components/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 星星的值
    value:{
      type:Number
    },
    // 只读
    readonly:{
      type:Boolean,
      value:false
    },
    // 星星大小
    size:{
      type:Number,
      value:69
    },
    // 星星间距
    gutter:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 1代表左半星亮，2代表右半星亮
    //3代表左半星不亮，4代表右半星不亮
    num: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    starClick: function (e) {
      if(this.properties.readonly){
        return
      }
      let index = e.currentTarget.dataset.index;
      let s = new Array();
      for (let i = 0; i < 10; i++) {
        if (i <= index) {
          if (i % 2 == 1) {
            s[i] = 2
          } else if (i % 2 == 0) {
            s[i] = 1
          }
        } else {
          if (i % 2 == 1) {
            s[i] = 4
          } else if (i % 2 == 0) {
            s[i] = 3
          }
        }
      }
      this.triggerEvent('starClick',{value:(index+1)/2},{})
      this.setData({
        num: s
      })
    },
  },
  pageLifetimes: {
    show: function() {
      // 在组件实例进入页面节点树时执行
      let index = (this.properties.value) * 2 - 1
      let s = new Array();
      for (let i = 0; i < 10; i++) {
        if (i <= index) {
          if (i % 2 == 1) {
            s[i] = 2
          } else if (i % 2 == 0) {
            s[i] = 1
          }
        } else {
          if (i % 2 == 1) {
            s[i] = 4
          } else if (i % 2 == 0) {
            s[i] = 3
          }
        }
      }
      this.setData({
        num: s 
      })
    }
  }
})
