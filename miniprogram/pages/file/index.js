/* 文件列表页面 */

Page({
  // 存储显示的待办事项 _id 及其附件列表
  data: {
    _id: '',
    files: [],
    images: ['https://636c-cloud1-1gbm5094810c983c-1306778932.tcb.qcloud.la/record.png?sign=beecbf6dfbfb3e88f45595d43aabae4a&t=1644586042','https://636c-cloud1-1gbm5094810c983c-1306778932.tcb.qcloud.la/req.png?sign=9c39b92c5ed8f6e0e61243c7970ada30&t=1644586234'],
  },
  
  previewImage: function (e) {
    console.log(e)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.images // 需要预览的图片http链接列表
    })
  } ,

  async onLoad(options) {
    // 根据上一页传来的 _id 参数，刷新文件列表
    if (options.id !== undefined) {
      this.setData({
        _id: options.id
      })
      const db = await getApp().database()
      // 根据 _id，查询待办事项
      db.collection(getApp().globalData.collection).where({
        _id: this.data._id
      }).get().then(res => {
        // 解包获得返回列表（应只匹配一项）中的 todo 对象
        const {
          data: [todo]
        } = res
        if (todo !== undefined) {
          // 存储查询得到 todo 对象中的文件列表
          this.setData({
            files: todo.files
          })
        }
      })
    }
  },


})

/*  // 调用小程序 Api，下载并展示文件保存位置
  downloadFile(e) {
    // 获得触发下载的文件序号，并获得对应文件 id
    const index = e.currentTarget.dataset.index
    const file = this.data.files[index]
    // 调用接口从云存储下载文件
    getApp().downloadFile(file.id).then(res => {
      // 保存文件到本地，并展示文件位置
      const {
        tempFilePath
      } = res
      wx.saveFile({
        tempFilePath
      }).then(res => {
        const {
          savedFilePath
        } = res
        wx.showToast({
          title: '文件已保存至：' + savedFilePath,
          icon: 'none',
          duration: 4000
        })
      })
    }).catch(err => console.log(err))
  },

  // 删除文件
  async deleteFile(e) {
    // 根据触发删除事件的文件序号，获取文件 id
    const index = e.currentTarget.dataset.index
    const db = await getApp().database()
    // 快速刷新本地数据，更新显示
    this.data.files.splice(index, 1)
    this.setData({
      files: this.data.files
    })
    // 根据 id 从数据库中删除对应文件记录
    db.collection(getApp().globalData.collection).where({
      _id: this.data._id
    }).update({
      data: {
        files: this.data.files
      }
    })
  } */