<template>
  <div class="guide">
    <div class="guide-banner">
      <div class="guide-bg"></div>
      <div class="guide-top-tape guide-tape">
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
        <img src="@/assets/images/dot.svg" />
      </div>
      <div class="guide-bottom-tape guide-tape">
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
        <img src="@/assets/images/dot.svg" />
        Interactive web design
      </div>
      <div class="guide-ani">
        <div class="guide-ani__items">
          <img id="left-hand" src="@/assets/images/left-hand.svg" />
          <img id="right-hand" src="@/assets/images/right-hand.svg" />
          <img id="guide-title" src="@/assets/images/guide-title.svg" />
          <div id="guide-text">
            <span>前端工程師</span>
            <img src="@/assets/images/close.svg" />
            <span>UI設計師</span>
          </div>

          <img id="ux-design" src="@/assets/images/ux-design.svg" />
          <img id="frontend" src="@/assets/images/f2e.svg" />
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
    tapeAni() {
      gsap.fromTo(
        ".guide-top-tape",
        {
          x: 0,
        },
        {
          x: "-710",
          duration: 3,
          delay: 1,
        }
      );
      gsap.fromTo(
        ".guide-bottom-tape",
        {
          x: 0,
        },
        {
          x: "710",
          duration: 3,
          delay: 1,
        }
      );
    },
    timeline() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".guide-banner",
          markers: true,
          start: "top 50%",
          end: "top 0%",
          scrub: true,
        },
      });

      tl.fromTo(
        "#guide-title, #guide-text",
        {
          scale: 0,
          opacity: 0.3,
        },
        {
          scale: 1,
          opacity: 1,
        },
        "<"
      )
        .fromTo(
          "#left-hand",
          {
            rotate: 60,
            xPercent: 150,
            opacity: 0,
          },
          {
            rotate: 0,
            xPercent: 0,
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          "#right-hand",
          {
            rotate: -60,
            xPercent: -150,
            opacity: 0,
          },
          {
            rotate: 0,
            xPercent: 0,
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          "#ux-design",
          {
            rotate: -180,
            yPercent: 100,
            transformOrigin: "50% 50%",
          },
          {
            rotate: 0,
            yPercent: 0,
            transformOrigin: "50% 50%",
          },
          "<"
        )
        .fromTo(
          "#frontend",
          {
            rotate: 180,
            yPercent: -100,
            transformOrigin: "50% 50%",
          },
          {
            rotate: 0,
            yPercent: 0,
            transformOrigin: "50% 50%",
          },
          "<"
        );
    },
  },
  mounted() {
    const self = this;
    gsap.registerPlugin(ScrollTrigger);
    self.timeline();

    ScrollTrigger.create({
      trigger: ".guide-banner",
      start: "top 100%",
      end: "bottom 0%",
      onEnter: function () {
        self.tapeAni();
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
    .guide-tape {
      font-family: "Monument-Extended-Regular";
      font-weight: 700;
      font-size: 36px;
      line-height: 43px;
      width: calc(100vw + 710px);
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
      img {
        margin: 0 40px 2px;
      }
    }
    .guide-top-tape {
      top: 0;
      left: 0;
      justify-content: flex-start;
    }
    .guide-bottom-tape {
      right: 0;
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
        & > * {
          position: absolute;
        }
      }
      #guide-title {
        width: 36.82%;
        min-width: 283.03px;
        top: 22.71%;
        left: 31.61%;
      }
      #left-hand {
        width: 19.31%;
        top: 25.29%;
        left: 15.42%;
      }
      #right-hand {
        width: 19.31%;
        top: 25.29%;
        left: 64.9%;
      }
      #ux-design {
        width: 24.09%;
        top: 60.41%;
        left: 11.79%;
      }
      #frontend {
        width: 10.16%;
        top: 9.93%;
        left: 63.83%;
      }
      #guide-text {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 1.67vw;
        line-height: 48px;
        top: 76.65%;
        left: 37.86%;
        img {
          margin: 0 3.39vw;
          width: 1.61vw;
        }
      }
    }
  }
}
</style>