<script setup>
import NavMenu from './../components/Menu.vue'
</script>

<template>
  <div class="default-layout">
    <div class="view-wrapper">
      <router-view></router-view>
    </div>

    <nav-menu></nav-menu>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .view-wrapper {
    width: 100%;
    background: yellow;
    height: 4000px;
  }
}
</style>
