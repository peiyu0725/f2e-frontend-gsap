<template>
  <div class="award">
    <div class="award-title">
      <div class="award-title__first">區區修煉已經無法滿足了嗎？</div>
      <div class="award-title__last">還有比賽等著你！</div>
    </div>
    <div class="award-racing">
      <img id="flag" src="@/assets/images/flag.svg" />
      <img id="line" src="@/assets/images/line.svg" width="100%" />
      <img id="car" src="@/assets/images/car.svg" />
    </div>
    <div class="award-content">
      <div class="award-content__card">
        <div class="award-content__card--inside">
          <img src="@/assets/images/clipboard.svg" />
          <div class="card-title">評審機制</div>
          <div class="card-content">
            <div class="subtitle">初選：</div>
            將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單。
            <div class="subtitle">決選：</div>
            由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單
          </div>
        </div>
      </div>
      <div class="award-content__card">
        <div class="award-content__card--inside">
          <img src="@/assets/images/coin.svg" />
          <div class="card-title">獎金</div>
          <div class="card-content">
            <div class="text">
              <div class="inline-title">初選佳作：</div>
              <div>
                共六十位
                <span class="tag">數位獎狀</span>
              </div>
            </div>
            <div class="desc">每週主題個人組十位、團體組十組</div>
            <div class="text">
              <div class="inline-title">個人企業獎：</div>
              <div>
                共六位
                <span class="tag">NTD 3,000/位</span>
              </div>
            </div>
            <div class="desc">每週主題各 2 名，設計 1 位、前端 1 位</div>
            <div class="text">
              <div class="inline-title">團體企業獎：</div>
              <div>
                共三組
                <span class="tag">NTD 10,000/組</span>
              </div>
            </div>
            <div class="desc">每週主題各 1 組</div>
            <div style="padding-top: 16px">以上皆提供完賽數位獎狀</div>
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
  name: "Award",
  methods: {
    animated() {
      var tl = gsap.timeline();
      tl.to(".award-title, .award-content", {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
      })
        .to(".award-racing", { opacity: 1, duration: 1 }, "<")
        .to(".award-title__last", { opacity: 1, duration: 1 })
        .to("#car", {
          x: function () {
            const flagRect = document
              .getElementById("flag")
              .getBoundingClientRect();
            const lineRect = document
              .getElementById("line")
              .getBoundingClientRect();
            const carRect = document
              .getElementById("car")
              .getBoundingClientRect();
            return (
              flagRect.left +
              (flagRect.width * 2) / 3 -
              (lineRect.right - carRect.width)
            );
          },
          duration: 1,
        })
        .to("#flag", {
          y: -5,
          rotation: -30,
          duration: 0.5,
          transformOrigin: "left center",
        });
    },
    reset() {
      gsap.set("#car", { x: 0 });
      gsap.set("#flag", { rotation: 0, y: 0 });
      gsap.set(".award-title__last, .award-racing", { opacity: 0 });
      gsap.set(".award-title, .award-content", {
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
      trigger: ".award",
      start: "top 80%",
      onEnter: function () {
        self.animated();
      },
      onLeaveBack: function () {
        self.reset();
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.award {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    font-size: 40px;
    line-height: 60px;
    font-weight: 500;
    color: $primaryTextLight;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    margin-top: 100px;
    text-align: center;
    display: flex;
  }
  &-racing {
    position: relative;
    width: 876px;
    height: 93px;
    margin-top: 60px;
    & > * {
      position: absolute;
    }
    #flag {
      left: 0;
      bottom: 10px;
    }
    #line {
      left: 0;
      bottom: 0;
    }
    #car {
      right: 0;
      bottom: 10px;
    }
  }
  &-content {
    display: flex;
    &__card {
      width: 485px;
      height: 552px;
      border-radius: 32px;
      background-image: linear-gradient(
        100.38deg,
        #313a65 3.95%,
        rgba(49, 58, 101, 0) 100%
      );
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 60px 30px;
      transition: 0.5s;
      padding: 2px;
      &:hover {
        background-image: linear-gradient(
          142.45deg,
          rgba(157, 164, 255, 0.8) 1.69%,
          rgba(85, 255, 173, 0.8) 99.97%
        );
        transform: translateY(-20px);
      }
      &--inside {
        width: 100%;
        height: 100%;
        background: $cardBgColor;
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        box-sizing: border-box;
        .card-title {
          font-size: 40px;
          line-height: 60px;
          font-weight: 500;
          color: $primaryColor1;
          text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
          margin: 8px 0 56px 0;
        }
        .card-content {
          width: 100%;
          color: $primaryTextLight;
          font-size: 20px;
          line-height: 28px;
          text-align: justify;
          div.subtitle {
            font-size: 24px;
            line-height: 36px;
            font-weight: 500;
            padding: 32px 0 8px 0;
            &:first-of-type {
              padding: 8px 0;
            }
          }
          .inline-title {
            font-weight: 500;
          }
          .text {
            padding: 8px 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          .desc {
            color: $secondaryText;
            font-size: 16px;
            line-height: 20px;
            padding-bottom: 8px;
          }
          .tag {
            color: $secondaryColor;
            padding: 0 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1104px) {
  .award {
    &-title {
      font-size: 32px;
      line-height: 48px;
      flex-direction: column;
    }
    &-racing {
      width: 485px;
    }
    &-content {
      flex-direction: column;
      margin-bottom: 30px;
      &__card {
        margin: 60px 30px 0 30px;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .award {
    &-title {
      font-size: 24px;
      line-height: 36px;
    }
    &-racing {
      width: 343px;
    }
    &-content {
      &__card {
        width: 347px;
        height: fit-content;
        .card-content {
          .text {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      }
    }
  }
}
</style>