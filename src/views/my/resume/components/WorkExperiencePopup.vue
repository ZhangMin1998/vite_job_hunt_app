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
      <van-field v-model="state.companyName" label="" placeholder="请填写您的公司名称" />
    </div>
  </div>
  <button class="wy-submit" @click="submit">保存</button>
</template>

<script setup lang="ts">
import { myStore } from '@/store/my'
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

const setInfo = () => {
  state.positionValue = props.item.work_position
  state.companyName = props.item.company_name
}
setInfo()
const submit = async() => {
  
}

</script>

<style lang="less" scoped>
.position-list{
  margin: 1.52rem 0.67rem 0;
  .user-item{

  }
}
</style>