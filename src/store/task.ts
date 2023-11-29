import { defineStore } from "pinia"

export const taskStore = defineStore({
  id: 'task',
  state: () =>{
    return {
      cityList: [],
      cityValue: localStorage.getItem('city') ||  '深圳',
    }
  },
  actions: {
    setCityList(data: any) {
      this.cityList = data
    },
    setCityValue(value: string){
      this.cityValue = value
    }
  }
})