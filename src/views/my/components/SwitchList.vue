<template>
  <div class="swith-item" @click="setRole(1)">
    <div class="item-cont">
      <img src="@/assets/img/my/icon-personnel.png" />
      <div>
        <h5>IT企业人才</h5>
        <p v-if="store.userInfo.it_enterprise !== 1">未申请</p>
      </div>
      <img class="item-back" src="@/assets/img/my/personnel-bg.png" />
      <strong v-if="store.userInfo.role === 1">当前身份</strong>
    </div>
  </div>

  <div class="swith-item" @click="setRole(2)">
    <div class="item-cont">
      <img src="@/assets/img/my/icon-controller.png" />
      <div>
        <h5>管理端</h5>
        <p v-if="store.userInfo.it_enterprise !== 1">未申请</p>
      </div>
      <img class="item-back" src="@/assets/img/my/controller-bg.png" />
      <strong v-if="store.userInfo.role === 2">当前身份</strong>
    </div>
  </div>

  <div class="swith-item" @click="setRole(3)">
    <div class="item-cont">
      <img src="@/assets/img/my/icon-enterprise.png" />
      <div>
        <h5>企业端</h5>
        <p v-if="store.userInfo.it_enterprise !== 1">未申请</p>
      </div>
      <img class="item-back" src="@/assets/img/my/enterprise-bg.png" />
      <strong  v-if="store.userInfo.role === 3">当前身份</strong>
    </div>
  </div>

  <van-popup
    v-model:show="state.show"
    duration="0.1"
    :style="{ width: '13.07rem',height: '15.44rem',borderRadius:'0.53rem' }"
  >
    <IdentityPopup
      @back="state.show = false"
      :role="state.switchRole"
    ></IdentityPopup>
  </van-popup>
</template>

<script setup lang="ts">
import { myStore } from '@/store/my'
import {addRole} from '@/api/my'
import { showToast } from 'vant'
import IdentityPopup from '@/views/my/components/IdentityPopup.vue'

const store = myStore()
const state = {
  role: store.userInfo.role,
  switchRole: store.userInfo.role,
  show: false
}

if (!Object.keys(store.userInfo).length) {
  store.queryUserInfo()
}

const setRole = async (role) => {
  if (state.role === role) return
  let bool = false
  if (role === 1 && store.userInfo.it_enterprise === 1){
    bool = true
  }
  if(role === 2 && store.userInfo.manage === 1){
    bool = true
  }
  if(role === 3 && store.userInfo.enterprise === 1){
    bool = true
  }
  if (bool) {
    const res = await addRole({
      "role": role
    })
    if (res) {
      showToast('身份切换成功')
      store.queryUserInfo()
    }
  } else {
    state.switchRole = role
    state.show = true
  }
}
</script>

<style lang="less" scoped>
.swith-item{
  width: 100%;
  height: 4.28rem;
  background: #FFFFFF;
  border-radius: 0.27rem;
  margin-bottom: 0.8rem;
  position: relative;
  display: flex;
  .item-cont{
    display: flex;
    align-items: center;
  }
  h5{
    font-size: 0.96rem;
    line-height: 0.96rem;
    font-weight: 500;
    color: #000000;
  }
  p{
    color: #999999;
    font-size: 0.8rem;
    margin-top: 0.72rem;
  }
  img{
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 0.69rem;
    margin-left: 0.48rem;
  }
  strong{
    position: absolute;
    right: 0px;
    top: 0px;
    width: 3.44rem;
    height: 0.9rem;
    background: linear-gradient(90deg, #FEA829, #FE8F27);
    border-radius: 0rem 0.3rem 0rem 0.3rem;
    font-size: 0.64rem;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
  }
  .item-back{
    position: absolute;
    right: 0.24rem;
    bottom: 0.13rem;
    width: 2.51rem;
    height: 2.77rem;
  }
}
</style>