// pages/test/test.js
// const order = ['demo1', 'demo2', 'demo3']
// Page({

//   onShareAppMessage() {
//     return {
//       title: 'scroll-view',
//       path: 'page/component/pages/scroll-view/scroll-view'
//     }
//   },

//   data: {
//     toView: 'green'
//   },

//   upper(e) {
//     console.log(e)
//   },

//   lower(e) {
//     console.log(e)
//   },

//   scroll(e) {
//     console.log(e)
//   },

//   scrollToTop() {
//     this.setAction({
//       scrollTop: 0
//     })
//   },

//   tap() {
//     for (let i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1],
//           scrollTop: (i + 1) * 200
//         })
//         break
//       }
//     }
//   },

//   tapMove() {
//     this.setData({
//       scrollTop: this.data.scrollTop + 10
//     })
//   }
// })
Page({
  data: {
    mainActiveIndex: 0,
    activeId: null
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  }
})