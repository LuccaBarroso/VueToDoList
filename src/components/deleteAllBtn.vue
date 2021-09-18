<template>
  <button class="deleteAll" @click="deleteAll">
    <appear-from-top appear>
      <v-icon> fas fa-trash </v-icon>
    </appear-from-top>
    <appear-from-top appear>
      <p>Delete</p>
    </appear-from-top>
    <appear-from-top appear>
      <p>All</p>
    </appear-from-top>
  </button>
</template>

<script>
import { mapMutations } from "vuex";
import appearFromTop from "./transitions/appearFromTop.vue";
export default {
  components: { appearFromTop },
  methods: {
    ...mapMutations(["deleteAll"]),
  },
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  p {
    font-size: 15px;
    margin: 0;
    font-weight: 500;
  }
}
button:hover {
  animation: grow 0.5s ease-in-out forwards;
}
@keyframes grow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
