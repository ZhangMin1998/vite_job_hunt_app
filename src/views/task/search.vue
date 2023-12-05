<template>
  <div :class="state.searchFlag ? 'search_page' : ''">
    <van-nav-bar
      title="搜索"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="search_cont">
      <van-search
        v-model="state.value"
        show-action
        placeholder="请输入搜索的职位"
        @search="onSearch"
        @cancel="onCancel"
      />
      <div class="search_item" v-if="!state.searchFlag">
        <h3>
          搜索历史
          <van-icon name="delete-o" @click="clearHistory" />
        </h3>
        <dl>
          <dt v-for="(item, index) in state.searchHistory" :key="index" @click="gotoSearch((item as any))">
            {{ item }}
          </dt>
        </dl>
        <h3>热门搜索</h3>
        <dl>
          <dt v-for="(item, index) in store.hotSearchList" :key="index" @click="gotoSearch((item as any).title)">
            {{ (item as any).title }}
          </dt>
        </dl>
      </div>
      <div class="search_list" v-show="state.searchFlag">
        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
          <van-list
            v-model:loading="state.loading"
            :finished="state.finished"
            finished-text=""
            @load="onLoad"
          >
            <TaskList :taskList="state.taskList"></TaskList>
            <div class="wy-no-data" v-if="!state.loading && !state.taskList.length">暂无数据</div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { getHotSearch } from '@/api/task'
import TaskList from '@/components/list/TaskList.vue'
import { taskStore } from '@/store/task'

const store = taskStore()
const his = localStorage.getItem('searchHistory')
const state = reactive({
  value: '',
  loading: false,
  finished: false,
  searchFlag: false,
  taskList: [],
  searchHistory: his ? his.split(',') : [],
  pageNum: 1,
  pageSize: 10,
})

const onClickLeft = () => history.back()

const onSearch = (value:any) => {
  if (!value) return
  state.searchFlag = true
  if (!state.searchHistory.includes(value)) {
    state.searchHistory.push(value)
    localStorage.setItem('searchHistory', state.searchHistory as any)
  }
  queryTaskAllList()
}
const onCancel = () => {
  state.searchFlag = false
  state.value = ''
}
const clearHistory = () => {
  state.searchHistory = []
  localStorage.removeItem('searchHistory')
}
const gotoSearch = (item:any) => {
  state.value = item
  onSearch(item)
}
const queryHotSearch = async () => {
  const res = await getHotSearch({ type: 1 })
  if (res) {
    store.setHotSearchList(res.data)
  } else {
    showToast((res as any).msg)
  }
}
if (!store.hotSearchList.length) queryHotSearch()

// 查询任务列表
const queryTaskAllList = async () => {
  state.loading = true
  if(state.pageNum === 1) state.taskList = []
  const res = await getTaskAllList({
    "position_name": state.value, 
    "pageNum": state.pageNum,
    "pageSize": state.pageSize
  })
  if (res) {
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
queryTaskAllList()

const onLoad = () => {
  state.pageNum = state.pageNum + 1
  queryTaskAllList()
}
const onRefresh = () => {
  state.pageNum = 1
  queryTaskAllList()
}

// const gotoMessage = () => {
//   router.push('/message/talk/'+ state.item.task_id + '/'+ state.item.user_id)
// }
</script>

<style lang="less" scoped>
.search_page{
  background: #F9F9F9;
  height: 100%;
  min-height: 100vh;
}
.van-nav-bar{
  background: none;
}
.search_cont{
  padding:0 0.64rem;
  .search_item{
    h3{
      display: flex;
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 500;
      color: #000;
      margin: 0.85rem 0 0.85rem;
      i{
        flex: 1;
        text-align: right;
        font-size: 0.9rem;
      }
    }
    dl{
      dt{
        display: inline-block;
        background: #F5F5F5;
        border-radius: 0.16rem;
        padding: 0.45rem;
        font-size: 0.64rem;
        line-height: 0.64rem;
        font-weight: 400;
        color: #333333;
        margin-right: 0.51rem;
        margin-bottom: 0.53rem;
      }
    }
  }
}
:deep(.van-search__content){
  background: #F2F2F2;
  border-radius: 0.85rem;
}
:deep(.van-search__action){
  font-size: 0.85rem;
  font-weight: 400;
  color: #666666;
  padding-right: 0px;
}
:deep(.van-search--show-action){
  padding-left: 0px;
  background: none;
}
</style>