<template>
  <van-nav-bar title="意见反馈" left-arrow @click-left="leftBack"/>
  <van-form @submit="submit">
    <van-field
      v-model="state.value"
      type="textarea"
      autosize
      rows="8"
      placeholder="请简单描述您的问题"
      maxlength="500"
    />
    <van-uploader class="upload-pic" v-model="state.fileList" accept=".jpg,.png" 
      :after-read="afterRead" 
      :before-delete ="deleteFile"
      upload-text="图片上传"
      max-count="5" />
    <van-field
      v-model="state.phone"
      type="number"
      maxlength="13"
      placeholder="请输入您的联系方式"
    />
    <button class="wy-submit" @click="submit">提交</button>
  </van-form>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { uploadImage, addFeedback } from '@/api/my'

const state = reactive({
  value: '',
  fileList: [],
  phone: ''
})
const leftBack = () => history.back()
const submit = async () => {
  if(!state.value){
    showToast('请填写反馈内容')
    return
  }
  if(!state.fileList.length){
    showToast('请上传相关图片')
    return
  }
  if(!/^1[0-9]{10}$/.test(state.phone)){
    showToast('请填写正确的手机号')
    return
  }
  let arr = []
  for(let i = 0;i<state.fileList.length;i++){
    arr.push(state.fileList[i].url)
  }
  const res = await addFeedback({
    "content": state.value, 
    "phone": state.phone, 
    "screenshot": String(arr), 
    "type": 1 
  })
  if(res){
    showToast('您的反馈已收到，我们会尽快处理')
    state.value = ''
    state.fileList = []
    state.phone = ''
  }
}

const deleteFile = (file) => {
  let key = 0
    for(let i = 0;i<state.fileList.length;i++){
      if(state.fileList[i].url === file.url){
        key = i
        break
      }
    }
    state.fileList.splice(key,1)
}
const afterRead = async (file:any) => {
  file.status = 'uploading'
  file.message = '上传中...'
  let param = new FormData()
  param.append('user','test')
  param.append('file',file.file)
  const res = await uploadImage(param)
  file.url = res.imageUrl
  file.status = 'done'
  file.message = '上传成功'
  state.fileList = [file]
}
</script>

<style lang="less" scoped>
.upload-pic{
  margin: 1.49rem 0.8rem 2.27rem;
}
</style>