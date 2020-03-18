/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Douban API 模块
 * @type {Object}
 */
//const douban = require('./utils/douban.js')

/**
 * Baidu API 模块
 * @type {Object}
 */
const baidu = require('./utils/baidu.js')

const bjmedeng = require('./utils/bjmedeng.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'Douban Movie',
    version: '0.1.0',
    currentCity: '北京'
  },

  globalData: {
    haveUserWechat: false
  },
  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * Douban API
   */
  //douban: douban,

  /**
   * Baidu API
   */
  baidu: baidu,

  bjmedeng:bjmedeng,
  userLogin: function() {
    var that = this
    wechat.login().then(res => {
      if (res.code) {
        //app.wechat.getUserInfo().then(res => this.setData({ userInfo: res.userInfo }))
        var path = 'v2/login/wechat/mini?code=' + res.code
        bjmedeng(path, 'GET').then(res => {
          wx.setStorageSync('Authorization', res.data.body.token)
          that.globalData.haveUserWechat = res.data.body.haveUserWechat
        })
        console.log('登录成功！' + res.code)
      } else {
        console.error('获取用户登录态失败！' + res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    // wechat
    //   .getLocation()
    //   .then(res => {
    //     const { latitude, longitude } = res
    //     return baidu.getCityName(latitude, longitude)
    //   })
    //   .then(name => {
    //     this.data.currentCity = name.replace('市', '')
    //     console.log(`currentCity : ${this.data.currentCity}`)
    //   })
    //   .catch(err => {
    //     this.data.currentCity = '北京'
    //     console.error(err)
    //   })
  }
})
