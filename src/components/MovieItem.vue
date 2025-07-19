<script setup>
defineProps({
  movie: Object
})
</script>

<template>
  <div class="moviesItem">
    <span>نام : {{ movie.name }}</span>
    <span>آیدی : {{ movie.id }}</span>
    <span>شماره : {{ movie.num }}</span>

    <router-link :to="'/movies/view/' + movie.id">برو</router-link>
  </div>
</template>

<style lang="scss" scoped>
.moviesItem {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
