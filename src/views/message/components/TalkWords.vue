<template>
  <div class="talk_word">
    <dl>
      <dt>
        66666
      </dt>
    </dl>
    <div class="talk_word_btn">
      <p>
        <img src="@/assets/img/icon/icon-add.png" alt="">
        添加
      </p>
      <i></i>
      <p>
        <img src="@/assets/img/icon/icon-file.png" alt="">
        管理
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// import { getChatMessageWordsList } from '@/api/message'

const state = reactive({
  list: [],
  loading: false
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