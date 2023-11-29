<template>
  <MessageList :messageList="messageList"></MessageList>
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FooterTabbar from '@/components/FooterTabbar.vue'
import MessageList from '@/components/list/MessageList.vue'

const messageList = reactive([
  {id:1},{id:2},{id:3},{id:4}
])
</script>

<style lang="less" scoped>
// body{
//   background-color: #fff;
// }
</style>