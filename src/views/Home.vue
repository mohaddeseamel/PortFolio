<template>
  <div class="home">
    <presentation />
    <AboutMe />
    <Works />
    <FindMe />
  </div>
</template>

<script>
import presentation from "../components/presentation.vue";
import AboutMe from "../components/AboutMe.vue";
import Works from "../components/Works.vue";
import FindMe from "../components/FindMe.vue";

export default {
  name: "Home",

  components: {
    presentation,
    AboutMe,
    Works,
    FindMe,
  },

  // scss: {
  //   additionalData: `
  //   @import "../assets/sass/style.scss";
  // `,
  // },
};
</script>
