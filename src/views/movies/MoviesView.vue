<script setup>
import { inject } from 'vue'
import MovieItem from '../../components/MovieItem.vue'

import { useRoute } from 'vue-router'
const movies = inject('movies')

const route = useRoute()
</script>
<template>
  <div class="moviesview" v-if="!route.params.id">
    <h2>moviesview page</h2>

    <div class="moviesWrapper">
      <movie-item v-for="item in movies" :movie="item"></movie-item>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
