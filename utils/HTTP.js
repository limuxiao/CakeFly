const URL = {
  URL_WEATHER: "https://free-api.heweather.com/s6/weather/forecast?location=beijing&key=10c6e97476d54c1f86d8ffcd5639475b",
  URL_VIDEO_ACTIVE: "https://www-file.huawei.com/-/media/corporate/minisite/hc2018/v1/video/2018has-cn.mp4"
}


const request = (obj) => {
  wx.request({
    url: obj.url,
    method: obj.method || 'GET',
    data: obj.data || {},
    header: obj.header || {'Content-Type': 'application/x-www-form-urlencoded'},
    success: obj.success || function() { console.log("request success url:" + obj.url) },
    fail: obj.fail || function(err) { console.log("requset fail:" + err) },
    complete: obj.complet || function() {}
  })
}

module.exports = {
  request: request,
  URL: URL
}