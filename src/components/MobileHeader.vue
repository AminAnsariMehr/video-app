<script setup></script>

<template>
  <div class="mobileHeader">
    <img
      class="batteryIcon"
      src="./../assets/icons/headerIcons/Battery.svg"
      alt="BatteryIcon"
    />
    <img
      class="wifiIcon"
      src="./../assets/icons/headerIcons/Wifi.svg"
      alt="WifiIcon"
    />
    <img
      class="signalIcon"
      src="./../assets/icons/headerIcons/MobileSignal.svg"
      alt="MobileSignalIcon"
    />
    <span class="timeDisplay">9:41</span>
  </div>
</template>

<style lang="scss" scoped>
.mobileHeader {
  width: 100%;
  height: 44px;
  padding: 14px 14px 12px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 5px;

  .signalIcon {
    margin-left: auto;
  }
}
</style>
