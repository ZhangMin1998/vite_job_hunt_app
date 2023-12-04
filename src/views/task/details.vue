<template>
  <van-nav-bar
    title="任务详情"
    left-arrow
    @click-left="onClickLeft"
  />
  <TaskDetail :item="state.item" v-if="state.item"></TaskDetail>
  <div class="task_detail_footer">
    <van-action-bar-icon icon="star-o" text="收藏" :color="state.status === 1 ? '#FE8F27' : ''" @click="setTaskCollection" />
    <van-button type="primary" block @click="gotoMessage">立即沟通</van-button>
  </div>
</template>

<script setup lang="ts">
import TaskDetail from './components/TaskDetail.vue'
import { showToast } from 'vant'
import { getTaskDetail, setTaskCollectoin } from '@/api/task'

const router = useRouter()
const state = reactive({
  item: [],
  status: 0,
  loading: false
})
const taskId = router.currentRoute.value.params.id

const onClickLeft = () => history.back()
const queryTaskDetail = async () => {
  state.loading = true
  const res = await getTaskDetail({
    task_id: taskId
  })
  if (res) {
    state.item = (res as any).records[0]
    state.status = (res as any).records[0].status
    state.loading = false
  } else {
    showToast((res as any).msg)
    state.loading = false
  }
}
queryTaskDetail()

const gotoMessage = () => {
  router.push('/message/talk/'+ state.item.task_id + '/'+ state.item.user_id)
}
const setTaskCollection = async () => {
  state.loading = true
  const res = await setTaskCollectoin({
    task_id: taskId
  })
  if ((res as any)) {
    state.status = (res as any).data.status
  }
  state.loading = false
  showToast((res as any).msg)
}
</script>

<style lang="less" scoped>
.task_detail_footer{
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0.64rem 0;
  background: #ffffff;
  button{
    margin-right: 0.64rem;
  }
}
</style>