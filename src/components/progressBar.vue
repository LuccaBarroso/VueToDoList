<template>
  <grow-height duration="1.5s" appear>
    <div class="bar">
      <div class="backBar"></div>
      <grow-height duration="1s" appear>
        <div class="loadingBar" :style="{ height: getPercentage() }"></div>
      </grow-height>
    </div>
  </grow-height>
</template>

<script>
import { mapGetters } from "vuex";
import growHeight from "./transitions/growHeight.vue";
export default {
  components: { growHeight },
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
