<template>
  <div class="task_page">
    <div class="task_top">
      <div class="task_top_city" @click="state.citySwitchBool = true">
        <i></i>
        <strong>{{ store.cityValue }}</strong>
        <span></span>
      </div>
      <input type="text" readonly placeholder="请输入想要搜素的内容" @click="gotoSearch">
      <router-link to="/message/systemList" class="task-icon-message"></router-link>
    </div>
    <Banner type="2"></Banner>
    <div class="task_title">
      <h3>最新任务</h3>
      <div class="task-positon-pop" @click="state.positionTypeBool = true">
        {{ state.positionValue ? state.positionValue : '职位类型' }}
        <span></span>
      </div>
      <div class="task-screen-pop" @click="state.screenBool = true">
        筛选
        <span></span>
      </div>
    </div>

    <!-- 任务列表 -->
    <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        offset="10"
        @load="onLoad"
      >
        <TaskList :taskList="state.taskList"></TaskList>
        <div class="wy-no-data" v-if="!state.loading && state.taskList.length==0">暂无数据</div>
      </van-list>
    </van-pull-refresh>

    <!--切换城市弹窗-->
    <van-popup v-model:show="state.citySwitchBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
      <CitySwitch></CitySwitch>
    </van-popup>

    <!--职位类型弹窗-->
    <van-popup v-model:show="state.positionTypeBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
      <PositionType></PositionType>
    </van-popup>

    <!--筛选弹窗-->
    <van-popup v-model:show="state.screenBool" position="left" duration="0" :style="{ width: '100%',height: '100%' }">
      <Screen></Screen>
    </van-popup>
  </div>
  <!-- 底部导航栏 -->
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FooterTabbar from '@/components/FooterTabbar.vue'
import TaskList from '@/components/list/TaskList.vue'
import Banner from '@/views/task/components/Banner.vue'
import CitySwitch from '@/views/task/components/CitySwitch.vue'
import PositionType from './components/PositionType.vue'
import Screen from './components/Screen.vue'
import { showToast } from 'vant'
import { taskStore } from '@/store/task'
import { getTaskAllList } from '@/api/task'

const router = useRouter()
const store = taskStore()
// const taskList = reactive([
//   {id:1},{id:2},{id:3},{id:4}
// ])
const state = reactive({
  citySwitchBool: false,
  positionTypeBool: false,
  positionValue: '',
  screenBool: false,
  serviceMode: '',
  taskCycle: '',
  taskList: [],
  pageNum: 0,
  pageSize: 10,
  loading: false,
  finished: false
})

const gotoSearch = () => {
  router.push('/task/search')
}

// 查询任务列表
const queryTaskAllList = async () => {
  state.loading = true
  if(state.pageNum === 1) state.taskList = []
  const res = await getTaskAllList({
    "position_name": state.positionValue, 
    "service_mode": state.serviceMode,
    "task_cycle": state.taskCycle, 
    "pageNum": state.pageNum,
    "pageSize": state.pageSize,
    "city": store.cityValue,
  })
  if (res) {
    console.log('000000000')
    
    state.taskList = state.taskList.concat((res as any).records)
    state.loading = false
    if (state.taskList.length >= (res as any).total) {
      state.finished = true
    }else{
      state.finished = false
    }
  } else {
    showToast((res as any).msg)
    state.loading = false
  }
}

const onLoad = () => {
  state.pageNum = state.pageNum + 1
  queryTaskAllList()
}
const onRefresh = () => {
  state.pageNum = 1
  queryTaskAllList()
}

const closeCitySwitch = (name:string):void => {
  if (name) {
    store.setCityValue(name)
    onRefresh()
  }
  state.citySwitchBool = false
}
const closePositionType = (name:string):void => {
  if (name) {
    state.positionValue = name
    onRefresh()
  }
  state.positionTypeBool = false
}
const closeScreen = (obj:object):void => {
  if (obj) {
    state.serviceMode = (obj as any).mode
    state.taskCycle = (obj as any).cycle
    onRefresh()
  }
  state.screenBool = false
}

provide('popup', {
  closeCitySwitch,
  closePositionType,
  closeScreen
})
</script>

<style lang="less" scoped>
.task_page{
  background: #f9f9f9;
  padding: 0 0.59rem 3rem;
  min-height: calc(100vh - 3rem);
  // overflow: hidden; // 解决vant-list的load一直执行的问题
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
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
.task_page::-webkit-scrollbar {
    display: none;
    width: 0;
  }
</style>