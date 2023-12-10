<template>
  <van-nav-bar
    title="管理常用语"
    left-arrow
    @click-left="closeWorksManage"
  />

  <div class="manage_list">
    <van-swipe-cell v-for="(item, index) in state.list" :key="index">
      <div class="item">
        <p>{{ item.text }}</p>
        <div>
          <img src="@/assets/img/icon/icon-edit.png" />
          <span @click="editChange(item.id, item.text)">编辑</span>
        </div>
      </div>
      <template #right>
        <img @click="submitDelete(item.id)" src="@/assets/img/icon/icon-delete.png" class="delete" />
      </template>
    </van-swipe-cell>
  </div>
  <button class="add" @click="addChange">添加常用语</button>
  <!--常用语添加弹窗-->
  <van-popup v-model:show="state.addBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
    <TalkWordsAdd :title="state.title" :id="state.editId" :text="state.text"></TalkWordsAdd>
  </van-popup>
</template>

<script setup lang="ts">
import { reactive, provide, inject } from 'vue'
import { showToast } from 'vant'
import TalkWordsAdd from '@/views/message/components/TalkWordsAdd.vue'
import { getChatMessageWordsList, deleteChatMessageWords } from '@/api/message'

const { closeWorksManage } = inject('popup')

const state = reactive({
  list: [],
  loading: false,
  editId: '',
  text: '',
  title: '',
  addBool: false // 是否显示add
})

const queryChatMessageWordsList = async () => {
  state.loading = true
  const res = await getChatMessageWordsList({})
  if(res){
    state.list = (res as any).data
  }else{ 
    showToast((res as any).msg)
  }
  state.loading = false
}
queryChatMessageWordsList()

// 删除
const submitDelete = async (id) => {
  state.loading = true
  const res = await deleteChatMessageWords({
    id: id
  })
  if (res) {
    queryChatMessageWordsList()
  }
  showToast(res.msg)
  state.loading = false
}
// 编辑
const editChange = (id, text) => {
  state.editId = id
  state.text = text
  state.title = '修改常用语'
  state.addBool = true
}
// 添加
const addChange = () => {
  state.editId = ''
  state.text = ''
  state.title = '添加常用语'
  state.addBool = true
}

const closeWorksAdd = () => {
  state.addBool = false
  queryChatMessageWordsList()
}

provide('popup', {
  closeWorksAdd
})
</script>

<style lang="less" scoped>
.manage_list{
  .item{
    margin: 0 0.72rem;
    border-bottom: 1px solid #eeeeee;
    p{
      font-size: 0.75rem;
      line-height: 1.12rem;
      font-weight: 300;
      color: #030303;
      padding: 1rem 0.2rem 0.4rem;
      text-align: left;
    }
    div{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 0.77rem;
      img{
        width: 0.91rem;
        height: 0.91rem;
      }
      span{
        font-size: 0.75rem;
        line-height: 0.75rem;
        font-weight: 300;
        color: #030303;
        text-align: right;
      }
    }
  }
}
.add{
  color: #FFFFFF;
  font-size: 0.8rem;
  font-weight: 400;
  width: calc(100vw - 1.28rem);
  height: 2.35rem;
  line-height: 2.35em;
  border-radius: 0.27rem;
  border: none;
  background: linear-gradient(90deg, #FFA400, #FF8900);
  margin: 0 0.64rem;
  position: fixed;
  bottom: 0.64rem;
  left: 0;
}
</style>