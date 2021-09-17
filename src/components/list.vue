<template>
  <div>
    <div v-for="(td, i) in getTodos()" v-bind:key="i" style="width: 100%">
      <listItem :content="td.textContent" :id="i" :done="td.done" />
    </div>
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

<style scoped lang="scss"></style>
