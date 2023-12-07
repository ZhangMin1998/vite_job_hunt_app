import { defineStore } from "pinia"
import { getMessageList } from "@/api/message"

export const messageStore = defineStore({
  id: 'message',
  state: () =>{
    return {
      systemMessageList: [], // 系统消息列表
      systemNewMessage: [], // 系统新消息，只显示最新的一条
      messageList: []
    }
  },
  actions: {
    // 系统消息列表数据
    async getSystemMessageList() {
      const res = await getMessageList({
        type: 0,
        is_informtype: 2
      })
      if (res) {
        this.systemMessageList = res.data
        if(this.systemMessageList[0]) { // 系统新消息，只显示最新的一条
          this.systemNewMessage = [this.systemMessageList[0]]
        }
      }
    }
  }
})