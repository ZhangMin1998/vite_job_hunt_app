<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="(item, index) in store.bannerList" :key="index">
      <a :href="item.url" target="_blank" v-if="item.url">
        <img :src="item.picture" />
      </a>
      <img v-else :src="item.picture" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { taskStore } from '@/store/task'
import { getBannerList } from '@/api/task'
import { showToast } from 'vant'

const props = defineProps({
  type: {
    type: Number
  }
})
const store = taskStore()

// const { closeCitySwitch } = inject('popup')

const queryBannerList = async () => {
  const res = await getBannerList({type: props.type})
  if (res) {
    store.setBannerList((res as any).list)
  } else {
    showToast((res as any).msg)
  }
}
if (!store.bannerList.length) queryBannerList()


</script>

<style lang="less" scoped>
img{
  width: 100%;
  height: 7.47rem;
  border-radius: 0.5rem;
}
// 去掉轮播圆点
// :deep(.van-swipe__indicators){
//   display: none;
// }
:deep(.van-swipe__track){
  height: 7.47rem;
}
</style>