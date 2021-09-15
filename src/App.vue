<template>
  <v-app class="backG">
    <top-bar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import topBar from "./components/topBar.vue";
export default {
  components: { topBar },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";
.backG,
body {
  background-color: $backgroundC !important;
}
* {
  font-family: $mainFont;
}
</style>
