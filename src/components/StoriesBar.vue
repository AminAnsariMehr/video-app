<script setup>
const stories = [
  {
    userName: "User 1",
    userImage: "src/assets/icons/userAvatars/user10.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (10).jpeg",
  },
  {
    userName: "User 2",
    userImage: "src/assets/icons/userAvatars/user2.svg",
    live: true,
    storyImage: "src/assets/images/storyImages/pic (2).jpeg",
  },
  {
    userName: "User 3",
    userImage: "src/assets/icons/userAvatars/user3.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (3).jpeg",
  },
  {
    userName: "User 4",
    userImage: "src/assets/icons/userAvatars/user4.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (4).jpeg",
  },
  {
    userName: "User 5",
    userImage: "src/assets/icons/userAvatars/user10.svg",
    live: true,
    storyImage: "src/assets/images/storyImages/pic (5).jpeg",
  },
  {
    userName: "User 6",
    userImage: "src/assets/icons/userAvatars/user6.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (6).jpeg",
  },
  {
    userName: "User 7",
    userImage: "src/assets/icons/userAvatars/user7.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (7).jpeg",
  },
  {
    userName: "User 8",
    userImage: "src/assets/icons/userAvatars/user8.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (8).jpeg",
  },
  {
    userName: "User 9",
    userImage: "src/assets/icons/userAvatars/user9.svg",
    live: true,
    storyImage: "src/assets/images/storyImages/pic (9).jpeg",
  },
  {
    userName: "User 10",
    userImage: "src/assets/icons/userAvatars/user10.svg",
    live: false,
    storyImage: "src/assets/images/storyImages/pic (10).jpeg",
  },
];

const myAccuont = {
  userName: "Your Story",
  userImage: "src/assets/icons/userAvatars/user1.svg",
  live: false,
  storyImage: "src/assets/images/storyImages/pic (10).jpeg",
};
</script>

<template>
  <div class="storiesWrapper">
    <div class="storiesItem">
      <div class="avatarWrapper">
        <img class="userAvatar" :src="myAccuont.userImage" alt="userAvater" />
      </div>
      <div class="liveStatus" v-if="myAccuont.live">Live</div>
      <span class="userName">{{ myAccuont.userName }}</span>
    </div>

    <div class="storiesItem" v-for="story in stories">
      <div class="avatarWrapper">
        <img class="userAvatar" :src="story.userImage" alt="userAvater" />
      </div>

      <div class="liveStatus" v-if="story.live">Live</div>
      <span class="userName">{{ story.userName }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storiesWrapper {
  width: 100%;
  max-width: 375px;
  height: 98px;
  padding: 0 10px;
  //   background: orange;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  justify-content: flex-start;
  align-items: center;
  scrollbar-width: none;
}

.storiesItem {
  width: 62px;
  height: 81px;
  //   background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;

  .avatarWrapper {
    background: #fff;
    height: 62px;
    width: 62px;
    display: flex;
    // padding: 3px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(0deg, #fbaa47 0%, #d91a46 22%, #a60f93 100%);
    padding: 2px;
    cursor: pointer;
  }

  .liveStatus {
    padding: 3px 6px;
    font-size: 8px;
    color: #fefefe;
    border: 2px solid #fefefe;
    border-radius: 4px;
    position: absolute;
    top: 56px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to left, #c90083 0%, #d22463 22%, #e10038 100%);
  }

  .userAvatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    // border: #fff 3px solid;
    border: #fff 3px solid;
  }

  .userName {
    font-size: 12px;
    color: #262626;
  }
}
</style>
