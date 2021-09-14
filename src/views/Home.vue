<template>
  <div>
    <div class="content">
      <v-row class="row">
        <v-col cols="6" class="tabs"> <add-tab></add-tab> </v-col>
        <v-col cols="6" class="tabs"> </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import addTab from "../components/addTab.vue";
export default {
  components: { addTab },
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
    }
  }
}
</style>
