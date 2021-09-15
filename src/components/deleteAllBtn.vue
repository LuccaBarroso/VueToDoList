<template>
  <button class="deleteAll" @click="deleteAll">
    <v-icon> fas fa-trash </v-icon>
    <p>Delete</p>
    <p>All</p>
  </button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
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
