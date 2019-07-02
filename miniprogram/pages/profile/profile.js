// pages/profile/profile.js
//云数据库初始化
const db = wx.cloud.database({});
const sign = db.collection('user');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      sign : []
  },

  onGotUserInfo: function(event){
    console.log(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 创建一个变量来保存页面page示例中的this, 方便后续使用
      var _this = this;
      db.collection('user').get({success : res =>{
          // res.data 包含该记录的数据
          this.setData({
          sign : res.data
          })
         }
      })

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