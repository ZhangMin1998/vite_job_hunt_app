<template>
  <van-nav-bar
    title="查看消息"
    left-arrow
    @click-left="onClickLeft"
  />
  <h3>
    {{ state.item.title }}
  </h3>
  <p>{{ state.item.content }}</p>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { getSystemDetail } from '@/api/message'

const router = useRouter()
const id = router.currentRoute.value.params.id
const state = reactive({
  item: '',
  loading: false
})

const onClickLeft = () => history.back()
const querySystemDetail = async () => {
  const res = await getSystemDetail({
    id: id
  })
  if(res){
      state.item = (res as any)[0]
  }else{ 
    showToast((res as any).msg)
  }
  state.loading = false
}
querySystemDetail()
</script>

<style lang="less" scoped>
h3{
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 400;
  color: #333333;
  margin: 1.7rem 0.75rem 0.83rem;
}
p{
  font-size: 0.69rem;
  font-weight: 500;
  color: #666666;
  line-height: 1.23rem;
  text-indent: 2em;
}
</style>