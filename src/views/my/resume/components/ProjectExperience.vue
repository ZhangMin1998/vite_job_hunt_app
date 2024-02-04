<template>
  <div class="resume-label">
    <h3>
      项目经历
      <van-icon 
        name="add-o" 
        @click="addWork"
        v-if="props.page !== 'preview'" 
      />
    </h3>
    <van-swipe-cell
      v-if="store.projectList.length" 
      v-for="(item,index) in store.projectList" 
      :key="index"
    >
      <h4>
        {{item.project_name}}
        <van-icon 
          v-if="props.page !== 'preview'"  
          @click="editWork(item)" 
          name="arrow"
        />
      </h4>
      <p>{{item.project_start_time}} - {{item.project_end_time}}</p>
      <h5>项目描述</h5>
      <van-field 
        v-model="item.project_duty"
        autosize
        readonly
        label=""
        type="textarea"
      />
      <template #right>
        <img v-if="props.page !== 'preview'"  @click="submitDelete(item.project_id)" src="@/assets/img/icon/icon-delete.png" class="delete" />
      </template>
    </van-swipe-cell>
    <label v-else>请您填写项目经历</label>
  </div>

  <van-popup 
    v-model:show="state.show" 
    position="left" 
    duration="0.2" 
    :style="{ width: '100%',height: '100%' }"
  >
    <ProjectExperiencePopup :item="state.item"></ProjectExperiencePopup>
  </van-popup>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import ProjectExperiencePopup from './ProjectExperiencePopup.vue'
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
const editWork = (item) => {
  state.item = item
  state.show = true
}
const addWork = () => {
  state.item = {
    uuid: store.resumeInfo.id
  }
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