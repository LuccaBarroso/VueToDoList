<template>
  <div class="addTodoBar">
    <v-form>
      <show-bigger-cards appear>
        <v-card elevation="24" class="contentTodo">
          <input
            type="text"
            class="mt-6"
            v-model="newTodo"
            placeholder="What is your next task?"
          />
          <button class="px-8 my-6" @click.prevent="addTodoToState">Add</button>
        </v-card>
      </show-bigger-cards>
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ShowBiggerCards from "./transitions/showBiggerCards.vue";
export default {
  components: { ShowBiggerCards },
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    ...mapGetters(["getNextId"]),
    addTodoToState() {
      if (this.newTodo !== "") {
        this.addTodo([
          this.newTodo
            .toString()
            .split(" ")
            .map(function(el) {
              return el.charAt(0).toUpperCase() + el.slice(1);
            })
            .join(" "),
          this.getNextId()
        ]);
        this.newTodo = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/components/VStepper/_variables.scss";
.addTodoBar {
  width: 80%;
  .contentTodo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $myGrey;
    border-radius: 30px;
    input {
      width: 90%;
      background-color: white;
      border-radius: 30px !important;
      font-family: $mainFont;
      font-weight: 500;
      font-size: 22px;
      outline: none;
      padding: 5px 15px;
    }
    button {
      background-color: $detailsC;
      color: white;
      font-family: $mainFont;
      font-weight: 600;
      font-size: 28px;
      border-radius: 30px !important;
    }
    button:hover {
      animation: grow 0.5s forwards ease-in-out;
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
}
</style>
