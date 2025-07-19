<script setup>
const menuItems = [
  {
    id: 1,
    name: "home",
    path: "/home",
    img: "src/assets/icons/menuItems/home.svg",
  },

  {
    id: 2,
    name: "explore",
    path: "/explore",
    img: "src/assets/icons/menuItems/search.svg",
  },
  {
    id: 3,
    name: "post",
    path: "/post",
    img: "src/assets/icons/menuItems/post.svg",
  },
  {
    id: 4,
    name: "likes",
    path: "/likes",
    img: "src/assets/icons/menuItems/heart.svg",
  },
  {
    id: 5,
    name: "profile",
    path: "/profile",
    img: "src/assets/icons/menuItems/profile.svg",
  },
];
</script>

<template>
  <nav class="navigationMenu">
    <ul class="menu">
      <li class="menuItems" v-for="item in menuItems">
        <router-link class="menuLinks" :to="item.path">
          <img :src="item.img" alt="" />
        </router-link>
      </li>
    </ul>

    <div class="GOHomeIcon">
      <i class="indicator"></i>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigationMenu {
  width: 100%;
  height: 81px;
  background: #fff;
  // bottom: 0;
  // left: 0;

  .menu {
    width: 100%;
    height: 50px;
    display: flex;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    .menuItems {
      height: 100%;
      height: 50px;
      flex: 1;
      gap: 3px;
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .menuLinks {
      height: 100%;
      padding: 0rem 1rem;
      text-decoration: none;
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

  .GOHomeIcon {
    width: 100%;
    height: 31px;
    position: relative;

    .indicator {
      width: 134px;
      height: 5px;
      background: #060606;
      border-radius: 30px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -10px);
    }
  }
}
</style>
