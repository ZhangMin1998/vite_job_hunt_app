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
      <strong></strong>
      <router-link to="/my/resume">
        <img src="@/assets/img/my/icon-my-collection.png" />
        <span>我的简历</span>
      </router-link>
    </div>

    <div class="my_contract">
      <div class="my_title">
        <h3>我的合约</h3>
        <span>
          查看全部合约
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="my_contract_cur">
        <span><img src="@/assets/img/my/contract-be-signed.png" />待签约</span>
        <span><img src="@/assets/img/my/contract-in-performance.png" />履约中</span>
        <span><img src="@/assets/img/my/contract-completed.png" />已完成</span>
        <span><img src="@/assets/img/my/contract-canceled.png" />已取消</span>
      </div>
    </div>

    <div class="my_common">
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
    </div>

    <div class="my_common">
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
    </div>

    <div class="my_common">
      <!-- <div class="my_item">
        <img src="@/assets/img/my/icon-feedback.png" />
        <label>意见反馈</label>
        <span><van-icon name="arrow" /></span>
      </div> -->
      <div class="my_item">
        <img src="@/assets/img/my/icon-switch-role.png" />
        <label>切换身份</label>
        <span class="col-9">当前为IT企业人才身份<van-icon name="arrow" /></span>
      </div>
    </div>
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
:deep(.van-nav-bar){
  background: none;
}
:deep(.van-nav-bar__title){
  color: #ffffff;
  font-size:0.96rem;
}
:deep(.van-nav-bar .van-icon){
  font-size: 1.12rem;
  color: #ffffff;
}
:deep(.van-hairline--bottom:after) {
  border: 0;
}
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
    strong{
      width: 0.03rem;
      height: 1.95rem;
      background: #EDEDED;
      margin-left: 1.92rem;
    }
  }
  .my_contract{
    height: 7.9rem;
    background: #FFFFFF;
    border-radius: 0.27rem;
    margin-bottom: 0.59rem;
    .my_title{
      height: 2.69rem;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      padding: 0 0.8rem;
      h3{
        font-size: 0.8rem;
        line-height: 0.8rem;
        font-weight: 400;
        color: #333333;
      }
      span{
        flex: 1;
        text-align: right;
        font-size: 0.64rem;
        color: #464646;
      }
    }
    .my_contract_cur{
      height: 5.17rem;
      display: flex;
      align-items: center;
      vertical-align: center;
      span{
        flex: 1;
        text-align: center;
        font-size: 0.69rem;
        color: #464646;
        img{
          width: 1.39rem;
          height: 1.39rem;
          display: block;
          margin: 0 auto 0.59rem;
        }
      }
    }
  }
  .my_common{
    background: #FFFFFF;
    border-radius: 0.27rem;
    margin-bottom: 0.59rem;
    .my_title{
      height: 2.69rem;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      padding: 0 0.8rem;
      h3{
        font-size: 0.8rem;
        line-height: 0.8rem;
        font-weight: 400;
        color: #333333;
        flex: 1;
      }
    }
    .my_item{
      height: 2.67rem;
      background-color: #fff;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      padding: 0 0.4rem 0 0rem;
      margin-left: 0.69rem;
      font-size: 0.69rem;
      color: #464646;
      &:last-child{
        border-bottom: 0;
      }
      img{
        width: 1.12rem;
        height: 1.12rem;
        margin-right: 0.85rem;
      }
      label{
        flex: 1;
      }
      span{
        display: flex;
        align-items: center;
        text-align: right;
        img{
          width: 1.28rem;
          height: 1.28rem;
          border-radius: 50%;
          margin-right: 0.32rem;
        }
      }
    }
  }
}
</style>