<template>
  <div class="account_info">
    <p>
      <label>账户余额（无忧币）
        <van-icon @click="gotoPage('/my/account/coinExplain')" name="question-o" />
      </label>
      <span @click="gotoPage('/my/account/advance')">
        提现
        <van-icon name="arrow" />
      </span>
    </p>
    <h3>{{mStore.userInfo.account_price}}</h3>
  </div>
</template>

<script setup lang="ts">
import { myStore } from '@/store/my'

const mStore = myStore()
const router = useRouter()
if(!mStore.userInfo.user_name) mStore.queryUserInfo()

const gotoPage = (path:any) => {
  router.push(path)
}
</script>

<style lang="less" scoped>
.account_info{
  background: #FF8E00;
  width: 100%;
  p{
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 400;
    color: #FFFFFF;
    padding: 1rem 0.67rem 3.57rem;
  }
  h3{
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: #FFFFFF;
    padding-bottom: 2.13rem;
  }
}
</style>