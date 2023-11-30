import { defineStore } from "pinia"

export const taskStore = defineStore({
  id: 'task',
  state: () =>{
    return {
      cityList: [], // 城市列表
      cityValue: localStorage.getItem('city') ||  '深圳', // 当前选中城市
      bannerList: [], // 轮播图
      positionList: [], // 职位类型
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
    }
  }
})