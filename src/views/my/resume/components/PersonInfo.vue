<template>
  <div class="person_info">
    <div class="left">
      <h3>
        {{props.item.user_name}}
        <img
          src="@/assets/img/my/icon-feedback.png" 
          @click="state.show = true"  
          v-if="props.page !== 'preview'" 
        />
      </h3>
      <p>{{props.item.work_year}} ｜ {{props.item.highest_education}} ｜ {{props.item.age}}</p>
    </div>
    <img :src="props.item.it_head" />
  </div>

  <van-popup 
    v-model:show="state.show" 
    position="left" 
    duration="0.2" 
    :style="{ width: '100%',height: '100%' }"
  >
    <UserInfoPage></UserInfoPage>
  </van-popup>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import UserInfoPage from '../../components/UserInfoPage.vue'

const store = myStore()
const props = defineProps({
  item: {
    type: Object
  },
  page: {
    type: String
  }
})
const state = reactive({
  show: false
})
const closeChange = () => {
  state.show = false
  store.getResumeDetail()
}
provide('popup',{
  closeChange
})
</script>

<style lang="less" scoped>
.person_info{
  display: flex;
  justify-content: space-between;
  padding: 0.99rem 0 1.41rem;
  margin: 0 0.72rem;
  border-bottom: 1px solid #F3F3F3;
  .left{
    h3{
      font-size: 1.28rem;
      line-height: 1.28rem;
      font-weight: 400;
      color: #333333;
      margin-bottom: 0.64rem;
      display: flex;
      align-items: flex-end;
      img{
        width: 1rem;
        height: 1rem;
        margin-left: 0.32rem;
      }
    }
    p{
      font-size: 0.69rem;
      line-height: 0.69rem;
      font-weight: 300;
      color: #666666;
    }
  }
  img{
    width: 3.19rem;
    height: 3.19rem;
    border-radius: 50%;
  }
}
</style>