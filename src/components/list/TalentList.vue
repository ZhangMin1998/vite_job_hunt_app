<template>
  <div class="talent_item" v-for="(item, index) in talentList" :key="index"  @click="gotoDetail((item as any).resume_id || (item as any).id)">

    <div class="talent_item_top">
      <div class="talent_item_pic">
        <img src="@/assets/img/icon/icon-message.png">
      </div>
      <div class="talent_item_cont">
        <h3>
          余承东
          <span>驻场</span>
          <span>远程</span>
          <span>全职</span>
        </h3>
        <p>前端工程师 | 5年 | 本科 | 25岁</p>
        <dl>
          <dt>Vue</dt>
          <dt>React</dt>
          <dt>uniapp</dt>
        </dl>
      </div>
    </div>
    
    <div class="talent_item_bottom">
      <label>已做3个项目</label>
      <span>
        <van-icon name="location-o" />
        深圳
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps({
  talentList: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()
const gotoDetail = (id: number) => {
  router.push('/task/details/' + id)
}

</script>

<style lang="less" scoped>
.talent_item{
  margin: 0 0 0.53rem;
  padding: 0.77rem 0.64rem 0;
  background: #FFFFFF;
  border-radius: 0.53rem;
  font-size: 0.69rem;
  .talent_item_top{
    display: flex;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #f5f5f5;
    .talent_item_pic{
      width: 4rem;
      height: 4rem;
      border-radius: 0.27rem;
      overflow: hidden;
      margin-right: 0.85rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .talent_item_cont{
      h3{
        font-size: 0.91rem;
        font-weight: 400;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 0.64rem;
        span{
          width: 1.97rem;
          height: 0.85rem;
          line-height: 0.85rem;
          border-radius: 0.53rem;
          font-size: 0.59rem;
          font-weight: 300;
          // color: #FFFFFF;
          margin-left: 0.2rem;
          text-align: center;
          padding: 0.1rem 0;
          &:nth-child(1){
            background: linear-gradient(90deg, #FEA829, #FE8F27);
          }
          &:nth-child(2){
            background: linear-gradient(90deg, #55EDB9, #52DEA4);
          }
          &:nth-child(3){
            background: linear-gradient(90deg, #42C3E8, #249AF6);
          }
        }
      }
      p{
        font-size: 0.69rem;
        line-height: 0.69rem;
        font-weight: 100;
        color: #666666;
        margin-bottom: 0.56rem;
      }
      dl{
        display: flex;
        flex-flow: wrap;
        dt{
          padding: 0.3rem 0.5rem;
          font-size: 0.59rem;
          line-height: 0.59rem;
          font-weight: 300;
          color: #666666;
          margin-right: 0.27rem;
          background: #F6F7F8;
          border-radius: 0.16rem;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  .talent_item_bottom{
    display: flex;
    padding: 0.72rem 0 0.72rem;
    label{
      flex: 1;
    }
    span{
      text-align: right;
    }
    i{
      font-size: 0.8rem;
      font-weight: 600;
      margin-right: 0.1rem;
    }
  }
}
</style>