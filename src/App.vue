<script setup>
import { RouterView } from "vue-router";
import MobileButton from "./components/MobileButton.vue";
import MobileHeader from "./components/MobileHeader.vue";
</script>

<template>
  <div class="container">
    <div class="mobileFrame">
      <MobileHeader></MobileHeader>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobileFrame {
  width: calc(375px + 12px);
  height: calc(812px + 12px);
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 8px solid #000000;
}
</style>
