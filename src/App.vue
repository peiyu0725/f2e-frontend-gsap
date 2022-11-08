<template>
  <div id="app">
    <Navigation />
    <Content />
    <!-- <div>Copyright © 2022 HexSchool.All rights reserved.</div> -->
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
  methods: {
    applyScrolling(arr, cb) {
      for (var i = 0; i < arr.length; i++) {
        cb.call(null, i, arr[i]);
      }
    },
  },
  mounted() {
    // 注意如果有使用 router 那麼自訂一個 class 可以避免一些問題
    var anchors = document.querySelectorAll("a[href^='#']");
    if (window.scrollTo) {
      this.applyScrolling(anchors, function (index, el) {
        var target = document.getElementById(
          el.getAttribute("href").substring(1)
        );

        el.addEventListener("click", function (e) {
          e.preventDefault();
          // 這邊跟新的 method 參數是不同的。
          window.scrollTo(0, target.offsetTop);
        });
      });
    }
  },
};
</script>
