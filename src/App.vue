<template>
  <div id="app">
    <Navigation />
    <Content />
    <div class="footer">Copyright © 2022 HexSchool.All rights reserved.</div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Content from "./components/Content.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Content,
  },
};
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 84px;
  color: $primaryTextLight;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>