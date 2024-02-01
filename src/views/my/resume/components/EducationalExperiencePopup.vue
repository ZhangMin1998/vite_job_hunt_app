<template>
  <van-nav-bar title="项目经历" left-arrow @click-left="closeChange"/>
  <div class="position-list">
    <div class="user-item">
      <h5>教育经历</h5>
      <van-field v-model="state.schoolName" label="" placeholder="请填写您的学校名称" />
    </div>
    <div class="user-item">
      <h5>学历</h5>
      <van-field
        v-model="state.education"
        label="" 
        placeholder="请选择您的学历"
        is-link
        @click="state.showEducation = true"
      />
      <van-action-sheet
        v-model:show="state.showEducation"
        :actions="store.highestEducation"
        cancel-text="取消"
        close-on-click-action
        @cancel="state.showEducation=false"
        @select="educationSelect"
      />
    </div>
    <div class="user-item">
      <h5>专业</h5>
      <van-field v-model="state.major" label="" placeholder="请填写您的专业" />
    </div>
    <div class="user-item">
      <h5>就读时间</h5>
      <div class="work-time-list">
        <van-field v-model="state.startTime" readonly label="" placeholder="请选择" @click="state.showStartTime=true"/>
        <span></span>
        <van-field v-model="state.endTime" readonly label="" placeholder="请选择" @click="state.showEndTime=true" />
      </div>
      <van-action-sheet v-model:show="state.showStartTime">
        <van-date-picker
          type="year-month"
          title="选择年月"
          :min-date="state.minDate"
          :max-date="state.maxDate"
          @confirm="startTimeConfirm"
          @cancel="state.showStartTime = false"
        />
      </van-action-sheet>
      <van-action-sheet v-model:show="state.showEndTime">
        <van-date-picker
          type="year-month"
          title="选择年月"
          :min-date="state.minDate"
          :max-date="state.maxDate"
          @confirm="endTimeConfirm"
          @cancel="state.showEndTime = false"
        />
      </van-action-sheet>
    </div>
    <button class="wy-submit" @click="submit">完成</button>
  </div>
</template>

<script setup lang="ts">
import { myStore } from '@/store/my'
import { editEdu } from '@/api/my'
import { showToast } from 'vant'

const {closeChange} = inject('popup')

const store = myStore()
const state = reactive({
  showPositionType: false,
  showStartTime: false,
  showEndTime: false,
  schoolName: '',
  education: '',
  major: '',
  startTime: '',
  endTime: '',
  minDate: new Date(1980,1,1),
  maxDate: new Date()
})
const props = defineProps({
  item: {
    type: Object
  }
})


if(Object.keys(store.resumeInfo).length!==0){
  state.schoolName = store.resumeInfo.school_name
  state.education = store.resumeInfo.highest_education
  state.major = store.resumeInfo.major
  state.startTime = store.resumeInfo.teach_start_time
  state.endTime = store.resumeInfo.teach_end_time
}
const startTimeConfirm = (value:any) => {
  state.startTime = value.selectedValues[0] + '-' + value.selectedValues[1] + '-' + value.selectedValues[2]
  state.showStartTime = false
}
const endTimeConfirm = (value:any) => {
  state.endTime = value.selectedValues[0] + '-' + value.selectedValues[1] + '-' + value.selectedValues[2]
  state.showEndTime = false
}
const educationSelect = (value) => {
  state.education = value.name
}
const submit = async () => {
  if(!state.schoolName){
    showToast('请填写学校名称')
    return
  }
  if(!state.education){
    showToast('请选择学历')
    return
  }
  if(!state.major){
    showToast('请填写专业')
    return
  }
  if(!state.startTime){
    showToast('请选择开始时间')
    return
  }
  if(!state.endTime){
    showToast('请选择结束时间')
    return
  }
  const res = await editEdu({
    "uuid": store.resumeInfo.id,
    "school_name": state.schoolName, 
    "highest_education": state.education, 
    "major": state.major, 
    "teach_start_time": state.startTime,
    "teach_end_time": state.endTime,
  })
  if (res){
    closeChange()
    showToast('保存成功')
  }else{
    showToast('保存失败')
  }
}
const closePositionType = (name:any) =>{
  if(name) state.positionValue = name
  state.showPositionType = false
}
const closeServiceType = (name:any) => {
  if(name) state.serviceValue = name
  state.showServiceType = false
}
provide('popup',{
  closePositionType,
  closeServiceType
})

</script>

<style lang="less" scoped>
.position-list{
  margin: 1.52rem 0.67rem 0;
  .user-item{
    .work-time-list{
      display: flex;
      align-items: center;
      .van-cell{
        // width: 6rem;
      }
      span {
        width: 0.83rem;
        height: 0.05rem;
        margin-right: 2.4rem;
        background: #333333;
      }
    }
  }
}
// .resume_btn{
//   width: calc(100vw - 1.28rem);
//   height: 2.35rem;
//   font-size: 0.8rem;
//   font-weight: 400;
//   color: #FFFFFF;
//   background: linear-gradient(90deg, #FEA829, #FE8F27);
//   border-radius: 0.27rem;
//   border: 0;
//   margin: 0 0.64rem 0.64rem;
//   position: fixed;
//   bottom: 0;
//   left:0;
// }
</style>