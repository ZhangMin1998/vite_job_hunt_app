<template>
  <div class="talk_word">
    <dl>
      <dt v-for="(item,index) in state.list" :key="index" @click="worksChange(item.text)">
        {{ item.text }}
      </dt>
    </dl>
    <div class="talk_word_btn">
      <p @click="state.addBool = true"><img src="@/assets/img/icon/icon-add.png" alt="">添加</p>
      <i></i>
      <p @click="state.manageBool = true"><img src="@/assets/img/icon/icon-file.png" alt="">管理</p>
    </div>
    <!--常用语添加弹窗-->
    <van-popup v-model:show="state.addBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
      <TalkWordsAdd title="添加常用语"></TalkWordsAdd>
    </van-popup>
    <!--常用语管理弹窗-->
    <van-popup v-model:show="state.manageBool" position="left" duration="0.2" :style="{ width: '100%',height: '100%' }">
      <TalkWordsManage title="添加常用语"></TalkWordsManage>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { getChatMessageWordsList } from '@/api/message'
import TalkWordsAdd from '@/views/message/components/TalkWordsAdd.vue'
import TalkWordsManage from '@/views/message/components/TalkWordsManage.vue'

const { worksChange }  = inject('popup')
const state = reactive({
  list: [],
  loading: false,
  addBool: false,
  manageBool: false
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

const closeWorksAdd = () => {
  state.addBool = false
  queryChatMessageWordsList() // 添加后查询
}
const closeWorksManage = () => {
  state.manageBool = false
  queryChatMessageWordsList() // 关闭弹框后查询
}
provide('popup', {
  closeWorksAdd,
  closeWorksManage
})

</script>

<style lang="less" scoped>
.talk_word{
  height: 12rem;
  dl{
    height: 8.7rem;
    margin: 0 0.85rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    overflow: auto;
    dt{
      font-size: 0.75rem;
      font-weight: 300;
      color: #030303;
      line-height: 1.12rem;
      padding: 1rem 0.21rem;
      border-bottom: 1px solid #eeeeee;
      text-align: left;
      &:last-child{
        border-bottom: 0;
      }
    }
  }
  .talk_word_btn{
    display: flex;
    margin-top: 1rem;
    p{
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      font-size: 0.75rem;
      font-weight: 300;
      color: #030303;
    }
    i{
      width: 0.03rem;
      height: 0.85rem;
      background: #EFEFEF;
      display: inline-block;
    }
    img{
      width: 0.91rem;
      height: 0.91rem;
      margin-right: 0.29rem;
    }
  }
}
</style>