<template>
  <dl class="contract_item" v-for="(item, index) in contractList" :key="index"  @click="gotoDetail((item as any).contract_id)">
    <dd>
      <h3>Web前端开发工程师</h3>
      <span>履约中</span>
      <van-icon name="arrow" />
    </dd>
    <dt>
      <label>公司名称</label>
      <span>华为技术有限公司</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span>技术服务</span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span>3年</span>
    </dt>
    <dt>
      <label>签约时间</label>
      <span>2023-11-29</span>
    </dt>
    <dt>
      <label>合约进度</label>
      <span></span>
    </dt>
    <dt class="contract_progress">
      <i class="gerrn"></i>
      <i class="green"></i>
      <i class="orange"></i>
      <i class="red"></i>
    </dt>
  </dl>
</template>

<script setup lang="ts">
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
  .contract_progress{
    display: flex;
    height: 0.53rem;
    width: 100%;
    i{
      flex: 1;
      background: #f3f3f3;
      margin: 0 1px;
      .green{
        background: #50D400;
      }
      .orange{
        background: #fe9215;
      }
      .red{
        background: #ff4800;
      }
    }
  }
}
</style>