<template>
  <van-nav-bar title="技能关键词" left-arrow @click-left="closeChange"/>
  <dl class="skill-list">
    <dt
      @click="setSysSkill(index)" 
      v-for="(item,index) in state.sysSkill" 
      :key="index" 
      :class="item.active ? 'active' : ''">
      {{ item.title }}
    </dt>
    <dt
      @click="setSkill(index)"
      v-for="(item,index) in state.skillList" 
      :key="index" 
      :class="item.active ? 'active' : ''"
    >
      {{item.title}}
      <van-icon @click.stop="clearSkill(index)" name="close" />
    </dt>
    <dt @click="state.show = true">自定义+</dt>
  </dl>
  <van-dialog 
    v-model:show="state.show" 
    title="自定义标签" 
    show-cancel-button 
    @confirm="skillChange"
    @cancel="state.show=false"
  >
    <van-field
      class="skill-field" 
      v-model="state.value" 
      label="" 
      placeholder="请输入标签" 
      maxlength="10" 
    />
  </van-dialog>
  <button class="wy-submit" @click="submit">保存</button>
</template>

<script setup lang="ts">
import { myStore } from '@/store/my'
import { resumeSkill } from '@/api/my'
import { showToast } from 'vant'

const {closeChange} = inject('popup')

const store = myStore()
const state = reactive({
  value: [],
  show: false,
  skillList: [],
  sysSkill: []
})

const setInfo = () => {
  if(store.resumeInfo.sys_skill_ids) {
    var arr = []
    var skill = store.resumeInfo.sys_skill_ids.split(',')
    for(var i = 0; i < store.sysSkillList.length; i++){
      var flag = false
      for(var j = 0; j < skill.length; j++){
        if(skill[j] === store.sysSkillList[i].title){
          flag = true
          break;
        }
      }
      arr.push({
        title: store.sysSkillList[i].title,
        active: flag
      })
    }
    state.sysSkill = arr
  }
  if(store.resumeInfo.skill_ids){
    var arr = []
    var skill = store.resumeInfo.skill_ids.split(',')
    for(var i = 0;i<skill.length;i++){
      arr.push({
        title: skill[i],
        active: true
      })
    }
    state.skillList = arr
  }
}
const submit = async() => {

}
const setSysSkill = (index) => {
  state.sysSkill[index].active = !state.sysSkill[index].active
}
const setSkill = (index) => {
  state.skillList[index].active = !state.skillList[index].active
}
const skillChange = () => {
  state.skillList.push({
    title: state.value,
    acitve: false
  })
  state.value = ''
  state.show = false
}
const clearSkill = (index) => {
  state.skillList.splice(index,1)
}
if(store.sysSkillList.length === 0){
  (async function(){
    await store.getLabelsSkill()
    setInfo()
  })()
} else {
  setInfo()
}
</script>

<style lang="less" scoped>
.skill-list{
  padding: 1.31rem 1.09rem;
  dt{
    min-width: 4.5rem;
    height: 1.17rem;
    line-height: 1.17rem;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 0.27rem;
    font-size: 0.64rem;
    font-weight: 400;
    color: #333333;
    text-align: center;
    display: inline-block;
    margin: 0 0.64rem 0.8rem 0;
    &.active{
      border: 1px solid #FF8E00;
      color: #FF8E00;
    }
    i{
      margin-left: 0.2rem;
    }
  }
}
</style>