<template>
  <div class="question">
    <div class="question-title">Q&A</div>
    <div class="question-tab btn-wrapper">
      <button
        v-for="tab in tabs"
        class="menu-btn"
        :class="{ active: avtiveTab === tab.value }"
        :key="tab.value"
        @click="onChangeTab(tab.value)"
      >
        {{ tab.text }}
      </button>
    </div>
    <transition-group tag="div" class="question-card" name="fade">
      <div v-for="(item, index) in list" :key="item.q">
        <div class="question-card__number">Q{{ index + 1 }}</div>
        <div>
          <div class="question-card__title">{{ item.q }}</div>
          <div class="question-card__text">{{ item.a }}</div>
        </div>
      </div>
    </transition-group>
    <button class="signup-btn">立即報名</button>
  </div>
</template>
<script>
import questions from "./questions.js";
export default {
  name: "Question",
  computed: {
    list() {
      return questions[this.avtiveTab];
    },
  },
  data() {
    return {
      tabs: [
        { text: "常見問題", value: "common" },
        { text: "UI 設計師常見問題", value: "ui" },
        { text: "前端工程師常見問題", value: "frontend" },
        { text: "團體組常見問題", value: "team" },
      ],
      avtiveTab: "common",
    };
  },
  methods: {
    onChangeTab(val) {
      this.avtiveTab = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  &-title {
    font-family: "Monument-Extended";
    color: $primaryTextLight;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: 0.1em;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    margin: 60px 0;
  }
  &-tab {
    width: 100%;
    text-align: center;
  }
  &-card {
    margin-top: 32px;
    width: 881px;
    background-color: #ffffff;
    border-radius: 32px;
    padding: 80px;
    box-sizing: border-box;
    color: $bgColor2;
    & > div {
      display: flex;
      &:not(:last-of-type) {
        padding-bottom: 60px;
      }
    }
    &__number {
      font-family: "Monument-Extended";
      color: $primaryColor3;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: 0.1em;
      padding-right: 24px;
    }
    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      padding-bottom: 16px;
    }
    &__text {
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
    }
  }
  .signup-btn {
    width: 240px;
    margin: 60px 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media screen and (max-width: 1104px) {
  .question {
    &-card {
      width: 688px;
      padding: 24px;
      & > div {
        flex-direction: column;
      }
      &__number {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .question {
    &-card {
      width: calc(100% - 32px);
    }
  }
}
</style>