<template>
  <div>
    <grow-txt appear>
      <p>It seems like your List is empty!</p>
    </grow-txt>
    <grow-txt duration="1.5s" appear>
      <p>Add a todo!</p>
    </grow-txt>
  </div>
</template>

<script>
import growTxt from "./transitions/growTxt.vue";
export default {
  components: {
    growTxt,
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";
div {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
    font-weight: 300;
    font-size: 30px;
  }
}
@media only screen and (max-width: 1000px) {
  div {
    height: auto;
    p {
      font-size: 20px;
    }
  }
}
</style>
