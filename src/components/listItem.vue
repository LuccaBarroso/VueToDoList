<template>
  <div class="listItem mx-auto">
    <v-form>
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
          <button
            v-if="!done"
            class="checkBtn"
            @click.prevent="changeStatus(id)"
          >
            <v-icon small class="iconBtn">fas fa-check</v-icon>
          </button>
          <button v-if="!done" class="editBtn" @click.prevent="editTxt">
            <v-icon small class="iconBtn">fas fa-edit</v-icon>
          </button>
          <button v-if="done" @click.prevent="changeStatus(id)" class="undoBtn">
            <v-icon small class="iconBtn">fas fa-undo</v-icon>
          </button>
          <button @click.prevent="removeTodo(id)" class="deleteBtn">
            <v-icon small class="iconBtn">fas fa-trash</v-icon>
          </button>
        </template>
        <button
          type="submit"
          v-else
          @click.prevent="saveEditing"
          class="saveBtn"
        >
          <v-icon small class="iconBtn">fas fa-save</v-icon>
        </button>
      </v-card>
    </v-form>
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
    ...mapMutations(["editTodo", "changeStatus", "removeTodo"]),
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
      this.localText = this.content;
      this.isEditing = false;
    },
    saveEditing() {
      this.isEditing = false;
      this.editTodo({ id: this.id, newText: this.localText });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";

.listItem {
  width: 100%;
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
    height: 35px;
    .flex-row {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    .listTextContent {
      outline: none;
      font-size: 24px;
      overflow: hidden;
      padding: 0 10px;
      cursor: default;
      color: white;
    }
    button {
      border-radius: 0px;
      background-color: $lighterGrey;
      height: 35px;
      width: 35px;
      min-width: 20px;
      margin-left: 2px;
      .iconBtn {
        color: $detailsC !important;
      }
    }
    button:hover {
      animation: grow 0.5s forwards ease-in-out;
    }
    .deleteBtn,
    .saveBtn {
      border-radius: 0 25px 25px 0 !important;
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
@media only screen and (max-width: 1000px) {
  .listItem {
    width: 95% !important;
    .listTextContent {
      width: 100%;
    }
  }
}
</style>
