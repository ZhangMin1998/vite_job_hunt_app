<template>
  <van-nav-bar title="我的账户" left-arrow @click-left="leftBack"/>
  <AccountInfo></AccountInfo>
</template>

<script setup lang="ts">
import AccountInfo from '@/views/my/components/AccountInfo.vue'

const leftBack = () => history.back()
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
</style>