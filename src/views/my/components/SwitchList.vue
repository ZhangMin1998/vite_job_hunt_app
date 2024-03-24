<template>
  <div class="swith-item">
    <div class="item-cont">
      <img src="@/assets/img/my/icon-personnel.png" />
      <div>
        <h5>IT企业人才</h5>
        <p>未申请</p>
      </div>
      <img class="item-back" src="@/assets/img/my/personnel-bg.png" />
      <strong>当前身份</strong>
    </div>
  </div>

  <div class="swith-item">
    <div class="item-cont">
      <img src="@/assets/img/my/icon-controller.png" />
      <div>
        <h5>管理端</h5>
        <p>未申请</p>
      </div>
      <img class="item-back" src="@/assets/img/my/controller-bg.png" />
      <strong>当前身份</strong>
    </div>
  </div>

  <div class="swith-item">
    <div class="item-cont">
      <img src="@/assets/img/my/icon-enterprise.png" />
      <div>
        <h5>企业端</h5>
        <p>未申请</p>
      </div>
      <img class="item-back" src="@/assets/img/my/enterprise-bg.png" />
      <strong>当前身份</strong>
    </div>
  </div>
</template>

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