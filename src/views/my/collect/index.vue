<template>
  <div class="set_page">
    <van-nav-bar title="我的收藏" left-arrow @click-left="leftBack"/>
    <div class="collect_page">
      <van-pull-refresh v-model="state.loading" @refresh="getCollectList">
        <TaskList :taskList = "state.list"></TaskList>
        <div class="wy-no-data" v-if="!state.loading && state.list.length==0">暂无数据</div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collectList } from '@/api/my'
import TaskList from '@/components/list/TaskList.vue';
import { showToast } from 'vant'

const state = reactive({
  loading: false,
  list: []
})

const leftBack = () => history.back()
const getCollectList = async () => {
  state.loading = true
  const res = await collectList()
  if(res){
    state.list = res.data
  }else{
    showToast(res.msg)
  }
  state.loading = false
}
getCollectList()

</script>

<style lang="less" scoped>
.set_page{
  .collect_page{
    background: #f9f9f9;
    padding: 0.4rem 0.64rem 0;
    height: calc(100vh - 46px - 0.4rem);
  }
}
</style>