<template>
  <div>
    <transition name="grow" appear>
      <p>It seems like your List is empty!</p>
    </transition>
    <transition name="growdelay" appear>
      <p>Add a todo!</p>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";
div {
  text-align: center;
  font-weight: 300;
  font-size: 30px;
}
.grow-enter-active {
  animation: grow 1s ease-in-out forwards;
}
.grow-leave-active {
  animation: grow 1s ease-in-out reverse;
  //   transition: opacity 4s;
}
.grow-enter, .grow-leave-to /* .list-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
@keyframes grow {
  0% {
    opacity: 0;
    font-size: 0;
  }
  100% {
    opacity: 1;
  }
}
.growdelay-enter-active {
  animation: growdelay 1.5s ease-in-out forwards;
}
.growdelay-leave-active {
  animation: growdelay 1.5s ease-in-out reverse;
  //   transition: opacity 4s;
}
.growdelay-enter, .growdelay-leave-to /* .list-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
@keyframes growdelay {
  0% {
    opacity: 0;
    font-size: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
