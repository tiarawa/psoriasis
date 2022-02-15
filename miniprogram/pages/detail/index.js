/* 待办详情组件 */

Page({
  // 保存展示待办的 _id 和详细信息
  data: {
    _id: '',
    todo: {
      title: ''
    },
    freqOptions: ['0 无皮疹', '1 1%－9%','2 10%－29%', '3 30%－49%','4 50%－69%', '5 70%－89%','6 90%－100%'],
    slider1: ['0 无红斑可见', '1 呈淡红色','2 红色', '3 深红色','4 红色极深'],
    slider2: ['0 皮损与正常皮肤平齐', '1 皮损轻微高出于正常皮肤表面','2 中等度隆起 斑块的边缘为圆或斜坡型', '3 皮损肥厚 隆起明显','4 皮损高度增厚 隆起极为明显'],
    slider3: ['0 表面无可见鳞屑', '1 部分皮损表面上覆有鳞屑 以细微的鳞屑为主','2 大多数皮损表面完全或不完全覆有鳞屑 鳞屑呈片状', '3 几乎全部皮损表面覆有鳞屑 鳞屑较厚成层','4 全部皮损表面均覆有鳞屑 鳞屑很厚成层深'],
    showView:false,
    headF:'',
    headE:'',
    headI:'',
    headD:'',
    headPASI:'0.1',
    armPASI:'0.2',
    bodyPASI:'0.3',
    legPASI:'0.4',
    totalPASI:''
  },

  add:function(){
    console.log("call add...")
    wx.cloud.callFunction({
      name:"add",
      data:{
        a: this.data.headE,
        b: this.data.headI,
        c: this.data.headD,
      }
    }).then( res => {
      console.log(res.calResult)
      this.setData({
        calResult: res.result.calResult
      })
    })
  },
  mul:function(){

  },
  onLoad(options) {
    // 保存上一页传来的 _id 字段，用于后续查询待办记录
    if (options.id !== undefined) {
      this.setData({
        _id: options.id
      })
    }
  },
  /*onLoad:function(options){
    // 生命周期函数--监听页面加载
    showView:(options.showView=="true"?true:false)
    }
    ,*/
    onChangeShowState:function(e){
      var that=this;
      that.setData({
      showView:(!that.data.showView),
      headE: e.detail.value
      })
    },
  // 根据 _id 值查询并显示待办数据
  async onShow() {
    if (this.data._id.length > 0) {
      const db = await getApp().database()
      // 根据 _id 值查询数据库中对应的待办事项
      db.collection(getApp().globalData.collection).where({
        _id: this.data._id
      }).get().then(res => {
        // 解包获得待办事项
        const {
          data: [todo]
        } = res
        // 将数据保存到本地、更新显示
        this.setData({
          todo,
        })
      })
    }
  },

  // 跳转响应函数
  toPASI() {
    wx.navigateTo({
      url: '../file/index?id=' + this.data._id,
    })
  },

})