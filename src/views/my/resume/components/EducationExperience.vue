<template>
  <div class="resume-label">
    <h3>
      教育经历
      <van-icon 
        name="add-o" 
        @click="editWork"
        v-if="props.page !== 'preview'" 
      />
    </h3>
    <div v-if="store.resumeInfo.school_name">
      <h4>
        {{store.resumeInfo.school_name}}
        <van-icon 
          v-if="props.page !== 'preview'"  
          @click="editWork" 
          name="arrow"
        />
      </h4>
      <p>{{store.teach_start_time}} - {{store.teach_end_time}}</p>
      <h5>{{store.resumeInfo.major}} | {{store.resumeInfo.highest_education}}</h5>
    </div>
    <label v-else>请您填写教育经历</label>
  </div>

  <van-popup 
    v-model:show="state.show" 
    position="left" 
    duration="0.2" 
    :style="{ width: '100%',height: '100%' }"
  >
    <EducationalExperiencePopup :item="state.item"></EducationalExperiencePopup>
  </van-popup>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import EducationalExperiencePopup from './EducationalExperiencePopup.vue'
import { showToast } from 'vant'
import { workDelete } from '@/api/my'

const store = myStore()
const state = reactive({
  show: false,
  item: {}
})
const props = defineProps({
  page: {
    type: String
  }
})
const editWork = () => {
  state.show = true
}

const submitDelete = async (id:any) => {
  const res = workDelete({
    id: id
  })
  if(res){
    showToast('删除成功')
    store.getResumeDetail()
  }else{
    showToast('删除失败')
  }
}


const closeChange = () => {
  state.show = false
  store.getResumeDetail()
}
provide('popup',{
  closeChange
})
</script>

<style lang="less" scoped>
.text-list dt{
  font-size: 0.59rem;
  line-height: 0.59rem;
  font-weight: 300;
  color: #666666;
  padding: 0.4rem 0.5rem;
  margin-right: 0.27rem;
  margin-bottom: 0.3rem;
  background: #F6F7F8;
  border-radius: 0.16rem;
  display: inline-block;
}
</style>