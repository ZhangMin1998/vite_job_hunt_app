<template>
  <div class="resume-label">
    <h3>
      求职意愿
      <van-icon 
        name="add-o" 
        @click="state.show = true" 
        v-if="props.page!=='preview'" 
      />
    </h3>
    <label 
      v-if="store.resumeInfo.position_name || 
      store.resumeInfo.service_mode|| 
      store.resumeInfo.service_price"
    >
      {{store.resumeInfo.position_name}} | 
      {{store.resumeInfo.service_mode}} | 
      {{store.resumeInfo.service_price}}
    </label>
    <label v-else>请您填写求职意愿</label>
  </div>

  <van-popup 
    v-model:show="state.show" 
    position="left" 
    duration="0.2" 
    :style="{ width: '100%',height: '100%' }"
  >
    <PositionTypePopup></PositionTypePopup>
  </van-popup>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import PositionTypePopup from './PositionTypePopup.vue'

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
  store.getResumeDetail()
}
provide('popup',{
  closeChange
})
</script>

<style lang="less" scoped>

</style>