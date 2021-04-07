var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    categories: [],
    list: [],
    dataTime: ""
  },
  getTimeArr() {
    let TimeArr = [];
    let Date_ = new Date().valueOf();
    let weekList = ["周天", "周一", "周二", "周三", "周四", "周五", "周六"];
    for (let x = 0; x <= 6; x++) {
      let Month = new Date(Date_ + 86400000 * x).getMonth() + 1;
      let date_ = new Date(Date_ + 86400000 * x).getDate();
      let week = weekList[new Date(Date_ + 86400000 * x).getDay()];
      let year = new Date(Date_ + 86400000 * x).getFullYear();
      if (Month < 10) {
        Month = "0" + Month;
      }
      if (date_ < 10) {
        date_ = "0" + date_;
      }
      let data = {
        week: week,
        date: Month + "-" + date_,
        time: year + "-" + Month + "-" + date_,
        flag: false
      };
      TimeArr.push(data);
      TimeArr[0].flag = true;
      this.setData({
        categories: TimeArr,
      })
    }
  },
  onLoad: function(options) {
    this.getTimeArr();
    console.log(this.data.dataTime)
    this.chooseTime();
  },
  chooseTime(data) {
    var that = this;
    let Month2 = new Date().getMonth() + 1;
    let date2_ = new Date().getDate();
    let year2 = new Date().getFullYear();
    let dataTime = year2 + '-' + Month2 + '-' + date2_;
    util.request(api.AppointmentList, {
      time: data || dataTime
      })
      .then(function(res) {
        that.setData({
          list: res.data.list,
            dataTime: data || dataTime
        });
      });
  },
  appointment(event) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '请确认一下预约信息：\r\n[日期]' + that.data.dataTime + '\r\n[时间]' + event.currentTarget.dataset.item.time + '\r\n点击确认发起预约',
      success: function (modal_res) {
        if (modal_res.confirm) {
          wx.request({
            url: api.Appointment,
            data: {
              Id: event.currentTarget.dataset.item.Id,
              token: res.data,
              time: that.data.dataTime
            },
            method: 'POST',
            success: function (res) {
              wx.showToast({
                title: res.data.msg,  //标题
                duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
                mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
              })
            }
          })
        } else if (modal_res.cancel) {
        }
      }
    })
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getCatalog();
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})