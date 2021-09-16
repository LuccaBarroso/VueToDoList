<template>
  <div>
    <loading-bar />
    <div class="content">
      <div class="tabs"><add-tab></add-tab></div>
      <div class="tabs">
        <empty-list v-if="getTodos.length === 0" />
        <div v-for="(td, i) in getTodos" v-bind:key="i" style="width: 100%">
          <list :content="td.textContent" :id="i" :done="td.done" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addTab from "../components/addTab.vue";
import EmptyList from "../components/emptyList.vue";
import List from "../components/list.vue";
import LoadingBar from "../components/loadingBar.vue";
export default {
  components: { addTab, List, EmptyList, LoadingBar },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  .tabs {
    padding: 150px 0;
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
