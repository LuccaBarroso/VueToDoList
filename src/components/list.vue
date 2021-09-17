<template>
  <div>
    <transition-group name="showCard" appear>
      <list-item
        v-for="{ textContent, done, id } in getTodos()"
        v-bind:key="id"
        class="listItem"
        :content="textContent"
        :id="id"
        :done="done"
        style="width: 100%"
      >
      </list-item>
    </transition-group>
  </div>
</template>

<script>
import listItem from "./listItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    listItem,
  },
  methods: {
    ...mapGetters(["getTodos"]),
  },
};
</script>

<style scoped lang="scss">
.listItem {
  width: 100%;
}
.showCard-enter-active {
  animation: aparecer 1s ease-in-out forwards;
}
.showCard-leave-active {
  animation: aparecer 1s ease-in-out reverse;
  //   transition: opacity 4s;
}
.showCard-enter, .showCard-leave-to /* .list-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
@keyframes aparecer {
  0% {
    opacity: 0;
    width: 80%;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 45px;
    width: 100%;
  }
}
</style>
