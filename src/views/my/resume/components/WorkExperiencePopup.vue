<template>
  <van-nav-bar title="工作经历" left-arrow @click-left="closeChange"/>
  <div class="position-list">
    <div class="user-item">
      <h5>公司名称</h5>
      <van-field v-model="state.companyName" label="" placeholder="请填写您的公司名称" />
    </div>
    <div class="user-item">
      <h5>职位类型</h5>
      <van-field 
        v-model="state.positionValue" 
        label="" 
        placeholder="请选择您的职位类型" 
        readonly
        is-link
        @click="state.showPositionType = true"
      />
    </div>
    <div class="user-item">
      <h5>工作时间</h5>
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
    <div class="user-item">
      <h5>工作描述</h5>
      <div class="work-time-list">
        <van-field
          v-model="state.workDesc"
          label="" 
          placeholder="请填写您的工作描述"
          type="textarea"
          rows="1"
          autosize
        />
      </div>
    </div>
    <!-- <button class="wy-submit" @click="submit">完成</button> -->
  </div>
  <button class="resume_btn" @click="submit">完成</button>
</template>

<script setup lang="ts">
import { myStore } from '@/store/my'
import { addWorkExper, editWorkExper } from '@/api/my'
import { showToast } from 'vant'

const {closeChange} = inject('popup')

const store = myStore()
const state = reactive({
  showPositionType: false,
  showStartTime: false,
  showEndTime: false,
  positionValue: '',
  companyName: '',
  startTime: '',
  endTime: '',
  workDesc: '',
  minDate: new Date(1980,1,1),
  maxDate: new Date()
})
const props = defineProps({
  item: {
    type: Object
  }
})

watch(
  () => props.item,
  (newValue, oldValue) => {
    setInfo()
  }
)

const setInfo = () => {
  state.positionValue = props.item.work_position
  state.companyName = props.item.company_name
  state.workDesc = props.item.company_describe
  state.startTime = props.item.start_time
  state.endTime = props.item.end_time
}
setInfo()
const startTimeConfirm = (value:any) => {
  // console.log(value)
  state.startTime = value.selectedValues[0] + '-' + value.selectedValues[1] + '-' + value.selectedValues[2]
  state.showStartTime = false
}
const endTimeConfirm = (value:any) => {
  state.endTime = value.selectedValues[0] + '-' + value.selectedValues[1] + '-' + value.selectedValues[2]
  state.showEndTime = false
}
const submit = async () => {
  if(!state.companyName){
    showToast('请填写公司名称')
    return
  }
  if(!state.positionValue){
    showToast('请选择职位类型')
    return
  }
  if(!state.startTime && !state.endTime){
    showToast('请选择工作时间')
    return
  }
  if(!state.workDesc){
    showToast('请填写工作描述')
    return
  }
  let res;
  if(props.item.id){
    res = await editWorkExper({
      "id": props.item.id, 
      "company_describe": state.workDesc, 
      "company_name": state.companyName, 
      "end_time": state.endTime, 
      "start_time": state.startTime, 
      "work_position": state.positionValue 
    })
  }else{
    res = await addWorkExper({
      "uuid": props.item.uuid, 
      "company_describe": state.workDesc, 
      "company_name": state.companyName, 
      "end_time": state.endTime, 
      "start_time": state.startTime, 
      "work_position": state.positionValue 
    })
  }
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
.resume_btn{
  width: calc(100vw - 1.28rem);
  height: 2.35rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #FFFFFF;
  background: linear-gradient(90deg, #FEA829, #FE8F27);
  border-radius: 0.27rem;
  border: 0;
  margin: 0 0.64rem 0.64rem;
  position: fixed;
  bottom: 0;
  left:0;
}
</style>