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
    timeline({ isMobile }) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".guide-banner",
          start: "top 50%",
          end: isMobile ? "top 0%" : "top 10%",
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
            rotate: isMobile ? -120 : 60,
            xPercent: isMobile ? 0 : 150,
            yPercent: isMobile ? -150 : 0,
            opacity: 0,
          },
          {
            rotate: isMobile ? -120 : 0,
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          "#right-hand",
          {
            rotate: -60,
            xPercent: isMobile ? 0 : -150,
            yPercent: isMobile ? 150 : 0,
            opacity: 0,
          },
          {
            rotate: isMobile ? -60 : 0,
            xPercent: 0,
            yPercent: 0,
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
            yPercent: -150,
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
    let matchMedia = gsap.matchMedia();
    matchMedia.add(
      {
        isDesktop: `(min-width: 651px)`,
        isMobile: `(max-width: 650px)`,
      },
      (context) => {
        self.timeline(context.conditions);
      }
    );
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
  padding: 5vh 0;
  box-sizing: border-box;
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
      font-family: "Monument-Extended";
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

@media screen and (max-width: 1440px) {
  .guide {
    .guide-banner {
      .guide-tape {
        height: 67px;
        font-size: 36px;
        line-height: 43px;
      }
    }
  }
}

@media screen and (max-width: 1184px) {
  .guide {
    .guide-banner {
      .guide-ani {
        #guide-title {
          top: 27.71%;
        }
        #left-hand {
          top: 30.29%;
        }
        #right-hand {
          top: 30.29%;
        }
        #guide-text {
          font-size: 1.7vw;
          top: 72.65%;
          left: 37.2%;
          img {
            width: 1.7vw;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .guide {
    padding: 0;
    min-height: 520px;
    .guide-banner {
      .guide-tape {
        height: 45px;
        font-size: 24.5px;
        line-height: 29px;
      }
      .guide-ani {
        #guide-title {
          top: 32.71%;
        }
        #left-hand {
          top: 35.29%;
        }
        #right-hand {
          top: 35.29%;
        }
        #guide-text {
          top: 69.65%;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .guide {
    .guide-banner {
      .guide-ani {
        #guide-title {
          width: 75.93%;
          top: 27.71%;
          left: 13.87%;
        }
        #left-hand {
          width: 32%;
          top: 70.29%;
          left: 34.13%;
        }
        #right-hand {
          width: 32%;
          top: 6.29%;
          left: 34.13%;
        }
        #guide-text {
          font-size: 3.73vw;
          left: 23.73%;
          top: 63.65%;
          img {
            margin: 0 7.33vw;
            width: 3.73vw;
          }
        }
        #ux-design {
          width: 38.64%;
          top: 72.41%;
          left: -5.79%;
        }
        #frontend {
          width: 22.09%;
          top: 13.93%;
          left: 66.75%;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .guide {
    .guide-banner {
      .guide-tape {
        font-size: 20px;
        line-height: 28px;
        height: 40px;
        img {
          margin: 0 20px 2px;
        }
      }
      .guide-ani {
        #guide-title {
          width: 86.93%;
          top: 30.71%;
          left: 6.67%;
        }
        #left-hand {
          width: 180px;
          top: 64.29%;
          left: 27.13%;
        }
        #right-hand {
          width: 180px;
          top: 10.29%;
          left: 27.13%;
        }
        #guide-text {
          font-size: 4.73vw;
          top: 58.65%;
          left: 17.03%;
          img {
            margin: 0 7.33vw;
            width: 4.73vw;
          }
        }
        #ux-design {
          width: 50.64%;
          top: 72.41%;
          left: -8.79%;
        }
        #frontend {
          width: 34.09%;
          top: 15.93%;
          left: 63.75%;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .guide {
    .guide-banner {
      .guide-ani {
        #right-hand {
          top: 6.29%;
        }
        #guide-text {
          top: 61.65%;
        }
        #frontend {
          top: 12.93%;
        }
      }
    }
  }
}
</style>