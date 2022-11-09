<template>
  <div class="contenter">
    <Banner />
    <Guide1 />
    <Guide2 />
    <Level />
    <Illustrate />
    <Award />
    <Question />
    <Sponsor />
  </div>
</template>
<script>
import Banner from "./Banner.vue";
import Guide1 from "./Guide1.vue";
import Guide2 from "./Guide2.vue";
import Level from "./Level.vue";
import Illustrate from './Illustrate.vue'
import Award from './Award.vue'
import Question from './Question.vue'
import Sponsor from './Sponsor.vue'

export default {
  name: "Content",
  components: {
    Banner,
    Guide1,
    Guide2,
    Level,
    Illustrate,
    Award,
    Question,
    Sponsor
  },
};
</script>
<style lang="scss" scoped>
.contenter {
  & > div {
    overflow-x: hidden;
  }
}
</style>