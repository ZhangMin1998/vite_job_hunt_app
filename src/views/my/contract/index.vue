<template>
  <van-nav-bar title="我的合约" left-arrow @click-left="leftBack" />
  <Suspense>
    <ContractPage :type="type"></ContractPage>
  </Suspense>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import ContractPage from '../../contract/components/ContractPage.vue'

const leftBack = () => history.back()
const router = useRouter()
const type = router.currentRoute.value.params.id
</script>

<style lang="less" scoped>
  
</style>