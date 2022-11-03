<template>
  <div class="guide">
    <div class="guide-banner">
      <div class="guide-bg"></div>
      <div class="guide-top-tape">
        <div class="guide-tape">
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
        </div>
      </div>
      <div class="guide-bottom-tape">
        <div class="guide-tape">
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
          Interactive web design
          <img src="@/assets/images/dot.svg" />
        </div>
      </div>
      <div class="guide-ani">
        <div class="guide-ani__items">
          <img id="guide-title" src="@/assets/images/guide-title.svg" />
          <img id="left-hand" src="@/assets/images/left-hand.svg" />
          <img id="right-hand" src="@/assets/images/right-hand.svg" />
          <img id="ux-design" src="@/assets/images/ux-design.svg" />
          <img id="frontend" src="@/assets/images/f2e.svg" />
          <div id="guide-text">
            <span>前端工程師</span>
            <img style="margin: 0 72px" src="@/assets/images/close.svg" />
            <span>UI設計師</span>
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
  name: "Guide2",
  methods: {
    timeline() {
      gsap.fromTo(
        ".guide-top-tape .guide-tape",
        {
          x: 0,
        },
        {
          x: "-728",
          duration: 3,
          delay: 1,
        }
      );
      gsap.fromTo(
        ".guide-bottom-tape .guide-tape",
        {
          x: 0,
        },
        {
          x: "801",
          duration: 3,
          delay: 1,
        }
      );
    },
  },
  mounted() {
    const self = this;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".guide-banner",
      start: "top 100%",
      end: "bottom 0%",
      onEnter: function () {
        self.timeline();
      },
      onLeaveBack: function () {
        gsap.set(".guide-tape", { x: 0 });
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.guide {
  height: 100vh;
  position: relative;
  .guide-banner {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    overflow-x: hidden;
    .guide-bg {
      width: 100%;
      background-color: $primaryTextLight;
      background-size: cover;
      background-image: url("../assets/images/guide-bg.svg");
    }
    .guide-top-tape,
    .guide-bottom-tape {
      font-family: "Monument-Extended-Regular";
      font-weight: 700;
      font-size: 36px;
      line-height: 43px;
      max-width: 100%;
      height: 67px;
      padding: 0 20px;
      overflow: hidden;
      position: absolute;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      white-space: nowrap;
      color: $primaryTextLight;
      background: $gradientDecorationColor;
      z-index: 2;
    }
    .guide-tape {
      img {
        margin: 0 40px;
      }
    }
    .guide-top-tape {
      top: 0;
    }
    .guide-bottom-tape {
      bottom: 0;
      justify-content: flex-end;
    }
    .guide-ani {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      &__items {
        position: relative;
        width: 100%;
        height: 100%;
        // margin: 67px 0;
        & > * {
          position: absolute;
        }
      }
      #guide-title {
        width: 706.92px;
        top: 214.39px;
        left: 606.88px;
      }
      #left-hand {
        width: 370.75px;
        top: 218.75px;
        left: 222px;
      }
      #right-hand {
        width: 370.75px;
        top: 236.08px;
        left: 1246.67px
      }
      #ux-design {
        width: 462.54px;
        top: 550.29px;
        left: 226.42px;
      }
      #frontend {
        width: 157.68px;
        top: 93.72px;
        left: 1225.46px;
      }
      #guide-text {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 32.0115px;
        line-height: 48px;
        top: 723.58px;
        left: 726.93px;
      }
    }
  }
}
</style>