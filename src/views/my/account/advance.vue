<template>
  <van-nav-bar title="提现" left-arrow @click-left="leftBack"/>
  <div class="advance">
    <van-form @submit="submitAdvance">
      <div class="advance_amount">
        <h5>提现金额</h5>
        <div>
          <span>￥</span>
          <input v-model="state.price" type="number" />
        </div>
        <p>
          <span>可提现余额￥{{store.userInfo.account_price}}</span>
          <label @click="allAdvance">全部提现</label>
        </p>
      </div>
      <button class="advance_btn" native-type="submit">提现至支付宝</button>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import {myStore} from '@/store/my'
import { showToast } from 'vant'
import {withdrawal} from '@/api/my'

const store = myStore()
const state = reactive({
  price: 0,
  loading: false
})
const leftBack = () => history.back()
const submitAdvance = async () => {
  if(state.price < 0.1){
    showToast('提现金额不能小于0.1元')
    return
  }
  const res = await withdrawal({
    price: state.price
  })
  if(res){
    store.queryUserInfo()
  }
  showToast(res.msg)
}
const allAdvance = () => {
  state.price = store.userInfo.account_price
}
watch(() => state.price, (newVal:any, oldVal:any) => {
  if(parseFloat(newVal) < 0){
    showToast('提现金额不能为负数')
    return
  }
  if(parseFloat(oldVal) > 50000){
    showToast('每次提现金额不能超过50000')
    return
  }
  if (newVal) {
    newVal = newVal.toString()
    let index = newVal.indexOf('.')
    if (index > 0 && newVal.length - index > 3) {
      state.price = parseFloat(oldVal)
      return
    }
  }
})
</script>


<style lang="less" scoped>
:deep(.van-nav-bar__content){
  background: #FF8E00;
}
:deep(.van-nav-bar__title){
  color: #ffffff;
}
:deep(.van-icon-arrow-left:before){
  color: #ffffff;
}
.van-hairline--bottom:after{
  border: 0;
}
.advance{
  background: #f9f9f9;
  height: calc(100vh - 46px - 1.17rem);
  padding: 1.17rem 0.64rem 0;
  .advance_amount{
    background: #FFFFFF;
    border-radius: 0.27rem;
    padding: 1.31rem 0.72rem 0;
    h5{
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 400;
      color: #999999;
      margin-bottom: 2.43rem;
    }
    div{
      font-size: 1.28rem;
      line-height: 1.28rem;
      font-weight: 400;
      color: #333333;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid #eeeeee;
    }
    p{
      display: flex;
      justify-content: space-between;
      padding: 0.93rem 0;
      span{
        color: #999999;
      }
      label{
        color: #FF8E00;
      }
    }
  }
  .advance_btn{
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #FFA400, #FF8900);
    border: 0;
    border-radius: 0.27rem;
    font-size: 0.8rem;
    color: #FFFFFF;
    text-align: center;
    width: calc(100vw - 1.28rem);
    margin-top: 1.33rem;
  }
}
</style>