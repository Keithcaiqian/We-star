# We-star
微信小程序星星组件

# 引入
+ 直接把文件拷贝到自己小程序的组件文件夹中
+ 使用前选好四张图片，分别为星星的左半部分亮、右半部分亮、左半部分不亮、右半部分不亮四张图，文件名分别为s1.png、s2.png、s3.png、s4.png,默认图片为红色

# 属性
+ value --- Number类型 为星星的颗数
+ readonly --- BOOlean类型  是否只读
+ size --- Number类型  星星的大小
+ gutter --- Number类型  星星间的间距
+ starClick --- 点击事件

# 使用举例
```
<rate value="{{ score }}" bind:starClick="onChange"  gutter="{{70}}" size="{{80}}" ></rate>
```

+ 可以接收到点击星星后的星数
```
onChange(event) {
  this.setData({
    score: event.detail.value,
  });
},
```
