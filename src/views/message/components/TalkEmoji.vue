<template>
  <div class="talk_emoji">
    <span v-for="(item, index) in list" :key="index" @click="emojiChange(item)">
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
  const list = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','😇','😐','😑','😶','😏']
  const {emojiChange} = inject('popup')
</script>

<style lang="less" scoped>
.talk_emoji{
  height: 8rem;
  margin-top: 0.64rem;
  span{
    font-size: 1.4rem;
    width: 14.28%;
    display: inline-block;
    text-align: center;
    margin-bottom: 0.32rem;
  }
}
</style>