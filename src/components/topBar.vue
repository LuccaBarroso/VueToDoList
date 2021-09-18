<template>
  <div>
    <a href="https://github.com/LuccaBarroso" class="logo">
      <appear-from-top duration="1s" appear>
        <h1 class="mytitle heading-3">TODO</h1>
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
    <v-spacer></v-spacer>
    <delete-all-btn />
  </div>
</template>

<script>
import deleteAllBtn from "./deleteAllBtn.vue";
import AppearFromTop from "./transitions/appearFromTop.vue";
export default {
  components: { deleteAllBtn, AppearFromTop },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";
.mytitle {
  color: $detailsC;
  font-family: $mainFont;
  font-weight: 900;
  padding-left: 10px;
  padding-top: 5px;
}
.detailBar {
  position: absolute;
  top: 20px;
  left: 25px;
}
.logo {
  text-decoration: none;
}
.logo:hover {
  .detailBar {
    animation: cross-logo 0.5s forwards ease-in-out;
  }
}
@keyframes cross-logo {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateX(-20px) translateY(-10px) rotate(14deg);
  }
}
</style>
