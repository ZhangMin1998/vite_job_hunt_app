<template>
  <div class="task_item" v-for="(item, index) in taskList" :key="index"  @click="gotoDetail((item as any).task_id)">
   <!-- <div class="task_item">  -->
    <div class="task_item_top">
      <h3>H5开发</h3>
      <span>紧急</span>
    </div>
    <dl>
      <dt>
        <h5>任务预算</h5>
        <strong>￥1000</strong>
      </dt>
      <dt>
        <h5>任务周期</h5>
        <strong>90天</strong>
      </dt>
      <dt>
        <h5>服务方式</h5>
        <strong>外包驻场</strong>
      </dt>
    </dl>
    <p>
      任务要求：混合开发微信小程序，与后端对接接口，有3年以上web前端开发经验，
      熟悉Vue、React等前端主流框架，了解一门后端语言优先。
    </p>
    <div class="task_item_bottom">
      <label>深圳中软国际科技服务有限公司</label>
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
  taskList: {
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
.task_item{
  background: #FFFFFF;
  border-radius: 0.53rem;
  margin:0 0 0.53rem;
  padding: 0.88rem 0.48rem 0.75rem;
  position: relative;
  font-size: 0.69rem;
  font-weight: 100;
  color: #666666;
  .task_item_top{
    display: flex;
    h3{
      font-size: 0.91rem;
      line-height: 0.91rem;
      font-weight: 400;
      color: #333333;
      margin-bottom: 1.01rem;
    }
    span{
      position: absolute;
      right: 0;
      width: 2.29rem;
      height: 1.08rem;
      line-height: 1.08rem;
      background: linear-gradient(90deg, #FEA829, #FE8F27);
      border-radius: 0.53rem 0 0 0.53rem;
      text-align: center;
      font-size: 0.59rem;
      color: #FFFFFF;
    }
  }
  .task_item_bottom{
    display: flex;
    border-top: 1px solid #f5f5f5;
    margin-top: 0.72rem;
    padding-top: 0.72rem;
    line-height: 0.69rem;
    label{
      flex: 1;
    }
    span{
      text-align: right;
    }
  }
  dl{
    display: flex;
    margin-bottom: 0.8rem;
    dt{
      margin-right: 1.44rem;
      h5{
        font-size: 0.69rem;
        line-height: 0.69rem;
        margin-bottom: 0.53rem;
        font-weight: 100;
        color: #999999;
      }
      strong{
        font-size: 0.64rem;
        line-height: 0.64rem;
        display: block;
        font-weight: 500;
        color: #333333;
      }
    }
  }
  p{
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>