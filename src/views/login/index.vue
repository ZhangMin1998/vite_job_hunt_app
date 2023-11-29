<template>
  <div class="login_page">
    <van-icon class="icon_left" name="arrow-left"/>
    <div class="login_form">
      <h3>验证码登录</h3>
      <div class="login_form_item">
        <i class="icon_phone"></i>
        <input placeholder="请输入手机号" type="text" v-model="state.accounts"/>
      </div>
      <div class="login_form_item">
        <i class="icon_code"></i>
        <input placeholder="请输入验证码" type="text" v-model="state.code"/>
        <span @click="getCodeChange">{{ state.codeText }}</span>
      </div>
      <van-button type="primary" block>登录</van-button>
      <div class="login_form_label">
        <van-checkbox v-model="state.checked">我已阅读</van-checkbox>
        <router-link to="/login/serviceAgree">《IT企业平台服务协议》</router-link>和
        <router-link to="/login/privacyPolicy">《隐私政策》</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { getCode, login } from '@/api/user'
// import { userStore } from '@/store/user'
// import { Toast } from 'vant'

// const store = userStore()
// const router = useRouter()
const state = reactive({
  accounts: '',
  code: '',
  checked: true,
  codeText: '获取验证码',
  time: 60,
  interTimeCode: 0
})

const getCodeChange = async () => {
  if (state.interTimeCode) return
  const res = await getCode({
    accounts: state.accounts
  })
  if (res) {
    // 验证码倒计时开始
    state.interTimeCode = setInterval(() => {
      state.time--
      if (state.time <= 0) {
        clearInterval(state.interTimeCode)
        state.time = 60
        state.codeText = '获取验证码'
      } else {
        state.codeText = `重新发送${state.time}s`
      }
    }, 1000)
    state.code = (res as any).code
  }
}
</script>

<style lang="less" scoped>
.login_page{
  .icon_left{
    font-size: 0.8rem;
    margin: 0.67rem 0 0 0.67rem;
  }
  .login_form{
    padding: 0 1.07rem;
    h3{
      font-size: 1.39rem;
      line-height: 1.39rem;
      font-weight: 400;
      color: #333333;
      margin-top: 2.35rem;
      margin-bottom: 4rem;
      padding-left: 0.3rem;
    }
    .login_form_item{
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      font-weight: 300;
      color: #9FA7AD;
      margin: 0 0.18rem 2rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid #E7E7E7;
      .icon_phone{
        background: url('@/assets/img/icon/icon-phone.png') no-repeat;
        background-size: 100%;
        width: 1.01rem;
        height: 1.01rem;
      }
      .icon_code{
        background: url('@/assets/img/icon/icon-code.png') no-repeat;
        background-size: 100%;
        width: 1.01rem;
        height: 1.01rem;
      }
      input{
        flex: 1;
        margin-left: 0.48rem;
      }
      span{
        font-size: 0.75rem;
        font-weight: 300;
        color: #FE9527;
        border-left: 1px solid #FE9527;
        line-height: 0.75rem;
        padding-left: 0.56rem;
      }
    }
    .login_form_label{
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 1.5rem;
      left: 0;
      width: 100%;
    }
  }
}
</style>