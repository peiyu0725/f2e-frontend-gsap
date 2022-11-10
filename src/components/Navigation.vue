<template>
  <div class="navigation">
    <div class="left">
      <img class="menu" src="@/assets/images/menu.svg" />
      <img class="logo" src="@/assets/images/logo.svg" />
    </div>
    <div class="btn-wrapper">
      <button class="menu-btn">關卡資訊</button>
      <button class="menu-btn">攻略資源</button>
      <button class="menu-btn">求職專區</button>
      <button class="login-btn">登入</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
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
  .left {
    display: flex;
    align-items: center;
    .menu {
      margin-right: 20px;
      display: none;
      cursor: pointer;
    }
  }
  .btn-wrapper {
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