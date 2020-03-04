// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '222',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    app.bjmedeng("/user/supple/wechat", "POST", e.detail.userInfo).then(
      res => {console.log(res)}
    )
  },

  joinList() {
    // TODO: 访问历史的问题
    wx.navigateTo({
      url: '../joins/joins'
    })
  },
  wantedList() {
    wx.navigateTo({
      url: '../wanted/wanted'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
  }
})
