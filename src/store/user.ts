import { defineStore } from "pinia"

export const userStore = defineStore({
  id: 'user',
  state: () =>{
    return {
      userInfo: {},
      token: localStorage.getItem('token') || '',
      role: localStorage.getItem('role') || '3',
    }
  },
  actions: {
    setUserInfo(data: any) {
      this.userInfo = data.user_info
      this.token = data.token
      this.role = data.user_info.role || '1'
      localStorage.setItem('token',this.token)
      localStorage.setItem('role',this.role)
    },
    setRole(type: string){
      this.role = type
  },
  }
})