<template>
  <van-nav-bar title="预览简历" left-arrow @click-left="leftBack"/>
  <div class="resume">
    <PersonInfo page="preview" :item="store.resumeInfo"></PersonInfo>
    <PersonAdvantage page="preview"></PersonAdvantage>
    <PositionType page="preview"></PositionType>
    <ExcellentSkill page="preview"></ExcellentSkill>
    <WorkExperience page="preview"></WorkExperience>
    <ProjectExperience page="preview"></ProjectExperience>
    <EducationalExperience page="preview"></EducationalExperience>
  </div>
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
store.getResumeDetail()
store.getResumeDict()
const leftBack = () => history.back()
</script>

<style lang="less" scoped>
.resume{
  height: calc(100vh - 46px);
  overflow: auto;
}
</style>