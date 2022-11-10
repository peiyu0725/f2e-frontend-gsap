<template>
  <div class="banner">
    <div class="banner-animation">
      <div class="banner-copywriting">
        <img id="banner-4th" src="@/assets/images/4th.svg" />
        <img id="banner-f2e" src="@/assets/images/the-f2e.svg" />
        <div id="banner-text">互動式網頁設計</div>
        <button class="signup-btn">立即報名</button>
      </div>
      <img id="banner-code" src="@/assets/images/code.svg" />
      <img id="banner-dashboard" src="@/assets/images/dashboard.svg" />
      <img
        id="banner-illustration-right"
        src="@/assets/images/illustration1.svg"
      />
      <img
        id="banner-illustration-left"
        src="@/assets/images/illustration2.svg"
      />
    </div>
    <div class="join-us">
      <img class="join-us__item" src="@/assets/images/join-us-desktop.svg" />
      <img class="join-us__item" src="@/assets/images/join-us-desktop.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style lang="scss" scoped>
.banner {
  height: calc(100vh - 90px);
}
.banner-animation {
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: calc(100% - 66px);
  & > * {
    position: absolute;
  }
  .banner-copywriting {
    width: 49.27%;
    top: 22.49%;
    left: 25.365%;
  }
  #banner-f2e {
    position: relative;
    width: 81.3%;
    animation: fadeInTitle 10s ease;
  }
  #banner-4th {
    position: absolute;
    width: 23.5%;
    top: -12%;
    right: 0;
    animation: fadeInTitle 10s ease;
  }
  #banner-text {
    position: relative;
    width: fit-content;
    left: 24.6%;
    margin-top: 18px;
    font-size: 28px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0.8em;
    color: $primaryTextLight;
  }
  .signup-btn {
    width: 33.85%;
    left: 31.55%;
    margin-top: 104px;
  }
  #banner-code {
    width: 10.42%;
    top: 28.06%;
    left: 8%;
    transform: rotate(-19.31deg);
    animation: fadeInCode 10s ease;
    animation-fill-mode: forwards;
  }
  #banner-dashboard {
    width: 19.36%;
    top: 34.5%;
    left: 61.17%;
    animation: fadeInDashboard 10s ease;
    animation-fill-mode: forwards;
  }
  #banner-illustration-left {
    width: 16.8%;
    top: calc(24% + 128px);
    left: 20.32%;
  }
  #banner-illustration-right {
    width: 14%;
    top: 20%;
    left: 78.5%;
  }
}

.join-us {
  width: 100%;
  overflow-x: hidden;
  position: absolute;
  bottom: 30px;
  display: flex;
  .join-us__item {
    animation: marqee 10s linear infinite;
    animation-delay: 2.5s;
  }
}

@keyframes fadeInTitle {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }

  20% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fadeInDashboard {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }

  20% {
    transform: translateY(0);
    opacity: 1;
  }

  25% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(40px);
    opacity: 1;
  }
}

@keyframes fadeInCode {
  0% {
    transform: translateY(-40px) rotate(-19.31deg);
    opacity: 0;
  }

  20% {
    transform: translateY(0) rotate(-19.31deg);
    opacity: 1;
  }

  25% {
    transform: translateY(0) rotate(-19.31deg);
    opacity: 1;
  }

  100% {
    transform: translateY(-40px) rotate(-19.31deg);
    opacity: 1;
  }
}

@keyframes marqee {
  0% {
    left: 0;
    transform: translateX(-100%);
  }

  100% {
    left: 100%;
    transform: translateX(0%);
  }
}

@media screen and (max-width: 1184px) {
  .banner {
    #banner-text {
      font-size: 24.6667px;
      line-height: 37px;
    }
    .signup-btn {
      margin-top: 94px;
    }
    #banner-illustration-left {
      top: calc(22.5% + 128px);
    }
  }
}

@media screen and (max-width: 1104px) {
  .banner {
    #banner-text {
      font-size: 23px;
      line-height: 34px;
    }
  }
}

@media screen and (max-width: 980px) {
  .banner {
    #banner-text {
      font-size: 20.4167px;
      line-height: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  .banner {
    height: calc(100vh - 72px);
    #banner-text {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

@media screen and (max-width: 650px) {
  .banner {
    #banner-illustration-left,
    #banner-illustration-right {
      display: none;
    }
    .banner-copywriting {
      width: 291.21px;
      top: calc(50% - 59px - 237.88px / 2);
      left: calc(50% - 291.21px / 2);
    }
    #banner-4th {
      position: relative;
      width: 83.06px;
      left: calc(50% - 83.06px / 2);
    }
    #banner-f2e {
      width: 100%;
    }
    #banner-text {
      left: 9.66%;
      font-size: 20px;
    }
    #banner-code {
      width: 70.48px;
      top: calc(50% - 59px - 267.88px / 2 - 70px);
      left: calc(50% - 291.21px / 2);
      animation: none;
    }
    #banner-dashboard {
      width: 105.26px;
      top: calc(50% - 59px + 267.88px / 2 + 47px);
      left: 56.38%;
      animation: none;
    }
    .signup-btn {
      width: 160px;
      left: calc(50% - 80px);
      margin-top: 80px;
    }
  }
}
</style>