<template>
  <div class="my_page">
    <van-nav-bar
      title="我的"
    >
      <template #right>
        <van-icon name="setting-o" @click="gotoPage('/my/set')" />
      </template>
    </van-nav-bar>
    
    <div class="my_info">
      <img src="@/assets/img/icon/icon-message.png" />
      <div>
        <h3>前端<span></span></h3>
        <p>IT企业人才</p>
      </div>
      <i></i>
    </div>

    <div class="my_type">
      <router-link to="/my/collect">
        <img src="@/assets/img/my/icon-my-collection.png" />
        <span>我的收藏</span>
      </router-link>
      <router-link to="/my/resume">
        <img src="@/assets/img/my/icon-my-collection.png" />
        <span>我的简历</span>
      </router-link>
    </div>

    <!-- <div class="my_contract">
      <div class="my_title">
        <h3>我的合约</h3>
        <span>查看全部合约</span>
      </div>
      <div class="my_contract_cur">
        <span>待签约</span>
        <span>履约中</span>
        <span>已完成</span>
        <span>已取消</span>
      </div>
    </div> -->

    <!-- <div class="my_common">
      <div class="my_title">
        <h3>常用功能</h3>
      </div>
      <div class="my_item">
        <img src="@/assets/img/my/icon-real-name-auth.png" />
        <label>实名认证</label>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="my_item">
        <img src="@/assets/img/my/icon-account-manager.png" />
        <label>专属客户经理</label>
        <span><img src="@/assets/img/icon/icon-message.png" />无忧经理<van-icon name="arrow" /></span>
      </div>
    </div> -->

    <!-- <div class="my_common">
      <div class="my_item">
        <img src="@/assets/img/my/icon-feedback.png" />
        <label>意见反馈</label>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="my_item">
        <img src="@/assets/img/my/icon-about.png" />
        <label>关于我们</label>
        <span><van-icon name="arrow" /></span>
      </div>
    </div> -->

    <!-- <div class="my_common">
      <div class="my_item">
        <img src="@/assets/img/my/icon-feedback.png" />
        <label>意见反馈</label>
        <span><van-icon name="arrow" /></span>
      </div>
      <div class="my_item">
        <img src="@/assets/img/my/icon-switch-role.png" />
        <label>切换身份</label>
        <span class="col-9">当前为IT企业人才身份<van-icon name="arrow" /></span>
      </div>
    </div> -->
  </div>
  <FooterTabbar></FooterTabbar>
</template>

<script setup lang="ts">
import FooterTabbar from '@/components/FooterTabbar.vue'

const router = useRouter()
const gotoPage = (path:any) => {
  router.push(path)
}
</script>

<style lang="less" scoped>
.my_page{
  height: calc(100vh - 3rem);
  padding: 0 0.77rem 3rem;
  background: #FBFBFB url(@/assets/img/my/top-background.png) center -0.8rem no-repeat;
  background-size: contain;
  overflow: auto;
  .my_info{
    display: flex;
    align-items: center;
    margin: 0.8rem 0 0.93rem;
    position: relative;
    right: -0.77rem;
    img{
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      margin-right: 0.85rem;
    }
    div{
      h3{
        font-size: 0.96rem;
        line-height: 0.96rem;
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom: 0.48rem;
        span{
          width: 0.56rem;
          height: 0.56rem;
          background: url(@/assets/img/my/icon-edit.png) no-repeat;
          background-size: 100%;
          margin-left: 0.59rem;
          display: inline-block;
        }
      }
      p{
        font-size: 0.69rem;
        line-height: 0.69rem;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    i{
      width: 4.91rem;
      height: 1.49rem;
      background: url(@/assets/img/my/icon-my-account.png) no-repeat;
      background-size: 100%;
      position: absolute;
      right: 0;
    }
  }
  .my_type{
    display: flex;
    align-items: center;
    height: 3.31rem;
    background: #FFFFFF;
    box-shadow: 0rem 0rem 1rem 0rem rgba(49,57,73,0.09);
    border-radius: 0.27rem;
    margin-bottom: 0.53rem;
    a{
      display: flex;
      align-items: center;
      margin-left: 1.92rem;
      img{
        width: 2.24rem;
        height: 2.24rem;
        margin-right: 0.51rem;
      }
      span{
        font-size: 0.69rem;
        line-height: 0.69rem;
        font-weight: 400;
        color: #666666;
      }
    }
    
  }
  .my_contract{
    .my_title{
      h3{

      }
      span{

      }
    }
    .my_contract_cur{
      span{

      }
    }
  }
  .my_common{
    .my_title{

    }
    .my_item{
      img{

      }
      label{

      }
      span{

      }
    }
  }
}
</style>