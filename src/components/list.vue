<template>
  <div class="listItem mx-auto">
    <v-card elevation="24" class="listContent">
      <input class="listTextContent" type="text" :value="content" />
      <v-spacer></v-spacer>
      <v-btn class="checkBtn Btn"><v-icon dense>fas fa-check</v-icon></v-btn>
      <v-btn class="editBtn Btn"><v-icon dense>fas fa-edit</v-icon></v-btn>
      <v-btn class="deleteBtn Btn"><v-icon dense>fas fa-times</v-icon></v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";

.listItem {
  width: 80%;
  padding: 5px 0;
  .listContent {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $myGrey;
    border-radius: 30px;
    height: 30px;
    .listTextContent {
      width: 100%;
      font-family: $mainFont;
      font-size: 20px;
      overflow: hidden;
      padding: 0 10px;
      color: white;
    }
    .Btn {
      border-radius: 0px;
      background-color: $lighterGrey;
      color: $detailsC;
      height: 30px;
    }
    .Btn:hover {
      animation: grow 0.5s forwards ease-in-out;
    }
    .deleteBtn {
      border-radius: 0 25px 25px 0;
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
}
</style>
