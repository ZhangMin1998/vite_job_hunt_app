<template>
  <div class="company_source">
    <img :src="item.logo" alt="">
    <div>
      <h5>{{item.company_name}}</h5>
      <p>{{item.city}} . {{item.area}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  item: {
    type: Object,
    default: () => []
  }
})


</script>

<style lang="less" scoped>
.company_source{
  display: flex;
  align-items: center;
  margin: 0.91rem 0;
  border-bottom: 1px solid #f0f0f0;
  padding-left: 0.67rem;
  padding-bottom: 0.91rem;
  img{
    width: 2.67rem;
    height: 2.67rem;
    border-radius: 50%;
    margin-right: 0.61rem;
  }
  h5{
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 300;
    color: #333333;
    margin-bottom: 0.51rem;
  }
  p{
    font-size: 0.69rem;
    line-height: 0.69rem;
    font-weight: 100;
    color: #666666;
  }
}
</style>