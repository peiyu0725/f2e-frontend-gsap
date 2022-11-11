module.exports = {
  publicPath: '/f2e-gsap/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
}