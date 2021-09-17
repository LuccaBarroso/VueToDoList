<template>
  <div>
    <loading-bar />
    <div class="content">
      <div class="tabs"><add-tab></add-tab></div>
      <div class="tabs">
        <empty-list v-if="getLength === 0" />
        <list v-else />
      </div>
    </div>
  </div>
</template>

<script>
import addTab from "../components/addTab.vue";
import EmptyList from "../components/emptyList.vue";
import List from "../components/list.vue";
import LoadingBar from "../components/loadingBar.vue";
import { mapMutations, mapActions } from "vuex";
export default {
  components: { addTab, List, EmptyList, LoadingBar },
  methods: {
    ...mapMutations(["LocalStorageTodos"]),
    ...mapActions(["getLength"]),
  },
  created() {
    console.log("created");
    this.LocalStorageTodos();
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  .tabs {
    padding-bottom: 50px;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
@media only screen and (max-width: 1000px) {
  .content {
    flex-direction: column;
    .tabs {
      width: 90%;
    }
  }
}
</style>
