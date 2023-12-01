<template>
  <van-nav-bar
    title="筛选"
    left-arrow
    @click-left="onClickLeft"
  >
    <template #left>
      <van-icon name="cross" size="18"></van-icon>
    </template>
  </van-nav-bar>
  <div class="task_screen">
    <h3>服务方式</h3>
    <div class="screen_item">
      <span
        :class="state.mode === item ? 'active' : ''"
        v-for="(item, index) in store.screenList.serviceMode"
        :key="index"
        @click="modeChange(item)"
      >
        {{ item }}
      </span>
    </div>
    <h3>任务周期</h3>
    <div class="screen_item">
      <span
        :class="state.cycle === item ? 'active' : ''"
        v-for="(item, index) in store.screenList.taskCycle"
        :key="index"
        @click="cycleChange(item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
  <div class="screen_footer">
    <button class="screen_clear">清除</button>
    <van-button type="primary" block @click="closeScreen(state)">确定</van-button>
  </div>
</template>

<script setup lang="ts">
import { getTaskAllList } from '@/api/task'
import { taskStore } from '@/store/task'
import { showToast } from 'vant'

const store = taskStore()
const { closeScreen } = inject('popup')
const state = reactive({
  mode: '',
  cycle: ''
})

// 返回按钮
const onClickLeft = () => {
  closeScreen()
}

// 获取职位列表
const queryScreenList = async () => {
  const res = await getTaskAllList()
  if (res) {
    store.setScreenList(res.data)
  } else {
    showToast((res as any).msg)
  }
}
if (!store.screenList.serviceMode) queryScreenList()

const modeChange = (item:string) => {
  state.mode = item
}
const cycleChange = (item:string) => {
  state.cycle = item
}

</script>

<style lang="less" scoped>
.task_screen{
  padding: 0 0.6rem;
  h3{
    font-size: 0.96rem;
    line-height: 0.96rem;
    font-weight: 500;
    color: #333;
    margin: 0.8rem 0;
  }
  .screen_item{
    span{
      width: 5.76rem;
      height: 1.6rem;
      line-height: 1.6rem;
      background: #F5F6F8;
      border: 1px solid #F5F6F8;
      border-radius: 0.16rem;
      font-size: 0.75rem;
      font-weight: 400;
      color: #666666;
      text-align: center;
      display: inline-block;
      margin: 0 0.59rem 0.51rem 0;
      &:nth-of-type(3n){
        margin-right: 0;
      }
      &.active{
        color: #FF8A00;
        border: 1px solid #FE8F27;
        background: #ffffff;
      }
    }
  }
}
.screen_footer{
  position: fixed;
  bottom: 0;
  background: #FFFFFF;
  box-shadow: 0rem 0rem 1rem 0rem rgba(208,208,208,0.39);
  padding: 0.83rem 0.64rem;
  display: flex;
  width: calc(100vw - 1.28rem);
  .screen_clear{
    width: 5.33rem;
    height: 2.35rem;
    background: #F5F6F8;
    border-radius: 0.27rem;
    border: 0;
    font-size: 0.8rem;
    font-weight: bold;
    color: #666565;
    margin-right: 0.64rem;
  }
}
</style>