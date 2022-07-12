<template>
  <div>
    <!-- 三级联动全局组件：三级已经注册为全局组件，不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
components:{ListContainer,TodayRecommend,Rank,Like,Floor,Brand}
}
</script>

<style>

</style>