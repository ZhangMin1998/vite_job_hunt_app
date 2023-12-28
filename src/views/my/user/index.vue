<template>
  <van-nav-bar
    title="个人信息"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="user_page">
    <van-form @submit="setUserModify">
      <div class="user_pic">
        <van-uploader
          v-model="state.fileList" accept=".jpg,.png" 
          :after-read="afterRead" 
          :before-delete ="deleteFile"
          max-count="1"
        />
      </div>
      <div class="user_item">
        <h5>姓名</h5>
        <van-field v-model="state.userName" label="" placeholder="请输入您的姓名" />
      </div>
      <div class="user_item">
        <h5>性别</h5>
        <van-field
          v-model="state.sex"
          label="" 
          placeholder="请选择您的性别"
          readonly
          is-link
          @click="state.showSex = true"
        />
        <van-action-sheet
          v-model:show="state.showSex"
          :actions="sexList"
          cancel-text="取消"
          close-on-click-action
          @select="sexSelect"
        />
      </div>
      <div class="user_item">
        <h5>出生日期</h5>
        <van-field 
          v-model="state.birthday" 
          label="" 
          placeholder="请选择您的出生日期"
          readonly
          is-link
          @click="state.showBirthday = true"
         />
         <van-action-sheet v-model:show="state.showBirthday">
          <van-date-picker
            type="year-month"
            title="选择年月"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            @confirm="birthdayConfirm"
            @cancel="state.showBirthday = false"
          />
        </van-action-sheet>
      </div>
      <div class="user_item">
        <h5>参加工作时间</h5>
        <van-field
          v-model="state.workTime"
          label=""
          placeholder="请选择您的工作时间"
          readonly
          is-link
          @click="state.showWorkTime = true"
        />
        <van-action-sheet v-model:show="state.showWorkTime">
          <van-date-picker
            type="year-month"
            title="选择年月"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            @confirm="workTimeConfirm"
            @cancel="state.showWorkTime = false"
          />
        </van-action-sheet>
      </div>
      <div class="user_item">
        <h5>所在城市</h5>
        <van-field
          v-model="state.city"
          label=""
          placeholder="请选择您的城市"
          readonly
          is-link
          @click="state.showCity = true"
        />
        <van-action-sheet v-model:show="state.showCity">
          <van-picker
            :columns="tsStore.areaList"
            @confirm="cityConfirm"
            @cancel="state.showCity = false"
          />
        </van-action-sheet>
      </div>
      <button class="wy_confirm_btn" native-type="submit">完成</button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { taskStore } from '@/store/task'
import { myStore } from '@/store/my'
import { common } from '@/utils/common'
// import { showToast } from 'vant'
const tsStore = taskStore()
const mStore = myStore()

const state = reactive({
  loading: false,
  fileList: [],
  userName: '',
  sex: '',
  birthday: '',
  workTime: '',
  city: '',
  area: '',
  showSex: false,
  showBirthday: false,
  showWorkTime: false,
  showCity: false,
  minDate: new Date(1970,1,1),
  maxDate: new Date()
})
const sexList = [
  { name: '男'},
  { name: '女'}
]

const setInfo = () => {
  state.userName = mStore.userInfo.user_name;
  state.sex = common.sex(mStore.userInfo.sex)
  state.birthday = mStore.userInfo.birthday
  state.workTime = mStore.userInfo.work_time
  state.city = mStore.userInfo.city
  state.area = mStore.userInfo.area
  if(mStore.userInfo.it_head){
    state.fileList = [{
      url: mStore.userInfo.it_head
    }]
  }
}
if(!tsStore.areaList.length) tsStore.getCityList()
if(!mStore.userInfo.user_name) {
  (async function(){
    await mStore.queryUserInfo()
    setInfo()
  })()
}else{
  setInfo()
}

const onClickLeft = () => history.back()
const afterRead = async (file:any) => {
  console.log(file)
}
const deleteFile = () => {

}
const setUserModify = async() => {

}
const sexSelect = (value:any) => {
  state.sex = value.name
}
const birthdayConfirm = (value:any) => {
  state.birthday = value.getFullYear() + '-' + (value.getMonth()+1)
  state.showBirthday = false
}
const workTimeConfirm = (value:any) => {
  state.workTime = value.getFullYear() + '-' + (value.getMonth()+1)
  state.showWorkTime = false
}
const cityConfirm = (value:any) => {
  state.city = value[0].text
  state.area = value[1].text
  state.showCity = false
}
</script>

<style lang="less" scoped>
:deep(.van-uploader__upload){
  margin: 0;
}
:deep(.van-image__img){
  border-radius: 50%;
}
.van-cell{
  padding: 0.8rem 0 0.6rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 100;
  color: #999;
}
.user_page{
  margin: 0 0.6rem;
  .user_pic{
    text-align: center;
    padding: 0.67rem;
    margin-bottom: 1.47rem;
    border-bottom: 1px solid #f3f3f3;
    img{
      width: 3.7rem;
      height: 3.7rem;
      border-radius: 50%;
    }
  }
  .user_item{
    margin-bottom: 1.47rem;
    border-bottom: 1px solid #f3f3f3;
    h5{
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 300;
      color: #666;
    }
  }
  .wy_confirm_btn{
    font-size: 0.8rem;
    color: #FFFFFF;
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #FEA829, #FE8F27);
    border-radius: 0.27rem;
    border: 0;
    width: calc(100vw - 1.2rem);
    margin: 0 0.6rem 0.6rem;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>