<template>
  <TaskList :taskList="taskList"></TaskList>
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FooterTabbar from '@/components/FooterTabbar.vue'
import TaskList from '@/components/list/TaskList.vue'

const taskList = reactive([
  {id:1},{id:2},{id:3},{id:4}
])
</script>

<style lang="less" scoped>
// body{
//   background-color: #f5f5f5;
// }
</style>