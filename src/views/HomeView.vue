<script setup>
import HomeHeader from "./../components/HomeHeader.vue";
import StoriesBar from "../components/StoriesBar.vue";
import ShakaPlayer from "../components/ShakaPlayer.vue";
</script>

<template>
  <div class="homeView">
    <HomeHeader></HomeHeader>
    <StoriesBar></StoriesBar>
    <ShakaPlayer></ShakaPlayer>
  </div>
</template>

<style lang="scss" scoped>
.homeView {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
