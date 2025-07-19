<script setup>
import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movies = inject('movies')

console.log(route.params.id)

const movieData = computed(() => {
  const movieId = route.params.id
  const movie = movies.find(movie => movie.id === movieId)
  return movie
})
</script>

<template>
  <div>{{ movieData }}</div>
</template>

<style lang="scss" scoped></style>
