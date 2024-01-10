<template>
  <van-nav-bar title="我的简历" left-arrow @click-left="leftBack"/>
  <div class="resume">
    <PersonInfo :item="store.resumeInfo"></PersonInfo>
    <PersonAdvantage></PersonAdvantage>
    <PositionType></PositionType>
    <ExcellentSkill></ExcellentSkill>
    <WorkExperience></WorkExperience>
    <ProjectExperience></ProjectExperience>
    <EducationalExperience></EducationalExperience>
  </div>
  <button class="resume_btn">预览简历</button>
</template>

<script setup lang="ts">
import {myStore} from '@/store/my'
import PersonInfo from './components/PersonInfo.vue'
import PersonAdvantage from './components/PersonAdvantage.vue'
import PositionType from './components/PositionType.vue'
import ExcellentSkill from './components/ExcellentSkill.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectExperience from './components/ProjectExperience.vue'
import EducationalExperience from './components/EducationExperience.vue'
  
const store = myStore()
const leftBack = () => history.back()
</script>

<style lang="less" scoped>
.resume{
  height: calc(100vh - 46px - 3rem);
  overflow: auto;
}
.resume_btn{
  width: calc(100vw - 1.28rem);
  height: 2.35rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #FFFFFF;
  background: linear-gradient(90deg, #FEA829, #FE8F27);
  border-radius: 0.27rem;
  border: 0;
  margin: 0 0.64rem 0.64rem;
  position: fixed;
  bottom: 0;
  left:0;
}
</style>