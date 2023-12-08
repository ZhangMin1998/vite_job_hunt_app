<template>
  <MessageList :messageList="store.systemNewMessage" :type="'system'"></MessageList>
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import FooterTabbar from '@/components/FooterTabbar.vue'
import MessageList from '@/components/list/MessageList.vue'
// import { userStore } from '@/store/user'
import { messageStore } from '@/store/message'

// const uStore = userStore()
const store = messageStore()
store.getSystemMessageList()
</script>

<style lang="less" scoped>
// body{
//   background-color: #fff;
// }
</style>