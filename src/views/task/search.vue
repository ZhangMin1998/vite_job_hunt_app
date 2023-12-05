<template>
  <div class="search_page">
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
      <div class="search_item">
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
          <dt>
            前端工程师
          </dt>
          <dt>
            前端工程师
          </dt>
        </dl>
      </div>
      <div class="search_list">
        <TaskList :taskList="state.taskList"></TaskList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { getTaskDetail, setTaskCollectoin } from '@/api/task'
import TaskList from '@/components/list/TaskList.vue';

const state = reactive({
  value: '',
  loading: false,
  finished: false,
  searchFlag: false,
  taskList: [],
  searchHistory: [],
  pageNum: 1,
  pageSize: 10,
})

const onClickLeft = () => history.back()

const onSearch =() => {

}
const onCancel = () => {

}
const clearHistory = () => {

}
const gotoSearch = (item) => {

}
// const queryTaskDetail = async () => {
//   state.loading = true
//   const res = await getTaskDetail({
//     task_id: taskId
//   })
//   if (res) {
//     state.item = (res as any).records[0]
//     state.status = (res as any).records[0].status
//     state.loading = false
//   } else {
//     showToast((res as any).msg)
//     state.loading = false
//   }
// }
// queryTaskDetail()

// const gotoMessage = () => {
//   router.push('/message/talk/'+ state.item.task_id + '/'+ state.item.user_id)
// }
</script>

<style lang="less" scoped>
.search_page{
  // background: #F9F9F9;
  height: 100%;
  min-height: 100vh;
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
    .search_list{

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