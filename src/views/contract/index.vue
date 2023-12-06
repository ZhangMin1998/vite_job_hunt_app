<template>
  <van-nav-bar
    title="合约"
  />
  <!-- <ContractPage></ContractPage> -->
  <Suspense>
    <ContractPage></ContractPage>
  </Suspense>
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import FooterTabbar from '@/components/FooterTabbar.vue'
import ContractPage from '@/views/contract/components/ContractPage.vue'

</script>

<style lang="less" scoped>

</style>