<template>
  <div>
    <!-- 三级联动全局组件：三级已经注册为全局组件，不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor 
    v-for="floor in floorList"
    :key="floor.id" 
    :list="floor"
    />
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  name: "",
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
  mounted() {
    //派发actions
    this.$store.dispatch("getFloorList");

  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>