<template>
  <van-nav-bar
    :title="props.title"
    left-arrow
    @click-left="closeWorksAdd"
  >
    <template #right>
      <span @click="submitAdd">完成</span>
    </template>
  </van-nav-bar>
  <van-field
    v-model="state.value"
    rows="10"
    autosize
    label=""
    type="textarea"
    maxlength="200"
    placeholder="请输入您的常用回复请不要填写qq、微信等联系方式或 广告信息，否则系统将封禁您的账号。"
    show-word-limit
  />
  
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { showToast } from 'vant'
import { addChatMessageWords, editChatMessageWords } from '@/api/message'

const { closeWorksAdd } = inject('popup')
const props = defineProps({
  title: {
    type: String
  },
  id: {
    type: [Number, String]
  },
  text: {
    type: String
  }
})
const state = reactive({
  list: [],
  loading: false,
  value: '', 
})
watchEffect(()=>{
  state.value = props.text
})

const submitAdd = async () => {
  if(!state.value) {
    showToast('请输入常用语')
    return
  }
  state.loading = true
  let res
  if (props.id) { // 编辑
    res = await editChatMessageWords({
      id: props.id,
      text: state.value
    })
  } else { // 添加
    res = await addChatMessageWords({
      text: state.value
    })
  }
  if (res) {
    state.value = ''
    closeWorksAdd()
  } else {
    showToast(res.msg)
  }
  state.loading = false
}
</script>

<style lang="less" scoped>
:deep(.van-field__word-num){
  color: #FF9415;
}
:deep(.van-field__word-limit){
  color: #999999;
}
</style>