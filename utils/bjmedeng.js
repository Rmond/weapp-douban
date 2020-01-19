
const URI = 'https://goods.bjmedeng.com/lightning-goods'


module.exports = function (path, method, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URI}/${path}`,
      data: Object.assign({}, params),
      method: method,
      header: {
        'content-type': 'application/json;charset-UTF8',
        'channel': 'wechat01',
        'Authorization': wx.getStorageSync('Authorization')
      },
      success: resolve,
      fail: reject
    })
  })
}