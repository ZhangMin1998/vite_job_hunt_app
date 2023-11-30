<template>
  <van-nav-bar
    title="职位类型"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="position_switch">
    <div class="position_type_left">
      <h5
        :class="state.typeKey === index ? 'active' : ''"
        v-for="(item, index) in store.positionList"
        :key="index"
        @click="setTypeKey(index)"
      >
        {{ (item as any).name }}
      </h5>
    </div>
    <div class="position_type_right">
      <span 
        v-for="(item, index) in store.positionList[state.typeKey]?.children"
        :key="index"
        @click="closePositionType((item as any).name)"
      >
        {{ (item as any).name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPosiTypeList } from '@/api/task'
import { taskStore } from '@/store/task'
import { showToast } from 'vant'

const store = taskStore()
const { closePositionType } = inject('popup')
const state = reactive({
  typeKey: 0
})

// 返回按钮
const onClickLeft = () => {
  closePositionType()
}

// 获取职位列表
const querypositionList = async () => {
  const res = await getPosiTypeList()
  if (res) {
    store.setPositionList(res)
  } else {
    showToast((res as any).msg)
  }
}
if (!store.positionList.length) querypositionList()

// 切换职位
const setTypeKey = (key: number) => {
  state.typeKey = key
}
</script>

<style lang="less" scoped>
.position_switch{
  display: flex;
  .position_type_left{
    width: 4.77rem;
    height: calc(100vh - 46px);
    background: #F6F6F6;
    h5{
      width: 4.77rem;
      height: 2.4rem;
      line-height: 2.4rem;
      background: #F6F6F6;
      border-bottom: 1px solid #ffffff;
      font-size: 0.75rem;
      font-weight: 300;
      color: #333333;
      text-align: center;
      &.active{
        background: #EFEFEF;
      }
    }
  }
  .position_type_right{
    padding: 0.8rem 0 0 0.6rem;
    span{
      display: inline-block;
      width: 6.61rem;
      height: 2.03rem;
      line-height: 2.03rem;
      background: #FFFFFF;
      border: 1px solid #E9E9E9;
      border-radius: 0.11rem;
      font-size: 0.75rem;
      font-weight: 300;
      color: #666666;
      text-align: center;
      margin-bottom: 0.64rem;
      margin-right: 0.59rem;
      &:nth-child(2n){
        margin-right: 0;
      }
    }
  }
}
</style>