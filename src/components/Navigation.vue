<template>
  <div class="navigation">
    <div class="left">
      <img
        class="menu"
        src="@/assets/images/menu.svg"
        @click="menuVisible = !menuVisible"
      />
      <img class="logo" src="@/assets/images/logo.svg" />
    </div>
    <div class="btn-wrapper">
      <button class="menu-btn">關卡資訊</button>
      <button class="menu-btn">攻略資源</button>
      <button class="menu-btn">求職專區</button>
      <button class="login-btn">登入</button>
    </div>
    <transition name="slide-fade">
      <div class="mobile-menu" v-show="menuVisible">
        <div class="menu-close">
          <img
            src="@/assets/images/close-white.svg"
            @click="menuVisible = false"
          />
        </div>
        <button class="menu-btn">關卡資訊</button>
        <button class="menu-btn">攻略資源</button>
        <button class="menu-btn">求職專區</button>
        <button class="login-btn">登入</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      menuVisible: false,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && this.menuVisible) {
        this.menuVisible = false;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  background-color: $bgColor2;
  height: 90px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  .left {
    display: flex;
    align-items: center;
    z-index: 5;
    .menu {
      margin-right: 20px;
      display: none;
      cursor: pointer;
    }
  }

  .login-btn {
    margin-left: 24px;
    font-size: 16px;
    background-color: $bgColor2;
    color: $primaryTextLight;
    border: 1px solid $primaryTextLight;
    border-radius: 40px;
    padding: 10px 0 12px;
    height: 42px;
    width: 80px;
    line-height: 20px;
    &:hover {
      background-color: rgba(85, 255, 173, 0.2);
      color: $secondaryColor;
      border-color: $secondaryColor;
    }
  }

  .mobile-menu {
    width: 100vw;
    height: 294px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 72px;
    z-index: 2;
    padding: 16px;
    box-sizing: border-box;
    background-color: $bgColor2;
    .menu-close {
      width: 100%;
      text-align: right;
      margin-bottom: 8px;
      img {
        cursor: pointer;
      }
    }
    .login-btn {
      width: 100%;
      margin: 26px 0 0;
    }
    .menu-btn {
      width: fit-content;
      height: auto;
      margin: 16px 0;
      padding: 0;
      &:hover,
      &.active {
        &::after {
          width: 4px;
          height: 12px;
          bottom: 4.5px;
          left: -15px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .navigation {
    height: 72px;
    padding: 0 16px;
    .left {
      .logo {
        width: 110px;
      }
      .menu {
        display: block;
      }
    }
    .btn-wrapper {
      display: none;
    }
  }
}
</style>