<template>
  <div class="list" :style="{ height: tooLarge }">
    <show-cards group appear>
      <list-items
        v-for="{ textContent, done, id } in getTodos()"
        v-bind:key="id"
        class="listItem"
        :content="textContent"
        :id="id"
        :done="done"
        style="width: 100%"
      >
      </list-items>
    </show-cards>
  </div>
</template>

<script>
import listItems from "./listItem.vue";
import { mapGetters } from "vuex";
import showCards from "./transitions/showCards.vue";
export default {
  components: {
    listItems,
    showCards,
  },
  methods: {
    ...mapGetters(["getTodos", "getLength"]),
  },
  computed: {
    tooLarge() {
      return this.getLength() > 17 ? "auto" : "80vh";
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  .listItem {
    width: 100%;
  }
}
@media only screen and (max-width: 1000px) {
  .list {
    height: auto !important;
  }
}
</style>
