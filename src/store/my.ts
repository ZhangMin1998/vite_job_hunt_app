import { defineStore } from "pinia"
import { getUserInfo } from "@/api/my"

export const myStore = defineStore({
  id: 'my',
  state: () =>{
    return {
      userInfo: {},
    }
  },
  actions: {
    // 系统消息列表数据
    async queryUserInfo() {
      const res = await getUserInfo()
      if (res) {
        this.userInfo = res
      }
    }
  }
})