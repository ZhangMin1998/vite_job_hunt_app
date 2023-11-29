<template>
  <dl class="message_item" v-for="(item, index) in messageList" :key="index"  @click="gotoDetail(item as any)">
    <dd>
      <img src="@/assets/img/icon/icon-message.png">
      <span></span>
    </dd>
    <dt>
      <h3>
        系统通知
        <span>6分钟前</span>
      </h3>
      <p>你好，我们这边在招聘web前端开发工程师职位，看了你的简历觉得</p>
    </dt>
  </dl>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps({
  messageList: {
    type: Array,
    default: () => []
  },
  type: {
    type: String
  }
})

const router = useRouter()
const gotoDetail = (id: number) => {
  router.push('/contract/details/' + id)
}

</script>

<style lang="less" scoped>
.message_item{
  font-size: 0.64rem;
  color: #666666;
  padding: 0.9rem 0;
  margin: 0 0.67rem;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  dd{
    position: relative;
    margin-right: 0.56rem;
    img{
      width: 2.61rem;
      height: 2.61rem;
      border-radius: 50%;
    }
    span{
      position: absolute;
      top: 0;
      right: 0;
      width: 0.32rem;
      height: 0.32rem;
      background-color: #ff0000;
      border-radius: 50%;
    }
  }
  dt{
    flex: 1;
    h3{
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 0.43rem;
      span{
        float: right;
        color: #999999;
        font-size: 0.64rem;
        font-weight: 100;
      }
    }
    p{
      font-size: 0.69rem;
      line-height: 0.69rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>