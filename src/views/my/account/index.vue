<template>
  <van-nav-bar title="我的账户" left-arrow @click-left="leftBack"/>
  <AccountInfo></AccountInfo>
  <dl>
    <dt @click="toCheck(index,value.type)" :class="state.check === index?'active':''" v-for="(value,index) in tabs" :key="index">
      {{value.text}}
    </dt>
  </dl>
</template>

<script setup lang="ts">
import AccountInfo from '@/views/my/components/AccountInfo.vue'

const state = reactive({
  check: 0,
  loading: false,
  list: []
})
const tabs = [
  {
    type: 0,
    text: '全部'
  },
  {
    type: 1,
    text: '收入'
  },
  {
    type: 2,
    text: '提现'
  }
]

const leftBack = () => history.back()
const toCheck = async (index:any,type:any) => {
  console.log(index,type)
  state.check = index
}
toCheck(0,0)
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__content){
  background: #FF8E00;
}
:deep(.van-nav-bar__title){
  color: #ffffff;
}
:deep(.van-icon-arrow-left:before){
  color: #ffffff;
}
.van-hairline--bottom:after{
  border: 0;
}
dl{
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
  dt{
    padding: 1.47rem 0 0.59rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 500;
    color: #666666;
    &.active{
      color:#FF8E00;
      border-bottom: 1px solid #FF8E00;
    }
  }
}
</style>