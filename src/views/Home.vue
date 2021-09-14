<template>
  <div>
    <div class="content">
      <v-row class="row">
        <v-col cols="6" class="tabs"> <add-tab></add-tab> </v-col>
        <v-col cols="6" class="tabs">
          <div v-for="td in getTodos" v-bind:key="td" style="width: 100%">
            <list :content="td" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import addTab from "../components/addTab.vue";
import List from "../components/list.vue";
export default {
  components: { addTab, List },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .row {
    height: 100%;
    .tabs {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
