<script setup>
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'

const movies = ref([
  { id: '1', num: '1', name: 'a' },
  { id: '2', num: '2', name: 'b' },
  { id: '3', num: '3', name: 'c' },
  { id: '4', num: '4', name: 'd' },
  { id: '5', num: '5', name: 'e' },
  { id: '6', num: '6', name: 'f' }
])

provide('movies', movies.value)
</script>

<template>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>
