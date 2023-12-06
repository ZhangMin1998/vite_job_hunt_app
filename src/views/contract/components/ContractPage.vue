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
</template>

<script setup lang="ts">
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
  type: 0,
  loading: false,
})

const setTabList = (type:any) => {
  if (type === state.type) return
  state.type = type
}
</script>

<style lang="less" scoped>
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