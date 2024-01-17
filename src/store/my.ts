import { defineStore } from "pinia"
import { getUserInfo, resumeDetail, resumeDict } from "@/api/my"

export const myStore = defineStore({
  id: 'my',
  state: () =>{
    return {
      userInfo: {}, // 个人信息
      companyList: [], // 公司信息
      projectList: [], // 项目经历
      resumeInfo: {},
      jobsType: [],
      experience: [],
      highestEducation: <any>[],
      salaryScope: <any>[],
      sysSkillList: []
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
    },
    async getResumeDict() {
      const res = await resumeDict()
      if(res && res.data){
        this.experience = res.data.experience
        let edu = []
        for(let j = 0;j<res.data.highestEducation.length;j++){
            edu.push({
                "name": res.data.highestEducation[j].value
            })
        }
        this.highestEducation = edu
        this.jobsType = res.data.jobsType
        let arr = []
        let scope = res.data.salary_scope
        for(let i = 0;i<scope.length;i++){
            arr.push({
                name: scope[i]
            })
        }
        this.salaryScope = arr
      }
    }
  }
})