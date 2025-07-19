<script setup>
// const buttonConfig = defineProps(["x", "Y", "direction", "height"]);

import { computed } from "vue";

const props = defineProps({
  X: Number,
  Y: Number,
  direction: {
    type: String,
    default: "left",
  },
  height: {
    type: String,
    default: "50px",
  },
});

// فقط یکی از left یا right بر اساس جهت
const positionStyle = computed(() => {
  const style = {
    top: props.Y + "px",
    height: props.height,
  };

  if (props.direction === "left") {
    style.left = props.X + "px";
  } else if (props.direction === "right") {
    style.right = props.X + "px";
  }

  return style;
});
</script>
<template>
  <!-- <div
    class="mobileButton"
    :class="{
      right: buttonConfig.direction === 'right',
      left: buttonConfig.direction === 'left',
    }"

    :style{
      left:
    }
  > -->

  <div class="mobileButton" :class="props.direction" :style="positionStyle">
    <div class="wrapper">
      <div class="firstLayer"></div>
      <div class="secondLayer"></div>
      <div class="thirdLayer"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobileButton {
  //   width: 2.64px;
  //   height: 47.8px;

  width: 2.64px;
  height: 47.8px;
  position: absolute;
  left: 0;
  top: 0;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;

    .firstLayer {
      width: 41%;
      height: 100%;
      background: linear-gradient(
        0deg,
        #353540 -0.02%,
        #000000 5.29%,
        #333333 51.82%,
        #000000 96.45%,
        #262c31 99.99%
      );
    }

    .secondLayer {
      width: 41%;
      height: 100%;

      background: linear-gradient(
        180deg,
        #3b3b3b -0.01%,
        #e6e6e6 1.84%,
        #333333 3.81%,
        #000000 8.2%,
        #666666 10.52%,
        #313131 90.48%,
        #000000 93.9%,
        #333333 96.45%,
        #cccccc 98.28%,
        #2c2c2c 99.99%
      );
    }

    .thirdLayer {
      width: 18%;
      height: 100%;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;

      border-radius: 100px 0 0 100px;

      background: linear-gradient(
        180deg,
        #a0a0a0 0.01%,
        #333333 6.41%,
        #8a8a8a 18.61%,
        #8a8a8a 80.64%,
        #333333 91.9%,
        #a0a0a0 99.99%
      );
    }
  }
}

.mobileButton.left .wrapper {
  flex-direction: row-reverse;
}

.mobileButton.right .wrapper {
  flex-direction: row;

  .thirdLayer {
    border-radius: 0 100px 100px 0;
  }
}
</style>
