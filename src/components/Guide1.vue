<template>
  <div class="guide">
    <div class="guide-block block-1">
      <img id="guide-rect1" src="@/assets/images/question5.svg" />
      <img id="guide-star" src="@/assets/images/question6.svg" />
      <img id="guide-text1" src="@/assets/images/question9.svg" />
      <img id="guide-quest" src="@/assets/images/question1.svg" />
    </div>
    <div class="guide-block block-2">
      <img id="guide-surprise" src="@/assets/images/question2.svg" />
      <img id="guide-union1" src="@/assets/images/question8.svg" />
      <img id="guide-text2" src="@/assets/images/question10.svg" />
    </div>
    <div class="guide-block block-3">
      <img id="guide-text3" src="@/assets/images/question11.svg" />
      <img id="guide-rect2" src="@/assets/images/question4.svg" />
      <img id="guide-triangle" src="@/assets/images/question7.svg" />
      <img id="guide-union2" src="@/assets/images/question3.svg" />
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "Guide1",
  methods: {
    animated(element) {
      gsap.fromTo(
        element,
        { scale: 0, opacity: 0, visibility: "hidden" },
        {
          duration: 1.5,
          scale: 1,
          visibility: "visible",
          opacity: 1,
          ease: "bounce.out",
          yoyo: true,
          overwrite: "auto",
        }
      );
    },
  },
  mounted() {
    const self = this;
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".guide-block").forEach((ele) => {
      ScrollTrigger.create({
        trigger: ele,
        onEnter: function () {
          self.animated(ele);
        },
        onLeaveBack: function () {
          gsap.set(ele, { scale: 0, opacity: 0, visibility: "hidden" });
        },
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.guide {
  height: 100vh;
  position: relative;
  &-block {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    height: 33.33vh;
    & > * {
      position: absolute;
    }
  }
  .block-1 {
    #guide-rect1 {
      width: 20%;
      left: 23.82%;
      top: 5.19vh;
    }
    #guide-star {
      width: 4.38%;
      left: 47.21%;
      top: 8.47vh;
    }
    #guide-text1 {
      width: 37.5%;
      left: 19.85%;
      top: 18.26vh;
    }
    #guide-quest {
      width: 12.09%;
      left: 59.97%;
      top: 14.74vh;
    }
  }
  .block-2 {
    #guide-surprise {
      width: 17.78%;
      left: 18.32%;
      top: 14.13vh;
    }
    #guide-union1 {
      width: 2.37%;
      left: 39.57%;
      top: 12.26vh;
    }
    #guide-text2 {
      width: 34.97%;
      left: 44.92%;
      top: -0.8vh;
    }
  }
  .block-3 {
    #guide-text3 {
      width: 37.58%;
      left: 24.92%;
      top: 4.42vh;
    }
    #guide-rect2 {
      width: 24.29%;
      left: 39.15%;
      top: -9.99vh;
    }
    #guide-triangle {
      width: 10.53%;
      left: 66.89%;
      top: -10.98vh;
    }
    #guide-union2 {
      width: 13.46%;
      left: 66.58%;
      top: 5.16vh;
    }
  }
}

@media screen and (max-width: 650px) {
  .guide {
    &-block {
      max-width: 375px;
    }
    .block-1 {
      #guide-rect1 {
        width: 105.21px;
        left: 70px;
        top: 9.19vh;
      }
      #guide-star {
        width: 23.69px;
        left: 204px;
        top: 11.47vh;
      }
      #guide-text1 {
        width: 274.46px;
        left: 23px;
        top: 18.26vh;
      }
      #guide-quest {
        width: 72.09px;
        left: 251px;
        top: 10.19vh;
      }
    }
    .block-2 {
      #guide-surprise {
        width: 96.81px;
        left: 6.4%;
        top: 14.13vh;
      }
      #guide-union1 {
        width: 12.85px;
        left: 24.27%;
        top: 5.26vh;
      }
      #guide-text2 {
        width: 237.37px;
        left: 29.33%;
        top: 0.8vh;
      }
    }
    .block-3 {
      #guide-text3 {
        width: 271.2px;
        left: 3.47%;
        top: 0.42vh;
      }
      #guide-rect2 {
        width: 131.54px;
        left: 28.98%;
        top: -7.99vh;
      }
      #guide-triangle {
        width: 57.02px;
        left: 70.4%;
        top: -10.98vh;
      }
      #guide-union2 {
        width: 73.31px;
        left: 69.33%;
        top: 11.16vh;
      }
    }
  }
}
</style>