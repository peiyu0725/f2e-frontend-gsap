<template>
  <div class="illustrate">
    <div class="illustrate-title">
      <img src="@/assets/images/illustrate-title1.svg" />
      <span>活動說明</span>
      <img src="@/assets/images/illustrate-title2.svg" />
    </div>
    <div class="illustrate-content">
      <div class="illustrate-content__row">
        <div class="illustrate-card">
          <img src="@/assets/images/signup.svg" />
          <div class="card-content">
            <div class="card-content__title">開放報名</div>
            <div class="card-content__info">
              <div><span>10/13</span>(四) 早上 11:00</div>
              <div style="text-align: center">
                <img src="@/assets/images/break.svg" />
              </div>
              <div><span>10/30</span>(日) 晚上 23:59</div>
              <div>截止前可修改報名組別</div>
            </div>
          </div>
        </div>
        <img
          class="illustrate-content__arrow"
          src="@/assets/images/carot.svg"
        />
        <div class="illustrate-card reverse">
          <img src="@/assets/images/clock.svg" />
          <div class="card-content">
            <div class="card-content__title">各組別開賽</div>
            <div class="card-content__info">
              <div><span>10/31</span>UI組、團體組開賽</div>
              <div><span>11/07</span>前端組開賽</div>
              <div>前端工程師可採用 UI 設計師的設計稿產出完整作品</div>
            </div>
          </div>
        </div>
        <img
          class="illustrate-content__arrow down"
          src="@/assets/images/carot.svg"
        />
      </div>
      <div class="illustrate-content__row">
        <div class="illustrate-card">
          <img src="@/assets/images/upload.svg" />
          <div class="card-content">
            <div class="card-content__title">登錄作品</div>
            <div class="card-content__info">
              <div><span>10/31</span>(一) 中午 12:00</div>
              <div style="text-align: center">
                <img src="@/assets/images/break.svg" />
              </div>
              <div><span>11/28</span>(一) 中午 12:00</div>
              <div>依賽程登錄作品</div>
            </div>
          </div>
        </div>
        <img
          class="illustrate-content__arrow left"
          src="@/assets/images/carot.svg"
        />
        <div class="illustrate-card reverse">
          <img src="@/assets/images/stream.svg" />
          <div class="card-content">
            <div class="card-content__title">線上直播</div>
            <div class="card-content__info">
              <div><span>11/03 - 11/24</span>每週四</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "Illustrate",
  methods: {
    init() {
      gsap.to(".illustrate-title, .illustrate-content", {
        yPercent: 0,
        opacity: 1,
        duration: 3,
        ease: "expo.out",
      });
    },
    reset() {
      gsap.set(".illustrate-title, .illustrate-content", {
        yPercent: 50,
        opacity: 0,
      });
    },
  },
  mounted() {
    let self = this;
    gsap.registerPlugin(ScrollTrigger);
    self.reset();
    ScrollTrigger.create({
      trigger: ".illustrate",
      start: "top 80%",
      onEnter: function () {
        self.init();
      },
      onLeaveBack: function () {
        self.reset();
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.illustrate {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .illustrate-title {
    position: relative;
    color: $primaryTextLight;
    font-size: 48px;
    line-height: 72px;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    margin: 72px 0 0 0;
    span {
      margin: 0 36px;
    }
  }
  .illustrate-content {
    display: flex;
    flex-direction: column;
    position: relative;
    &__row {
      display: flex;
      &:not(:first-of-type) {
        flex-direction: row-reverse;
      }
    }
    &__arrow {
      width: 80px;
      &.down {
        transform: rotate(90deg);
        position: absolute;
        right: 260px;
        top: calc(50% - 40px);
      }
      &.left {
        transform: rotate(180deg);
      }
    }
    .illustrate-card {
      width: 520px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 3px solid #ffffff;
      border-radius: 32px;
      padding: 0 48px;
      box-sizing: border-box;
      margin: 50px;
      transition: 0.3s;
      &.reverse {
        flex-direction: row-reverse;
      }
      &:hover {
        border-color: $primaryColor1;
        box-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
        .card-content__title {
          color: $primaryColor1;
          text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
        }
      }
      .card-content {
        color: $primaryTextLight;
        width: 55%;
        &__title {
          font-weight: 500;
          transition: 0.3s;
          font-size: 32px;
          line-height: 48px;
          margin-bottom: 16px;
        }
        &__info {
          font-size: 20px;
          line-height: 28px;
          & > div {
            margin-bottom: 8px;
          }
          span {
            color: $secondaryColor;
            margin-right: 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1184px) {
  .illustrate {
    height: 100%;
    .illustrate-title {
      margin: 96px 0 40px 0;
      font-size: 40px;
      line-height: 60px;
    }
    .illustrate-content {
      &__row {
        flex-direction: column !important;
        align-items: center;
      }
      &__arrow {
        transform: rotate(90deg) !important;
        position: relative !important;
        top: initial !important;
        right: initial !important;
      }
      .illustrate-card {
        margin: 40px;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .illustrate {
    .illustrate-title {
      font-size: 32px;
      line-height: 48px;
    }
    .illustrate-content {
      .illustrate-card {
        width: 343px;
        height: fit-content;
        flex-direction: column !important;
        justify-content: center;
        padding: 30px;
        .card-content {
          width: 100%;
          text-align: center;
          &__title {
            font-size: 24px;
            line-height: 36px;
          }
        }
      }
    }
  }
}
</style>