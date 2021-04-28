// pages/outInStock/outStock/outStock.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    stockName: '蔓之研金街店',
    stocks: [{
        id: 1,
        name: '猛犸机器人1班'
      },
      {
        id: 2,
        name: '蔓之研万达店'
      }
    ]
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  /**
   * 已选下拉框
   */
  selectStock(e) {
    var name = e.currentTarget.dataset.item.name
    console.log(e.currentTarget.dataset.item.id)
    this.setData({
      stockName: name,
      select: false
    })
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