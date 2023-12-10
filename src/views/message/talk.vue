<template>
  <van-nav-bar
    :title="state.taskName"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="talk_page">
    <dl>
      <dt v-for="(item,index) in state.list" :key="index" :class="item.receive_id === receiveId ? 'active' : ''">
        <h5>{{ item.create_time }}</h5>
        <div>
          <img v-if="item.receive_id === receiveId" :src="item.senderPhoto" />
          <img v-else :src="item.receivePhoto" />
          <p>{{item.text}}</p>
        </div>
      </dt>
    </dl>
  </div>
  <div class="talk_bottom">
    <div class="talk_input">
      <span @click="worksClick">常用语</span>
      <input type="text" v-model="state.value" />
      <van-icon name="smile-o" />
      <span>发送</span>
    </div>
    <TalkWords v-if="state.worksVisible"></TalkWords>
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { getChatMessageContent } from '@/api/message'
import TalkWords from '@/views/message/components/TalkWords.vue'

const router = useRouter()
const taskId = router.currentRoute.value.params.taskId
const receiveId = router.currentRoute.value.params.userId // 接收人id  自己是发送人
const state = reactive({
  list: '',
  loading: false,
  value: '', // 输入框的值
  taskName: '', // 对话标题名称
  worksVisible: false,
})
const createSetInterval = ref(null)

const onClickLeft = () => history.back()
const queryChatMessageContent = async () => {
  const res = await getChatMessageContent({
    receive_id: receiveId,
    things_id: taskId,
    things_type: 0
  })
  if(res){
    state.list = (res as any).data
    state.taskName = res.data[0] && res.data[0].task_name || '任务'
  }else{ 
    showToast((res as any).msg)
  }
  state.loading = false
}
queryChatMessageContent()

const createInterval = () => {
  console.log(666);
  
  stopInterval()
  createSetInterval.value = setInterval(()=>{
    queryChatMessageContent()
  }, 5000) as any
}
const stopInterval = () => {
  if (createSetInterval.value) {
    clearInterval(createSetInterval.value)
    createSetInterval.value = null
  }
}
createInterval()
onBeforeUnmount(() => {
  stopInterval()
})

const worksClick = () => {
  state.worksVisible = !state.worksVisible
}
const worksChange = (value: any) => {
  state.value = value
  state.worksVisible = false
}

provide('popup', {
  worksChange
})

</script>

<style lang="less" scoped>
.talk_page{
  width: 100%;
  background: #f3f3f3;
  height: calc(100vh - 46px - 2.6rem);
  overflow: auto;
  dl{
    padding: 0.96rem 0.64rem;
    dt{
      overflow: hidden;
      h5{
        font-weight: 300;
        font-size: 0.64rem;
        line-height: 0.64rem;
        text-align: center;
        margin-bottom: 0.69rem;
      }
      div{
        display: flex;
        img{
          width: 2.14rem;
          height: 2.14rem;
          border-radius: 50%;
          margin-right: 0.64rem;
        }
        p{
          font-size: 0.75rem;
          width: 12.53rem;
          background: #FFFFFF;
          border: 1px solid #EFEFEF;
          border-radius: 0.11rem;
          padding: 0.4rem 0.69rem;
          margin-bottom: 1.47rem;
        }
      }
      &.active div{
        display: block;
      }
      &.active img{
        float: right;
        margin-right:0;
        margin-left:0.64rem;
      }
      &.active p{
        float: right;
        font-size: 0.75rem;
        font-weight: 300;
        color: #FFFFFF;
        border: 1px solid #FF9415;
        background: #FF9415;
        border-radius: 0.13rem;
        position: relative;
      }
    }
  }
}
.talk_bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  text-align: center;
  z-index: 1;
  border-top: 1px solid #eeeeee;
  .talk_input{
    display: flex;
    align-items: center;
    height: 2.6rem;
    span{
      width: 2.61rem;
      height: 1.33rem;
      line-height: 1.33rem;
      background: #FF9415;
      border-radius: 0.13rem;
      font-size: 0.64rem;
      font-weight: 100;
      text-align: center;
      color: #FFFFFF;
      margin-left: 0.59rem;
      &:last-child{
        margin: 0 0.59rem 0 0;
      }
    }
    input{
      flex: 1;
      height: 1.8rem;
      background: #FBFBFB;
      border: 1px solid #EFEFEF;
      border-radius: 0.13rem;
      padding: 0 0.5rem;
      margin: 0 0.4rem 0 0.5rem;
    }
    i{
      font-size: 1.36rem;
      margin-right: 0.4rem;
    }
  }
}
</style>