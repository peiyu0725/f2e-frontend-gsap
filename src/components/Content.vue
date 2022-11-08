<template>
  <div class="contenter">
    <Banner />
    <Guide1 />
    <Guide2 />
    <Level />
    <Illustrate />
    <Award />
  </div>
</template>
<script>
import Banner from "./Banner.vue";
import Guide1 from "./Guide1.vue";
import Guide2 from "./Guide2.vue";
import Level from "./Level.vue";
import Illustrate from './Illustrate.vue'
import Award from './Award.vue'

export default {
  name: "Content",
  components: {
    Banner,
    Guide1,
    Guide2,
    Level,
    Illustrate,
    Award
  },
};
</script>
<style lang="scss" scoped>
</style>