<template>
  <button class="deleteAll" @click="deleteAll">
    <appear-from-top v-if="showDelete" appear>
      <v-icon> fas fa-trash </v-icon>
    </appear-from-top>
    <appear-from-top v-if="showDelete" appear>
      <p>Delete</p>
    </appear-from-top>
    <appear-from-top v-if="showDelete" appear>
      <p>All</p>
    </appear-from-top>
  </button>
</template>

<script>
import { mapMutations } from "vuex";
import appearFromTop from "./transitions/appearFromTop.vue";
import { mapGetters } from "vuex";
export default {
  components: { appearFromTop },
  methods: {
    ...mapGetters(["getLength"]),
    ...mapMutations(["deleteAll"]),
  },
  computed: {
    showDelete() {
      return this.getLength() > 0;
    },
  },
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  z-index: 2;
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
