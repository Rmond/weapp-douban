// pages/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },


  partake(e) {
    var goodid = e.currentTarget.dataset.goodId
    if (!app.globalData.haveUserWechat) {
      console.log(e.detail.userInfo)
      app.bjmedeng("/user/supple/wechat", "POST", e.detail.userInfo).then(
        res => {
          if (res.data.state == 1) {
            app.globalData.haveUserWechat = true
          }
        })
    }
    app.bjmedeng("/v1/award/drawLuck", "POST", { "goodsId": goodid }).then(
      res => {
        if (res.data.state == 1) {
          this.setData({
            ['goodInfo.partak']: true
          })
              }
            }
          )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.bjmedeng("v1/award/detail?id=" + options.goodId, "GET").then(
      res => {
        console.log(res)
        this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        goodInfo: res.data.body,
      })
      }
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