<template>
  <div class="resume-label">
    <h3>
      个人优势
      <!-- {{props.item.user_name}} -->
      <img
        src="@/assets/img/my/icon-feedback.png" 
        @click="state.show = true"  
        v-if="props.page !== 'preview'" 
      />
    </h3>
    <label>{{store.resumeInfo.advantage||'请您填写个人优势'}}</label>
  </div>

  <van-popup 
    v-model:show="state.show" 
    position="left" 
    duration="0.2" 
    :style="{ width: '100%',height: '100%' }"
  >
    <PersonAdvantagePopup></PersonAdvantagePopup>
  </van-popup>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import PersonAdvantagePopup from './PersonAdvantagePopup.vue'

const store = myStore()
const state = reactive({
  show: false
})
const props = defineProps({
  page: {
    type: String
  }
})
const closeChange = () => {
  state.show = false
  // store.getResumeDetail()
}
provide('popup',{
  closeChange
})
</script>

<style lang="less" scoped>
.resume-label{
  h3{
    display: flex;
    align-items: flex-end;
    img{
      width: 1rem;
      height: 1rem;
      margin-left: 0.32rem;
    }
  }
}
</style>