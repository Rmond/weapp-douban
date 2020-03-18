// pages/wanted/waned.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     wantedList:[],
     msg: ""
  },

  set_wanted(e) {
    var idx = e.currentTarget.dataset.idx
    var obj = this.data.wantedList[idx]
    if(obj.star){
      obj.wantedNum = obj.wantedNum -1
    }else{
      obj.wantedNum = obj.wantedNum +1
    }
    obj.star = !obj.star
    this.setData({ [ "wantedList["+idx+"]" ] : obj})

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    app.bjmedeng("v1/wish/list", "GET").then(
      res => {
        console.log(res)
        if (res.data.state == 1) {
          this.setData({
            wantedList: res.data.body.wishes,
            msg: ""
          })
        } else {
          this.setData({
            wantedList: [],
            msg: "没有更多了"
          })
        }
      }
    )
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function (e) {
    // app.bjmedeng("v1/wish/want", "POST", { "goodsWishId": goodid }).then(
    //   res => {
    //     console.log(res)
    //   }
    // )
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