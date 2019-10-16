Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: null,
    swiperCurrent: 0,//当前所在页面的 index
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //滑动动画时长1s
    circular: true, //是否采用衔接滑动
    imgUrls: [//图片路径(可以是本地路径，也可以是图片链接)
      '../img/lbt/1.jpeg',
      '../img/lbt/2.jpeg',
      '../img/lbt/3.jpeg',
      '../img/lbt/4.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539949312074&di=39722c3c27bda0680e3433b64dd9c7e2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb7fd5266d016092454b64286de0735fae7cd3498.jpg'],
    links: [//点击图片之后跳转的路径
      '../personal/personal',
      '../personal/personal',
      '../personal/personal',
      '../personal/personal',
      '../personal/personal',
    ] 
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
    
  },
   onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  },
  goToTalkPage:function(param){
    wx.navigateTo({ url: '/pages/test/test', })
  },
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.navigateTo({
      url: '../personal/personal',
    })
    // console.log('222')
  }
})