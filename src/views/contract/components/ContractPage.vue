<template>
  <div class="contract_tab">
    <span
      v-for="(item, index) in tabs"
      :key="index"
      :class="Number(state.type) === item.type ? 'active' : ''"
      @click="setTabList((item as any).type)"
    >
      {{item.text}}
      <i></i>
    </span>
  </div>
  <van-pull-refresh v-model="state.loading" @refresh="queryContractAllList">
    <ContractList :contractList="state.list"></ContractList>
    <van-loading v-if="state.acitveIndex === 0 && state.loading">加载中...</van-loading>
    <div class="wy-no-data" v-if="!state.loading && state.list.length==0">暂无数据</div>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { getContractAllList } from '@/api/contract'
import ContractList from '@/components/list/ContractList.vue'
import { showToast } from 'vant'

const tabs = [
  {
    type: 2,
    text: '待签约'
  },
  {
    type: 3,
    text: '履约中'
  },
  {
    type: 4,
    text: '已完成'
  },
  {
    type: 5,
    text: '已失效'
  }
]
const state = reactive({
  type: tabs[0].type,
  loading: false,
  list: [],
  acitveIndex: 0
})

const queryContractAllList = async () => {
  state.loading = true
  const res = await getContractAllList({
    is_contract_type: state.type,
    // curr_identity: 2
  })
  if (res) {
    state.list = []
    state.list = (res as any).records
    if (!(res as any).records.length && Math.random() > 0.5) {
      state.list = [
        {
          "contract_id": 80,
          "contract_name": '一步招聘App项目开发',
          "contract_type": '技术服务',
          "phone": '13278962216',
          "task_salary": 100000,
          "start_cycle_time": '2023-12-07',
          "end_cycle_time": '2026-12-07',
          "settle_salary": 0,
          "signing_time": null,
          "is_contract_type": 2,
          "is_contract_type_text": '履约中',
          "user_id": 25,
          "check_out": '按任务结算',
          "task_ask": '三年周期开发android和ios端一步招聘App',
          "create_user_id": 53,
          "user_name":'张敏',
          "accounts": '13278962216',
          "sex": 1,
          "company_name": '华为技术有限公司',
          "contract_I_state": -1,
          "contract_I_stage": null,
          "contract_II_state": -1,
          "contract_II_stage": null,
          "contract_III_state": null,
          "contract_III_stage": -1,
          "contract_IIII_state": null,
          "contract_IIII_stage": null,
        }
      ]
    }
    
  } else {
    showToast((res as any).msg)
  }
  state.loading = false
  state.acitveIndex++
}
queryContractAllList()

const setTabList = (type:any) => {
  if (type === state.type) return
  state.type = type
  queryContractAllList()
}
</script>

<style lang="less" scoped>
.van-pull-refresh{
  height: calc(100vh - 46px - 5rem);
  overflow: auto;
}
:deep(.van-loading){
  text-align: center;
  margin-top: 1rem;
}
.contract_tab{
  display: flex;
  span{
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 400;
    flex: 1;
    color: #666;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    padding: 0.59rem 0;
    text-align: center;
    position: relative;
    &.active{
      color: #FF9415;
      i{
        width: 1.63rem;
        height: 0.05rem;
        background: #FF9415;
        position: absolute;
        bottom: 0px;
        left: 50%;
        margin-left: -0.815rem;
      }
    }
  }
}
</style>