<template>
  <van-nav-bar
    title="合约进度"
    left-arrow
    @click-left="onClickLeft"
  />
  <div v-if="state.item" class="progress">
    <h3>{{  state.item.contract_name  }}</h3>
    <div class="progress_bar">
      <ProgressBar :item="state.item"></ProgressBar>
      <div class="progress_bar_text">
        <span>第一阶段</span>
        <span>第二阶段</span>
        <span>第三阶段</span>
        <span>第四阶段</span>
      </div>
    </div>
    <dl>
      <dt>
        <h4>
          第一阶段开发进度评估
          <span v-if="state.item.contract_I_state === -1">
            暂无评估
          </span>
          <span
            class="active"
            v-if="state.item.contract_I_state==-1"
            @click="evaluation(1)">
              去评估
          </span>
        </h4>
        <p v-if="state.item.contract_I_stage">{{state.item.contract_I_stage}}</p>
      </dt>
      <dt>
          <h4>
            第二阶段开发进度评估
            <span v-if="state.item.contract_II_state==-1">暂无评估</span>
            <span class="active" v-if="state.item.contract_II_state==-1" @click="evaluation(2)">去评估</span>
          </h4>
          <p v-if="state.item.contract_II_stage">{{state.item.contract_II_stage}}</p>
      </dt>
      <dt>
        <h4>
          第三阶段开发进度评估
          <span v-if="state.item.contract_III_state==-1">暂无评估</span>
          <span class="active" v-if="state.item.contract_III_state==-1" @click="evaluation(3)">去评估</span>
        </h4>
        <p v-if="state.item.contract_III_stage">{{state.item.contract_III_stage}}</p>
      </dt>
      <dt>
        <h4>
          第四阶段开发进度评估
          <span v-if="state.item.contract_IIII_state==-1">暂无评估</span>
          <span class="active" v-if="state.item.contract_IIII_state==-1" @click="evaluation(4)">去评估</span>
        </h4>
        <p v-if="state.item.contract_IIII_stage">{{state.item.contract_IIII_stage}}</p>
      </dt>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import ProgressBar from '@/components/ProgressBar.vue'
import { getContractDetail } from '@/api/contract'

const router = useRouter()
const state = reactive({
  item: [],
  loading: false,
  num: '',
  evaluationBoll: false
})
const contractId = router.currentRoute.value.params.id

const onClickLeft = () => history.back()

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

const evaluation = (num:any) => {
  state.num = num
  state.evaluationBoll = true
}
</script>

<style lang="less" scoped>
.progress{
  h3{
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 500;
    color: #333333;
    padding:1.2rem 0.69rem 1rem;
  }
  .progress_bar{
    margin: 0 0.64rem 1.17rem;
    .progress_bar_text{
      display: flex;
      span{
        flex: 1;
        text-align: right;
        margin: 0 1px;
        padding-top: 0.45rem;
      }
    }
  }
  dl{
    margin: 0 0.64rem;
    dt{
      border: 1px solid #EDEDED;
      border-radius: 0.27rem;
      margin-bottom: 0.59rem;
      padding: 0.75rem 0.69rem;
      h4{
        display: flex;
        font-size: 0.75rem;
        line-height: 0.75rem;
        font-weight: 300;
        color: #666666;
        span{
          flex: 1;
          text-align: right;
          font-size: 0.64rem;
          font-weight: 500;
          color: #ACACAC;
          &.active{
            color: #FF9415;
          }
        }
      }
      p{
        font-size: 0.64rem;
        font-weight: 400;
        color: #333333;
        line-height: 0.8rem;
        margin-top: 0.77rem;
      }
    }
  }
}
</style>