const fs = require('fs')
const path = require('path')

const files = [
  'src/views/HomeView.vue',
  'src/views/movies/MoviesView.vue',
  'src/views/series/SeriesView.vue',
  'src/views/app/AppDownload.vue',
  'src/views/auth/LoginView.vue',
  'src/views/auth/RegisterView.vue',
  'src/views/auth/RecoveryPasswordView.vue',
  'src/views/errors/NotFoundView.vue',
  'src/layouts/DefaultLayout.vue',
  'src/layouts/AuthLayout.vue',
  'src/layouts/BlankLayout.vue'
]

const getVueContent = name =>
  `
<template>
  <div class="${name}">
    ${name} page
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
`.trim()

files.forEach(filePath => {
  const dir = path.dirname(filePath)
  const fileName = path.basename(filePath, '.vue')
  const className = fileName.toLowerCase()

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log(`📁 پوشه ساخته شد: ${dir}`)
  }

  const content = getVueContent(className)
  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`✅ فایل ساخته شد: ${filePath}`)
})

console.log('\n🎉 همه فایل‌ها ساخته شدند.')
