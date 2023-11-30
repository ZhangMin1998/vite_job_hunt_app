<template>
  <van-nav-bar
    title="城市切换"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="city_switch">
    <h3>当前城市：</h3>
    <div class="city-switch-text">
      <span @click="closeCitySwitch('深圳')">深圳</span>
    </div>
    <h3>切换城市：</h3>
    <div class="city-switch-text">
      <span v-for="(item, index) in store.cityList" :key="index" @click="closeCitySwitch((item as any).name)">{{ (item as any).name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCityList } from '@/api/task'
import { taskStore } from '@/store/task'
import { showToast } from 'vant'

const store = taskStore()

const { closeCitySwitch } = inject('popup')

const onClickLeft = () => {
  closeCitySwitch()
}
const queryCityList = async () => {
  const res = await getCityList()
  if (res) {
    store.setCityList(res)
  } else {
    showToast((res as any).msg)
  }
}
if (!store.cityList.length) queryCityList()
</script>

<style lang="less" scoped>
.city_switch{
  padding: 0 0.7rem;
  h3{
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 500;
    color: #000000;
    margin: 0.7rem 0 0.96rem;
  }
  .city-switch-text{
    span{
      width: 4.01rem;
      height: 1.6rem;
      line-height: 1.6rem;
      background: #FFFFFF;
      border: 1px solid #EBEBEB;
      border-radius: 0.11rem;
      font-size: 0.64rem;
      text-align: center;
      font-weight: 400;
      color: #333333;
      margin: 0 0.7rem 0.8rem 0;
      display: inline-block;
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>