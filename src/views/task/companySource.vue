<template>
  <van-nav-bar
    title="任务来源"
    left-arrow
    @click-left="onClickLeft"
  />
  <CompanySource :item="state.item" />
  <CompanyTask :taskList="state.taskList" />
</template>

<script setup lang="ts">
import { getTaskAllList } from '@/api/task'
import CompanySource from './components/CompanySource.vue'
import CompanyTask from './components/CompanyTask.vue'
import { showToast } from 'vant'

const router = useRouter()
const companyId = router.currentRoute.value.params.id
const state = reactive({
  item: [],
  taskList: [],
  loading: false
})

const onClickLeft = () => history.back()

const queryTaskAllList = async () => {
    state.loading = true
    const res = await getTaskAllList({
        company_id: companyId
    })
    if(res){
      state.taskList = (res as any).records
      state.item = (res as any).records[1]
      state.loading = false
    }else{
      showToast((res as any).msg)
      state.loading = false
    }
}
queryTaskAllList()


</script>

<style lang="less" scoped>

</style>