<template>
  <van-nav-bar
    title="服务协议"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="text-agree" v-html="state.htmlText"></div>
</template>

<script setup lang="ts">
import { getPolicy } from '@/api/user'
import { showToast } from 'vant'

const state = reactive({
  htmlText: ''
})
const onClickLeft = () => history.back()

const getPolicyChange = async () => {
  const res = await getPolicy({
    id: 17
  })
  if (res) {
    state.htmlText = (res as any).records[0].content
  } else {
    showToast((res as any).msg)
  }
}
// onMounted(() => {
getPolicyChange()
// })
</script>

<style lang="less" scoped>
.text-agree{
  padding: 0.5rem 0.7rem;
}
</style>