<template>
  <div class="bar">
    <div class="backBar"></div>
    <div class="loadingBar" :style="{ height: getPercentage() }"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapGetters(["getPercentage"]),
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";

.bar {
  height: 80%;
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  .backBar {
    height: 100%;
    width: 2px;
    background-color: $myGrey;
    position: absolute;
    right: 11.5px;
  }
  .loadingBar {
    width: 5px;
    background-color: $detailsC;
    position: absolute;
    right: 10px;
  }
}
</style>
