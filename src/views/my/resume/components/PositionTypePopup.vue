<template>
  <van-nav-bar title="求职意愿" left-arrow @click-left="closeChange"/>
  <div class="position_list">
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
      <h5>服务类型</h5>
      <van-field 
        v-model="state.serviceValue" 
        label="" 
        placeholder="请选择您的服务类型" 
        readonly
        is-link
        @click="state.showServiceType = true"
      />
    </div>
    <div class="user-item">
      <h5>服务价格</h5>
      <van-field 
        v-model="state.priceValue" 
        label="" 
        placeholder="请选择您的服务价格" 
        readonly
        is-link
        @click="state.showPriceType = true"
      />
    </div>
    <button class="wy-submit" @click="submit">保存</button>

    <!--职位类型弹窗-->
    <van-popup
      v-model:show="state.showPositionType"
      position="top" 
      duration="0" 
      :style="{ width: '100%',height: '100%' }"
    >
      <PositionType></PositionType>
    </van-popup>

    <!--服务类型弹窗-->
    <van-popup
      v-model:show="state.showServiceType" 
      position="top" 
      duration="0" 
      :style="{ width: '100%',height: '100%' }"
    >
      <ServiceTypePopup></ServiceTypePopup>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import PositionType from '@/views/task/components/PositionType.vue'
import ServiceTypePopup from '@/views/my/resume/components/ServiceTypePopup.vue'

const store = myStore()
const state = reactive({
  showPositionType: false,
  showServiceType: false,
  showPriceType: false,
  positionValue: '',
  serviceValue: '',
  priceValue: ''
})
const {closeChange} = inject('popup')
const submit = async () => {

}
const closePositionType = (name) => {
  if(name) state.positionValue = name
  state.showPositionType = false
}
const closeServiceType = (name) => {
  if(name) state.serviceValue = name
  state.showServiceType = false
}
provide('popup',{
  closePositionType,
  closeServiceType
})
</script>

<style lang="less" scoped>
.position_list{
  margin: 1.52rem 0.67rem 0;
}
</style>