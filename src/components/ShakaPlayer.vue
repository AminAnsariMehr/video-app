<!-- <script setup>
import { ref, onMounted } from "vue";
import shaka from "shaka-player";

const videoElement = ref(null);
const isPlaying = ref(false);
onMounted(async () => {
  if (!shaka.Player.isBrowserSupported()) {
    console.error("Shaka Player is not supported on this browser.");
    return;
  }

  const player = new shaka.Player();

  await player.attach(videoElement.value);

  player.addEventListener("error", onError);

  try {
    const m3u8Url = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
    await player.load(m3u8Url);
    console.log("Video loaded successfully");
  } catch (error) {
    console.error("Error loading video", error);
  }

  videoElement.value.addEventListener("play", () => (isPlaying.value = true));
  videoElement.value.addEventListener("pause", () => (isPlaying.value = false));
});

const togglePlay = () => {
  const video = videoElement.value;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function onError(e) {
  console.error("Shaka Error:", e.detail);
}
</script> -->

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import shaka from "shaka-player";

const videoElement = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);

onMounted(async () => {
  await nextTick();

  if (!videoElement.value) return;

  const player = new shaka.Player();
  await player.attach(videoElement.value);

  try {
    const m3u8Url = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

    await player.load(m3u8Url);
    console.log("Video loaded successfully");
  } catch (e) {
    console.error("Error loading video:", e);
  }

  videoElement.value.addEventListener("loadedmetadata", () => {
    duration.value = videoElement.value.duration;
  });

  videoElement.value.addEventListener("timeupdate", () => {
    currentTime.value = videoElement.value.currentTime;
  });

  videoElement.value.addEventListener("play", () => {
    isPlaying.value = true;
  });

  videoElement.value.addEventListener("pause", () => {
    isPlaying.value = false;
  });
});

const togglePlay = () => {
  if (!videoElement.value) return;

  if (videoElement.value.paused) {
    videoElement.value.play().catch((err) => console.error("Play error:", err));
  } else {
    videoElement.value.pause();
  }
};

const onSeek = () => {
  videoElement.value.currentTime = currentTime.value;
};

const onVolumeChange = () => {
  videoElement.value.volume = volume.value;
};

const toggleFullscreen = () => {
  //   const video = videoElement.value;
  //   if (document.fullscreenElement) {
  //     document.exitFullscreen();
  //   } else {
  //     video.requestFullscreen();
  //   }

  const playerWrapper = videoElement.value.parentElement; // والد
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    playerWrapper.requestFullscreen();
  }
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};
</script>

<template>
  <div class="playerWrapper">
    <video
      ref="videoElement"
      width="100%"
      height="auto"
      class="player w-full"
    ></video>
    <!-- controls -->

    <!-- کنترل‌ها -->
    <div
      class="absolute bottom-4 left-4 flex gap-4 items-center bg-black/50 px-4 py-2 rounded"
    >
      <button @click="togglePlay" class="text-white text-xl">
        {{ isPlaying ? "⏸️ Pause" : "▶️ Play" }}
      </button>

      <span>{{ formatTime(currentTime) }}</span>

      <input
        type="range"
        min="0"
        :max="duration"
        step="0.1"
        v-model="currentTime"
        @change="onSeek"
      />

      <span>{{ formatTime(duration) }}</span>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="volume"
        @input="onVolumeChange"
      />

      <button @click="toggleFullscreen">🔳</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playerWrapper {
  .player {
    padding: 1rem;

    video {
      border-radius: 16px;
    }
  }
}
</style>
