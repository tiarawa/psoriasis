

Page({
  // 保存编辑中待办的信息
  data: {
    name: '',
    age:'',
    desc: '',
    sex:'',
    date:'',
    freq: 0,
    freqOptions: ['0 无皮疹', '1 1%－9%','2 10%－29%', '3 30%－49%','4 50%－69%', '5 70%－89%','6 90%－100%'],
    freq0: 0,
    freqOptions1: ['0 无皮疹', '1 1%－9%','2 10%－29%', '3 30%－49%','4 50%－69%', '5 70%－89%','6 90%－100%'],
    freq1: 0,
    freqOptions2: ['0 无皮疹', '1 1%－9%','2 10%－29%', '3 30%－49%','4 50%－69%', '5 70%－89%','6 90%－100%'],
    freq2: 0,
    freqOptions3: ['0 无皮疹', '1 1%－9%','2 10%－29%', '3 30%－49%','4 50%－69%', '5 70%－89%','6 90%－100%'],
    freq3: 0,
    slider1: ['0 无红斑可见', '1 呈淡红色','2 红色', '3 深红色','4 红色极深'],
    sli1:0,
    slider2: ['0 皮损与正常皮肤平齐', '1 皮损轻微高出于正常皮肤表面','2 中等度隆起 斑块的边缘为圆或斜坡型', '3 皮损肥厚 隆起明显','4 皮损高度增厚 隆起极为明显'],
    sli2:0,
    slider3: ['0 表面无可见鳞屑', '1 部分皮损表面上覆有鳞屑 以细微的鳞屑为主','2 大多数皮损表面完全或不完全覆有鳞屑 鳞屑呈片状', '3 几乎全部皮损表面覆有鳞屑 鳞屑较厚成层','4 全部皮损表面均覆有鳞屑 鳞屑很厚成层深'],
    sli3:0,
    slider4: ['0 无红斑可见', '1 呈淡红色','2 红色', '3 深红色','4 红色极深'],
    sli4:0,
    slider5: ['0 皮损与正常皮肤平齐', '1 皮损轻微高出于正常皮肤表面','2 中等度隆起 斑块的边缘为圆或斜坡型', '3 皮损肥厚 隆起明显','4 皮损高度增厚 隆起极为明显'],
    sli5:0,
    slider6: ['0 表面无可见鳞屑', '1 部分皮损表面上覆有鳞屑 以细微的鳞屑为主','2 大多数皮损表面完全或不完全覆有鳞屑 鳞屑呈片状', '3 几乎全部皮损表面覆有鳞屑 鳞屑较厚成层','4 全部皮损表面均覆有鳞屑 鳞屑很厚成层深'],
    sli6:0,
    slider7: ['0 无红斑可见', '1 呈淡红色','2 红色', '3 深红色','4 红色极深'],
    sli7:0,
    slider8: ['0 皮损与正常皮肤平齐', '1 皮损轻微高出于正常皮肤表面','2 中等度隆起 斑块的边缘为圆或斜坡型', '3 皮损肥厚 隆起明显','4 皮损高度增厚 隆起极为明显'],
    sli8:0,
    slider9: ['0 表面无可见鳞屑', '1 部分皮损表面上覆有鳞屑 以细微的鳞屑为主','2 大多数皮损表面完全或不完全覆有鳞屑 鳞屑呈片状', '3 几乎全部皮损表面覆有鳞屑 鳞屑较厚成层','4 全部皮损表面均覆有鳞屑 鳞屑很厚成层深'],
    sli9:0,
    slider10: ['0 无红斑可见', '1 呈淡红色','2 红色', '3 深红色','4 红色极深'],
    sli10:0,
    slider11: ['0 皮损与正常皮肤平齐', '1 皮损轻微高出于正常皮肤表面','2 中等度隆起 斑块的边缘为圆或斜坡型', '3 皮损肥厚 隆起明显','4 皮损高度增厚 隆起极为明显'],
    sli11:0,
    slider12: ['0 表面无可见鳞屑', '1 部分皮损表面上覆有鳞屑 以细微的鳞屑为主','2 大多数皮损表面完全或不完全覆有鳞屑 鳞屑呈片状', '3 几乎全部皮损表面覆有鳞屑 鳞屑较厚成层','4 全部皮损表面均覆有鳞屑 鳞屑很厚成层深'],
    sli12:0,
    showView:false
  },

  // 表单输入处理函数
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onAgeInput(e) {
    this.setData({
      age: e.detail.value
    })
  },
  radioChange(e){
    let sex = e.detail.value;
    console.log('性别', sex)
    this.setData({
      sex: sex,
    })
  },
  onDateInput(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onDescInput(e) {
    this.setData({
      desc: e.detail.value
    })
  },

  // 上传新附件
  
    //第一步：选择要上传的图片
    chooseImg(){
      let that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          console.log("选择成功",res);
          wx.showLoading({
            title: '上传中',
           })
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
  
          //调用uploadImg(tempFile)函数，实现图片上传功能
          that.uploadImg(tempFilePaths[0])
        }
      })
    },
    //第二步：上传所选图片到云存储
    uploadImg(tempFile){
      console.log("要上传图片的临时路径",tempFile)
      let timestamp = (new Date()).valueOf()
      wx.cloud.uploadFile({
        cloudPath: +timestamp+'.png',  //云存储的路径，开发者自定义
        filePath: tempFile,           // 文件路径
      }).then(res => {
        console.log("上传成功",res)
        wx.showToast({
          title: '上传成功',
          icon:"success",
          duration:2000
        })
        let that = this
         setTimeout(function(){
          that.setData({
            imageUrl: res.fileID
           })
      },2000)
      })
      .catch(err => {
        console.log("上传失败",err);
      })
    },

    onChangeShowState:function(){
      var that=this;
      that.setData({
      showView:(!that.data.showView),
      })
    },
  // 响应事件状态选择器
  onChooseFreq(e) {
    this.setData({
      freq: e.detail.value
    })
  },
  onChooseFreq0(e) {
    this.setData({
      freq0: e.detail.value
    })
  },
  onChooseFreq1(e) {
    this.setData({
      freq1: e.detail.value
    })
  },
  onChooseFreq2(e) {
    this.setData({
      freq2: e.detail.value
    })
  },
  onChooseFreq3(e) {
    this.setData({
      freq3: e.detail.value
    })
  },
  
  changeSlider1(e) {
    this.setData({ 
      sli1: e.detail.value 
    })
  },
  changeSlider2(e) {
    this.setData({ 
      sli2: e.detail.value 
    })
  },
  changeSlider3(e) {
    this.setData({ 
      sli3: e.detail.value 
    })
  },
  changeSlider4(e) {
    this.setData({ 
      sli4: e.detail.value 
    })
  },
  changeSlider5(e) {
    this.setData({ 
      sli5: e.detail.value 
    })
  },
  changeSlider6(e) {
    this.setData({ 
      sli6: e.detail.value 
    })
  },
  changeSlider7(e) {
    this.setData({ 
      sli7: e.detail.value 
    })
  },
  changeSlider8(e) {
    this.setData({ 
      sli8: e.detail.value 
    })
  },
  changeSlider9(e) {
    this.setData({ 
      sli9: e.detail.value 
    })
  },
  changeSlider10(e) {
    this.setData({ 
      sli10: e.detail.value 
    })
  },
  changeSlider11(e) {
    this.setData({ 
      sli11: e.detail.value 
    })
  },
  changeSlider12(e) {
    this.setData({ 
      sli12: e.detail.value 
    })
  },

  // 保存待办
  async saveTodo() {
    // 对输入框内容进行校验
    if (this.data.name === '') {
      wx.showToast({
        title: '请填写姓名',
        icon: 'error',
        duration: 2000
      })
      return
    }
    if (this.data.age === '') {
      wx.showToast({
        title: '请填写年龄',
        icon: 'error',
        duration: 2000
      })
      return
    }
    if (this.data.date === '') {
      wx.showToast({
        title: '请填写时间',
        icon: 'error',
        duration: 2000
      })
      return
    }
    if (this.data.desc === '') {
      wx.showToast({
        title: '请填写并简洁描述您的当前病情',
        icon: 'error',
        duration: 2000
      })
      return
    }
    if (this.data.name.length > 10) {
      wx.showToast({
        title: '请规范填写姓名',
        icon: 'error',
        duration: 2000
      })
      return
    }
    if (this.data.age.length > 100) {
      wx.showToast({
        title: '请规范填写年龄',
        icon: 'error',
        duration: 2000
      })
      return
    }
    if (this.data.desc.length > 100) {
      wx.showToast({
        title: '请规范填写病情描述',
        icon: 'error',
        duration: 2000
      })
      return
    }
    
    const db = await getApp().database()
    // 在数据库中新建待办事项，并填入已编辑对信息
    db.collection(getApp().globalData.collection).add({
      data: {
        name: this.data.name,       // 待办标题
        sex:this.data.sex,
        age: this.data.age,
        date:this.data.date,
        desc: this.data.desc,         // 待办描述
        star:false,
        freq: Number(this.data.freq), // 待办完成情况（提醒频率）
        freq0: Number(this.data.freq0), 
        freq1: Number(this.data.freq1),
        freq2: Number(this.data.freq2),
        freq3: Number(this.data.freq3),
        sli1: Number(this.data.sli1),
        sli2: Number(this.data.sli2),
        sli3: Number(this.data.sli3),
        sli4: Number(this.data.sli4),
        sli5: Number(this.data.sli5),
        sli6: Number(this.data.sli6),
        sli7: Number(this.data.sli7),
        sli8: Number(this.data.sli8),
        sli9: Number(this.data.sli9),
        sli10: Number(this.data.sli10),
        sli11: Number(this.data.sli11),
        sli12: Number(this.data.sli12),
      }
    }).then(() => {
      wx.navigateBack({
        delta: 0,
      })
    })
  },

  // 重置所有表单项
  resetTodo() {
    wx.navigateTo({
      url: '../list/index'
    })
  }
})

  /*upload(){
    // let that = this;
    // 选择一张图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        // that.uploadFile(tempFilePaths) 如果这里不是=>函数
        //则使用上面的that = this
        this.uploadFile(tempFilePaths) 
      },
    })
  },
  //上传操作
  uploadFile(filePath) {
    wx.cloud.uploadFile({
      cloudPath: (new Date()).valueOf()+'.png', // 文件名
      filePath: filePath, // 文件路径
      success: res => {
        // get resource ID
        console.log(res.fileID)
      },
      fail: err => {
        // handle error
      }
    })
  },*/

 /* async addFile() {
    // 限制附件个数
    if (this.data.files.length + 1 > getApp().globalData.fileLimit) {
      wx.showToast({
        title: '数量达到上限',
        icon: 'error',
        duration: 2000
      })
      return
    }
    // 从会话选择文件

    wx.chooseMessageFile({
      count: 1
    }).then(res => {
      const file = res.tempFiles[0]
      // 上传文件至云存储
      getApp().uploadFile(file.name,file.path).then(res => {
        // 追加文件记录，保存其文件名、大小和文件 id
        this.data.files.push({
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2),
          id: res.fileID
        })
        // 更新文件显示
        this.setData({
          files: this.data.files,
          fileName: this.data.fileName + file.name + ' '
        })
      })
    })
  },
  */