<template>
  <div
    class="teste
"
  >
    <a href="https://github.com/LuccaBarroso" class=" todoLink">
      <appear-from-top duration="1s" appear>
        <p class=" mytitle">TODO</p>
      </appear-from-top>
      <appear-from-top duration="1s" appear>
        <div class="detailBar">
          <svg
            width="203"
            height="48"
            viewBox="0 0 203 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.32296"
              y1="44.4498"
              x2="100.45"
              y2="20.67703"
              stroke="#710000"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </appear-from-top>
    </a>
  </div>
</template>

<script>
import AppearFromTop from "./transitions/appearFromTop.vue";
export default {
  components: { AppearFromTop },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";
.teste {
  width: 100px;
}
.mytitle {
  color: $detailsC;
  font-family: $mainFont;
  font-size: 30px;
  font-weight: 900;
  padding-left: 10px;
  padding-top: 5px;
}
.todoLink {
  text-decoration: none;
  z-index: 1 !important;
}
.detailBar {
  position: absolute;
  top: 20px;
  left: 25px;
}
.todoLink:hover {
  .detailBar {
    animation: cross-logo 0.5s forwards ease-in-out;
  }
}
@keyframes cross-logo {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateX(-20px) translateY(-13px) rotate(14deg);
  }
}
</style>
