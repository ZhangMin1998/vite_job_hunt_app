<template>
  <div class="contract_progress">
    <i :class="contractState(item.contract_I_state)"></i>
    <i :class="contractState(item.contract_II_state)"></i>
    <i :class="contractState(item.contract_III_state)"></i>
    <i :class="contractState(item.contract_IIII_state)"></i>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object
  }
})
const contractState = (index:any) => {
  if(index === 1) return 'green'
  if(index === 2) return 'orange'
  if(index === 3) return 'red'
  return ''
}
</script>

<style lang="less" scoped>
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
      background: #FE9215;
    }
    .red{
      background: #FF4800;
    }
  }
}
</style>