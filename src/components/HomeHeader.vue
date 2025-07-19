<script setup>
const headerItems = [
  {
    name: "cameraIcon",
    icon: "src/assets/icons/headerIcons/CameraIcon.svg",
  },
  {
    name: "InstagramLogo",
    icon: "src/assets/icons/headerIcons/InstagramLogo.svg",
  },
  {
    name: "IGTV-Icon",
    icon: "src/assets/icons/headerIcons/IGTV.svg",
  },
  {
    name: "messangerIcon",
    icon: "src/assets/icons/headerIcons/Messanger.svg",
  },
];
</script>

<template>
  <div class="homeHeader">
    <button
      :class="item.name + 'Btn'"
      v-for="(item, index) in headerItems"
      :key="index"
    >
      <img :class="item.name + 'Image'" :src="item.icon" :alt="item.name" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.homeHeader {
  width: 100%;
  height: 44px;
  padding: 0 15px 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;

  .InstagramLogoBtn {
    margin: 0 auto;
  }
}
</style>
