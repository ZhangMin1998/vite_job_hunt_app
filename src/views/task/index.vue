<template>
  <div class="task_page">
    <div class="task_top">
      <div class="task_top_city" @click="state.citySwitchBool = true">
        <i></i>
        <strong>{{ store.cityValue }}</strong>
        <span></span>
      </div>
      <input type="text" readonly placeholder="请输入想要搜素的内容">
      <router-link to="/message/systemList" class="task-icon-message"></router-link>
    </div>
    <Banner></Banner>
    <div class="task_title">
      <h3>最新任务</h3>
      <div class="task-positon-pop" @click="state.positionTypeBool = true">
        {{ state.positionValue ? state.positionValue : '职位类型' }}
        <span></span>
      </div>
      <div class="task-screen-pop">
        筛选
        <span></span>
      </div>
    </div>

    <!-- 任务列表 -->
    <TaskList :taskList="taskList"></TaskList>

    <!--切换城市弹窗-->
    <van-popup v-model:show="state.citySwitchBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
      <CitySwitch></CitySwitch>
    </van-popup>

    <!--职位类型弹窗-->
    <van-popup v-model:show="state.positionTypeBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
      <PositionType></PositionType>
    </van-popup>
  </div>
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FooterTabbar from '@/components/FooterTabbar.vue'
import TaskList from '@/components/list/TaskList.vue'
import Banner from '@/views/task/components/Banner.vue'
import CitySwitch from '@/views/task/components/CitySwitch.vue'
import PositionType from './components/PositionType.vue'
import { taskStore } from '@/store/task'

const store = taskStore()
const taskList = reactive([
  {id:1},{id:2},{id:3},{id:4}
])
const state = reactive({
  citySwitchBool: false,
  positionTypeBool: false,
  positionValue: ''
})
const closeCitySwitch = (name:string):void => {
  if (name) {
    store.setCityValue(name)
  }
  state.citySwitchBool = false
}
const closePositionType = (name:string):void => {
  if (name) {
    state.positionValue = name
  }
  state.positionTypeBool = false
}
provide('popup', {
  closeCitySwitch,
  closePositionType
})
</script>

<style lang="less" scoped>
.task_page{
  background: #f9f9f9;
  padding: 0 0.59rem 3rem;
  min-height: calc(100vh - 3rem);
  .task_top{
    display: flex;
    align-items: center;
    padding: 0.5rem 0 0.91rem;
    .task_top_city{
      display: flex;
      align-items: center;
      i{
        width: 1.04rem;
        height: 1.01rem;
        background: url('@/assets/img/icon/icon-place.png') no-repeat;
        background-size: 100%;
      }
      strong{
        font-size: 0.8rem;
        font-weight: 500;
        color: #333333;
        margin-left: 0.1rem;
      }
      span{
        margin: 0 0.6rem 0 0.2rem;
        display: inline-block;
        // border-bottom: 0.18rem solid transparent;
        border-left: 0.18rem solid transparent;
        border-right: 0.18rem solid transparent;
        border-top: 0.36rem solid #333333;
      }
    }
    input{
      flex: 1;
      height: 1.71rem;
      background: #ffffff url('@/assets/img/icon/icon-search.png') 0.35rem 0.38rem no-repeat;
      background-size: 7%;
      border: 0.03px solid #EDEDED;
      border-radius: 0.85rem;
      font-size: 0.69rem;
      font-weight: 300;
      color: #999;
      padding-left: 1.7rem;
    }
    .task-icon-message{
      width: 1.31rem;
      height: 1.28rem;
      background: url('@/assets/img/icon/icon-remind.png') no-repeat;
      background-size: 100%;
      margin-left: 0.27rem;
    }
  }
  .task_title{
    display: flex;
    font-weight: bold;
    margin: 1.44rem 0 0.67rem 0;
    // margin: 0.5rem 0 0.67rem 0;
    h3{
      flex: 1;
      font-size: 0.96rem;
      line-height: 0.96rem;
      font-weight: bold;
      color: #333333;
    }
    .task-positon-pop,.task-screen-pop{
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 300;
      color: #666666;
      margin-left: 0.56rem;
      span{
        margin-left: 0.25rem;
        display: inline-block;
        // border-bottom: 0.18rem solid transparent;
        border-left: 0.18rem solid transparent;
        border-right: 0.18rem solid transparent;
        border-top: 0.36rem solid #333333;
      }
    }
  }
}
</style>