<script setup></script>

<template>
  <nav class="navigationMenu">
    <ul class="menu">
      <li class="menuItems">
        <router-link class="menuLinks" to="/home">خانه</router-link>
      </li>
      <li class="menuItems">
        <router-link class="menuLinks" to="/movies">فیلم ها</router-link>
      </li>
      <li class="menuItems">
        <router-link class="menuLinks" to="/series">سریال ها</router-link>
      </li>
      <li class="menuItems">
        <router-link class="menuLinks" to="/app">اپلیکیشن</router-link>
      </li>
      <li class="menuItems">
        <router-link class="menuLinks" to="/auth/login"
          >ورود به پنل</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigationMenu {
  width: 100%;
}
.menu {
  background: #000;
  width: 100%;
  max-width: 500px;
  display: flex;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;

  .menuItems {
    flex: 1;
    display: flex;
  }

  .menuLinks {
    color: #fff;
    text-decoration: none;
    flex: 1;
    height: 73px;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    &.active,
    &.exactActive {
      color: #eb8307;
    }
  }
}
</style>
