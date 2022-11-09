<template>
  <div class="sponsor">
    <div class="sponsor-title">sponsors</div>
    <div class="sponsor-subtitle">鑽石級贊助商</div>
    <div class="logo-wrapper">
      <div class="logo-border">
        <div class="logo">
          <img src="@/assets/images/blockstudio_logo.png" />
        </div>
      </div>
      <div class="logo-border">
        <div class="logo">
          <img src="@/assets/images/kdan_logo.png" />
        </div>
      </div>
      <div class="logo-border">
        <div class="logo">
          <img src="@/assets/images/titan_logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sponsor",
};
</script>
<style lang="scss" scoped>
.sponsor {
  position: relative;
  background-color: $cardBgColor;
  color: $primaryTextLight;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  .sponsor-title,
  .sponsor-subtitle {
    font-size: 32px;
    line-height: 48px;
  }
  .sponsor-title {
    font-family: "Monument-Extended";
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .sponsor-subtitle {
    margin-bottom: 30px;
  }
  .logo-wrapper {
    display: flex;
  }
  .logo-border {
    width: 140px;
    height: 140px;
    background-color: #ffffff;
    margin: 30px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-image: linear-gradient(90deg, #9da4ff 0%, #55ffad 100%);
      .logo img {
        transform: scale(1.03);
      }
    }
    .logo {
      width: 130px;
      height: 130px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      overflow: hidden;
      img {
        width: 120px;
        height: 120px;
        transition: 0.3s;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .sponsor {
    .logo-wrapper {
      flex-direction: column;
    }
  }
}
</style>