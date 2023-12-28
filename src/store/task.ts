import { defineStore } from "pinia"
import { getCityList } from "@/api/task"

export const taskStore = defineStore({
  id: 'task',
  state: () =>{
    return {
      cityList: [], // 城市列表
      cityValue: localStorage.getItem('city') ||  '北京', // 当前选中城市
      bannerList: [], // 轮播图
      positionList: [], // 职位类型
      screenList: {}, // 筛选数据
      hotSearchList: [], // 热门搜索
      areaList: []
    }
  },
  actions: {
    // 保存城市列表数据
    setCityList(data: any) {
      this.cityList = data
    },
    // 当前选中城市
    setCityValue(value: string){
      this.cityValue = value
    },
    // 保存轮播图列表数据
    setBannerList(data: any) {
      this.bannerList = data
    },
    // 保存职位类型数据
    setPositionList(data: any) {
      this.positionList = data
    },
    // 保存筛选列表
    setScreenList(data: any) {
      this.screenList = data
    },
    // 保存热门搜索
    setHotSearchList(data: any) {
      this.hotSearchList = data
    },
    async getCityList(){
      const res:any = await getCityList()
      if(res){
        this.cityList = res
        let city:any = []
        for(var i = 0;i<res.length;i++){
          city.push({
            text: res[i].name,
            children: []
          })
          if(res[i].children && res[i].children.length){
            for(var j = 0;j<res[i].children.length;j++){
              city[i].children.push({
                text: res[i].children[j].name
              })
            }
          }
        }
        this.areaList = city
      }
    }
  }
})