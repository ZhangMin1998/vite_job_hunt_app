<template>
  <div v-if="contractList.length">
    <dl class="contract_item" v-for="(item, index) in contractList" :key="index"  @click="gotoDetail((item as any).contract_id)">
      <dd>
        <h3>{{item.contract_name}}</h3>
        <span>{{item.is_contract_type_text}}</span>
        <van-icon name="arrow" />
      </dd>
      <dt>
        <label>公司名称</label>
        <span>{{item.company_name}}</span>
      </dt>
      <dt>
        <label>合约类型</label>
        <span>{{item.contract_type}}</span>
      </dt>
      <dt>
        <label>合约周期</label>
        <span>{{item.start_cycle_time}}~{{item.end_cycle_time}}</span>
      </dt>
      <dt>
        <label>签约时间</label>
        <span>{{item.signing_time}}</span>
      </dt>
      <dt>
        <label>合约进度</label>
        <span></span>
      </dt>
      <dt>
        <ProgressBar :item="(item as any)"></ProgressBar>
      </dt>
    </dl>
  </div>
  <div class="wy-no-data" v-else>暂无数据</div>
</template>

<script setup lang="ts">
import ProgressBar from '../ProgressBar.vue'
import { useRouter } from 'vue-router'

defineProps({
  contractList: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()
const gotoDetail = (id: number) => {
  router.push('/contract/details/' + id)
}

</script>

<style lang="less" scoped>
.contract_item{
  background: #FFFFFF;
  font-size: 0.64rem;
  color: #666666;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
  dd{
    display: flex;
    margin-bottom: 0.9rem;
    align-items: center;
    h3{
      font-size: 0.8rem;
      font-weight: 500;
      color: #333333;
      flex: 1;
    }
    span{
      text-align: right;
      font-size: 0.75rem;
      color: #FF9415;
    }
    i{
      font-size: 0.75rem;
    }
  }
  dt{
    display: flex;
    margin-bottom: 0.72rem;
    label{
      flex: 1;
    }
    span{
      text-align: right;
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
  // .contract_progress{
  //   display: flex;
  //   height: 0.53rem;
  //   width: 100%;
  //   i{
  //     flex: 1;
  //     background: #f3f3f3;
  //     margin: 0 1px;
  //     .green{
  //       background: #50D400;
  //     }
  //     .orange{
  //       background: #fe9215;
  //     }
  //     .red{
  //       background: #ff4800;
  //     }
  //   }
  // }
}
</style>