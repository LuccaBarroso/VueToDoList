<template>
  <div>
    <logo></logo>
    <v-spacer></v-spacer>
    <delete-all-btn />
  </div>
</template>

<script>
import deleteAllBtn from "./deleteAllBtn.vue";

import logo from "./logo.vue";
export default {
  components: { deleteAllBtn, logo },
};
</script>

<style scoped lang="scss"></style>
