// pages/wanted/waned.js
var goods = require('../../data/goods.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     goodList:[]
  },

  set_wanted(e) {
    var idx = e.currentTarget.dataset.idx
    console.log(idx)
    var obj = this.data.goodList[idx]
    if(obj.star){
      obj.wanted_num = obj.wanted_num -1
    }else{
      obj.wanted_num = obj.wanted_num +1
    }
    obj.star = !obj.star
    this.setData({ [ "goodList["+idx+"]" ] : obj})

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      goodList: goods.goodList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("aaaaaaaa");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})