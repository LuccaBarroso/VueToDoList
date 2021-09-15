<template>
  <div class="listItem mx-auto">
    <v-card
      v-click-outside="clickOutside"
      elevation="24"
      :class="{ listContent: true, active: done }"
    >
      <div @click="switchStatus">
        <input
          class="listTextContent"
          type="text"
          ref="email"
          v-model="localText"
          :disabled="!isEditing"
        />
      </div>
      <v-spacer></v-spacer>
      <template v-if="!isEditing">
        <v-btn v-if="!done" class="checkBtn Btn" @click="changeStatus(id)"
          ><v-icon x-small>fas fa-check</v-icon></v-btn
        >
        <v-btn v-if="!done" class="editBtn Btn" @click.prevent="editTxt"
          ><v-icon x-small>fas fa-edit</v-icon></v-btn
        >
        <v-btn v-if="done" @click="changeStatus(id)" class="undoBtn Btn"
          ><v-icon x-small>fas fa-undo</v-icon></v-btn
        >
        <v-btn class="deleteBtn Btn"
          ><v-icon x-small>fas fa-trash</v-icon></v-btn
        >
      </template>
      <v-btn v-else @click="saveEditing" class="saveBtn Btn"
        ><v-icon x-small>fas fa-save</v-icon></v-btn
      >
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return { isEditing: false, localText: this.content };
  },
  props: {
    content: String,
    id: Number,
    done: Boolean,
  },
  methods: {
    ...mapMutations(["editTodo", "changeStatus"]),
    switchStatus() {
      if (!this.isEditing) {
        this.changeStatus(this.id);
      }
    },
    editTxt() {
      this.isEditing = true;
      this.$nextTick(() => this.$refs.email.focus());
    },
    clickOutside() {
      if (this.isEditing) this.cancelEditing();
    },
    cancelEditing() {
      console.log("cancelado");
      this.localText = this.content;
      this.isEditing = false;
    },
    saveEditing() {
      console.log("salvo");
      this.isEditing = false;
      this.editTodo({ id: this.id, newText: this.localText });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";

.listItem {
  width: 80%;
  padding: 5px 0;
  .active {
    .listTextContent {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }
  .listContent {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $myGrey;
    border-radius: 30px;
    height: 30px;
    .flex-row {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    .listTextContent {
      outline: none;
      width: 100%;
      font-family: $mainFont;
      font-size: 20px;
      overflow: hidden;
      padding: 0 10px;
      cursor: default;
      color: white;
    }
    .Btn {
      border-radius: 0px;
      background-color: $lighterGrey;
      color: $detailsC;
      height: 30px;
      width: 20px;
      min-width: 20px;
    }
    .Btn:hover {
      animation: grow 0.5s forwards ease-in-out;
    }
    .deleteBtn,
    .saveBtn {
      border-radius: 0 25px 25px 0;
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
}
</style>
