<template>
  <van-nav-bar title="我的设置" left-arrow @click-left="leftBack"/>
  <setItem></setItem>
  <button class="set-btn" @click="logout">退出登录</button>
</template>

<script setup lang="ts">
import { userStore } from '@/store/user'
import setItem from '@/views/my/components/setItem.vue'

const store = userStore()
const router = useRouter()
const leftBack = () => history.back()
const logout = () => {
  store.logout()
  router.push('/login')
}
</script>

<style lang="less" scoped>
.set-page{
  height: 100vh;
  background: #f9f9f9;
}
.set-btn{
  height: 2.35rem;
  line-height: 2.35rem;
  background: linear-gradient(90deg, #FFA400, #FF8900);
  border-radius: 0.27rem;
  font-size: 0.8rem;
  color: #FFFFFF;
  border: 0;
  text-align: center;
  width: calc(100vw - 1.28rem);
  margin: 0 0.64rem;
}
</style>