var goods = require('../../data/goods.js');

// pages/joins.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  get_gooddetail(e) {
    // TODO: 访问历史的问题
    wx.navigateTo({
      url: '../detail/detail?goodId=' + e.currentTarget.dataset.goodId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.bjmedeng("v1/award/list?pageIndex=0&pageSize=10&tableType=" + e.currentTarget.dataset.state, "GET").then(
      res => this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        goodList: res.data.body.awards,
      })
    )
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