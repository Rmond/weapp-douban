// pages/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonid: 'new'
  },

  get_gooddetail(e) {
    // TODO: 访问历史的问题
    wx.navigateTo({
      url: '../detail/detail?goodId=' + e.currentTarget.dataset.goodId
    })
  },

  get_goodList(e) {
    app.bjmedeng("v1/award/list?pageIndex=0&pageSize=10&tableType=" + e.currentTarget.dataset.state, "GET").then(
      res => {
        console.log(res)
        if(res.data.state==1) {
          this.setData({
            goodList: res.data.body.awards,
            buttonid: e.currentTarget.id,
            msg: ""
          })
        }else{
        this.setData({
          goodList:[],
          msg: "没有更多了",
          buttonid: e.currentTarget.id
        })}
      }
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('Authorization')){
      app.userLogin()
    }
    app.bjmedeng("v1/award/list?pageIndex=0&pageSize=10&tableType=1", "GET").then(
        res => this.setData({
            //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
            goodList: res.data.body.awards,
            mag: ""
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