<template>
  <div class="level">
    <div class="level-title">
      <div class="level-title__text">年度最強合作 三大主題來襲</div>
      <img src="@/assets/images/lightning.svg" />
    </div>
    <div class="level-desc">
      各路廠商強強聯手<br />
      共同設計出接地氣的網頁互動挑戰關卡
    </div>
    <div class="level-card">
      <div class="level-card__item">
        <div class="front">
          week 1
          <img src="@/assets/images/lock.svg" />
        </div>
        <div class="back">
          <div class="card-tag"># 板塊設計</div>
          <div class="card-body">
            <div class="card-title">The F2E 活動網站設計</div>
            <div class="card-subtitle">視覺滾動</div>
            <img src="@/assets/images/card-dashboard.svg" />
          </div>
          <div class="card-footer">
            <div class="card-footer__week">Week 1</div>
            <div class="card-footer__link">
              查看關卡細節
              <img src="@/assets/images/right-top-arrow.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="level-card__item">
        <div class="front">
          week 2
          <img src="@/assets/images/lock.svg" />
        </div>
        <div class="back">
          <div class="card-tag"># 凱鈿行動科技</div>
          <div class="card-body">
            <div class="card-title">今晚，我想來點點簽</div>
            <div class="card-subtitle">CANVAS</div>
            <img src="@/assets/images/phone.svg" />
          </div>
          <div class="card-footer">
            <div class="card-footer__week">Week 2</div>
            <div class="card-footer__link">
              查看關卡細節
              <img src="@/assets/images/right-top-arrow.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="level-card__item">
        <div class="front">
          week 3
          <img src="@/assets/images/lock.svg" />
        </div>
        <div class="back">
          <div class="card-tag"># 鈦坦科技</div>
          <div class="card-body">
            <div class="card-title">Scrum 新手村</div>
            <div class="card-subtitle">JS Draggable</div>
            <img src="@/assets/images/exchange.svg" />
          </div>
          <div class="card-footer">
            <div class="card-footer__week">Week 3</div>
            <div class="card-footer__link">
              查看關卡細節
              <img src="@/assets/images/right-top-arrow.svg" />
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
  name: "Level",
  methods: {
    init() {
      gsap.fromTo(
        ".level-title",
        { yPercent: -50, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2, ease: "expo.out" }
      );
      gsap.fromTo(
        ".level-desc",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 2, ease: "expo.out" }
      );
      gsap.fromTo(
        ".level-card__item",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
          stagger: {
            from: "end",
            each: 0.2,
          },
          ease: "expo.out",
        }
      );
      gsap.fromTo(
        ".front",
        {
          opacity: 1,
          rotationY: 0,
        },
        {
          opacity: 0,
          rotationY: -180,
          duration: 2.5,
          delay: 2,
          stagger: 0.8,
          ease: "expo.out",
        }
      );
      gsap.fromTo(
        ".back",
        {
          opacity: 0,
          rotationY: -180,
        },
        {
          opacity: 1,
          rotationY: 0,
          duration: 2.5,
          delay: 2,
          stagger: 0.8,
          ease: "expo.out",
        }
      );
    },
  },
  mounted() {
    let self = this;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".level",
      once: true,
      onEnter: function () {
        self.init();
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.level {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  .level-title {
    position: absolute;
    width: fit-content;
    top: 152.32px;
    &__text {
      width: fit-content;
      color: $secondaryColor;
      font-size: 48px;
      line-height: 72px;
      border: 4px solid $secondaryColor;
      border-radius: 100px;
      padding: 16px 36px;
      text-shadow: 0px 0px 10px rgba(85, 255, 173, 0.6);
    }
    img {
      position: absolute;
      top: -80px;
      right: -68px;
    }
  }
  .level-desc {
    position: absolute;
    top: 320.32px;
    color: $primaryTextLight;
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    text-align: center;
  }
  .level-card {
    position: absolute;
    top: 452.32px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 360px;
    &__item {
      width: 300px;
      height: 360px;
      &:not(:last-child) {
        margin-right: 40px;
      }
      & > * {
        width: 300px;
        height: 360px;
        border-radius: 32px;
        box-sizing: border-box;
        position: absolute;
      }
      .front {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: $gradientCardBgColor;
        font-family: "Monument-Extended";
        font-size: 32px;
        line-height: 48px;
        color: $primaryTextLight;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: 50px;
      }
      .back {
        // display: none;
        background-color: $primaryTextLight;
        padding: 16px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .card-tag {
          border-radius: 8px;
          font-family: "NotoSansTC";
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          background-color: #83fac1;
          width: fit-content;
          padding: 4px 8px;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: calc(100% - 28px - 21px - 16px);
          img {
            margin: auto;
          }
        }
        .card-title {
          margin-top: 16px;
          font-family: "NotoSansTC";
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
          color: $primaryColor3;
          text-transform: uppercase;
        }
        .card-subtitle {
          margin-top: 8px;
          font-family: "Montserrat", "NotoSansTC";
          font-weight: 300;
          font-size: 20px;
          line-height: 28px;
          color: $primaryColor3;
        }
        .card-footer {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          line-height: 18px;
          & > div {
            display: flex;
            align-items: center;
          }
          &__week {
            font-family: "Monument-Extended";
            text-transform: uppercase;
            color: $primaryColor2;
          }
          &__link {
            cursor: pointer;
            color: $primaryColor3;
            font-family: "NotoSansTC";
            font-weight: 500;
            img {
              transition: 0.3s;
            }
            &:hover {
              text-decoration: underline $primaryColor3;
              text-underline-offset: 5px;
              img {
                transform: translate(2px, -2px) scale(1.2);
              }
            }
          }
        }
      }
    }
  }
}
</style>
