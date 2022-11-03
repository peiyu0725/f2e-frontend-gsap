<template>
  <div class="navigation">
    <img src="@/assets/images/logo.svg" />
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
  .btn-wrapper {
    .menu-btn {
      position: relative;
      font-size: 16px;
      background: none;
      color: $secondaryText;
      border: none;
      height: 42px;
      line-height: 20px;
      padding: 10px 0 12px;
      margin: 0 16px;
      &:hover {
        color: $primaryTextLight;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
        &::after {
          content: "";
          width: 12px;
          height: 4px;
          background-color: $secondaryColor;
          box-shadow: 0px 0px 10px rgba(85, 255, 173, 0.6);
          border-radius: 20px;
          position: absolute;
          bottom: 0;
          left: calc((100% - 12px) / 2);
        }
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
  }
}
</style>