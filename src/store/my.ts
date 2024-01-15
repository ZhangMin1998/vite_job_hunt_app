import { defineStore } from "pinia"
import { getUserInfo } from "@/api/my"

export const myStore = defineStore({
  id: 'my',
  state: () =>{
    return {
      userInfo: {}, // 个人信息
      companyList: [], // 公司信息
      projectList: [], // 项目经历
      resumeInfo: {},
    }
  },
  actions: {
    async queryUserInfo() {
      const res = await getUserInfo()
      if (res) {
        this.userInfo = res
      }
    },
    async getResumeDetail(){
      if(Object.keys({}).length === 0) await this.queryUserInfo()
      const res = await resumeDetail(this.userInfo)
      if(res && res.data[0]){
        this.companyList = res.data[0].companyList
        this.projectList = res.data[0].projectList
        this.resumeInfo = res.data[0].info[0]
      }
    }
  }
})