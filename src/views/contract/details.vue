<template>
  <van-nav-bar
    title="合约详情"
    left-arrow
    @click-left="onClickLeft"
  />
  <dl v-if="state.item">
    <dd>
      <img :src="state.item.logo" />
      <div>
        <h5>{{state.item.company_name}}</h5>
        <p>{{state.item.create_user_name}}</p>
      </div>
      <!-- <img :src="state.item.logo" />
      <div>
        <h5>{{state.item.user_name}}</h5>
        <p>
          {{state.item.position_name}} ｜
          {{state.item.sex}} ｜ 
          {{state.item.work_year}} ｜ 
          {{state.item.highest_education}} ｜
          {{state.item.age}}
        </p>
      </div> -->
    </dd>
    <dt>
      <label>合约状态</label>
      <span>{{state.item.is_contract_type_text}}</span>
    </dt>
    <dt>
      <label>合约名称</label>
      <span>{{state.item.contract_name}}</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span>{{state.item.contract_type}}</span>
    </dt>
    <dt>
      <label>合约薪资</label>
      <span>{{state.item.task_salary}}</span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span>{{state.item.start_cycle_time}}-{{state.item.end_cycle_time}}</span>
    </dt>
    <dt>
      <label>签约时间</label>
      <span>{{state.item.signing_time || '-'}}</span>
    </dt>
    <dt>
      <label>结薪方式</label>
      <span>{{state.item.check_out}}</span>
    </dt>
    <dt>
      <label>合约备注</label>
      <span>{{state.item.task_ask}}</span>
    </dt>
    <dt>
      <label>合约结算</label>
      <span>{{state.item.settle_salary}}</span>
    </dt>
    <dt v-if="state.item.is_contract_type!==1 && state.item.is_contract_type!==2">
      <label>合约进度</label>
      <span></span>
    </dt>
    <dt v-if="state.item.is_contract_type!==1 && state.item.is_contract_type!==2">
      <ProgressBar :item="state.item"></ProgressBar>
    </dt>
  </dl>
  <div class="contract_btn" v-if="state.item">
    <button class="confirm_btn" v-if="state.item.is_contract_type===1" v-debounce="sendChange">发送合约</button>
    <button class="refuse_btn" v-if="state.item.is_contract_type===2" v-debounce="refuseChange">拒绝签约</button>
    <button class="confirm_btn" v-if="state.item.is_contract_type===2" v-debounce="confirmChange">确认签约</button>
    <button class="confirm_btn" @click="gotoProgress" v-if="state.item.is_contract_type!=1 && state.item.is_contract_type!=2">合约进度</button>
  </div>
  <van-loading v-if="!state.item">加载中...</van-loading>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import ProgressBar from '@/components/ProgressBar.vue'
import { getContractDetail } from '@/api/contract'

const router = useRouter()
const state = reactive({
  item: [],
  loading: false
})
const contractId = router.currentRoute.value.params.id

const onClickLeft = () => history.back()
const gotoProgress = () => {
  router.push('/contract/progress/'+ state.item.contract_id)
}
const queryContractDetail = async () => {
  state.loading = true
  const res = await getContractDetail({
    id: contractId
  })
  if (res) {
    state.item = (res as any).records[0]
  } else {
    showToast((res as any).msg)
  }
  state.loading = false
}
queryContractDetail()
</script>

<style lang="less" scoped>
dl{
  font-size: 0.69rem;
  color: #666666;
  dd{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    padding: 0.85rem 0.93rem;
    margin-bottom: 1rem;
    img{
      width: 2.67rem;
      height: 2.67rem;
      border-radius: 50%;
      margin-right: 0.75rem;
    }
    h5{
      font-size: 0.96rem;
      line-height: 0.96rem;
      font-weight: 300;
      color: #333333;
      margin-bottom: 0.48rem;
    }
    p{
      color: #333333;
      line-height: 0.69rem;
    }
  }
  dt{
    display: flex;
    margin-bottom: 1rem;
    padding: 0 0.72rem 0 0.56rem;
    label{
      flex: 1;
    }
    span{
      text-align: right;
      color: #000000;
    }
  }
}
.contract_btn{
  position: fixed;
  bottom: 0.64rem;
  left: 0rem;
  width: 100%;
  display: flex;
  button{
    height: 2.35rem;
    line-height: 2.23rem;
    border: 1px solid #FF9415;
    border-radius: 0.27rem;
    flex: 1;
    font-size: 0.8rem;
    text-align: center;
    margin-right: 0.64rem;
    &.refuse_btn{
      color: #FF9415;
      background: #ffffff;
    }
    &.confirm_btn{
      color: #ffffff;
      background: #FF9415;
    }
    &:first-child{
      margin-left: 0.64rem;
    }
  }
}
</style>