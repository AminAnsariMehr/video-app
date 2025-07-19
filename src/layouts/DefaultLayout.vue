<script setup>
import MenuNavBar from "../components/MenuNavBar.vue";
</script>

<template>
  <div class="default-layout">
    <div class="view-wrapper">
      <router-view></router-view>
    </div>
    <menu-nav-bar></menu-nav-bar>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .view-wrapper {
    width: 100%;
    height: calc(100% - 81px);
    overflow-y: scroll;
    scrollbar-width: none;
  }
}
</style>
