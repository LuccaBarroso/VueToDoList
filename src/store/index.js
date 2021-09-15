import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { textContent: "valha", done: true },
      { textContent: "aaa", done: false },
    ],
  },
  getters: {},
  mutations: {
    addTodo(state, textContent) {
      state.todos = [...state.todos, { textContent: textContent, done: false }];
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter((cur) => cur !== todo);
    },
    editTodo(state, { id, newText }) {
      console.log(newText);
      console.log(id);
      state.todos = state.todos.map(function(cur, i) {
        if (i == id) {
          return { textContent: newText, done: false };
        } else {
          return cur;
        }
      });
    },
    changeStatus(state, id) {
      console.log("changed status");
      state.todos = state.todos.map(function(cur, i) {
        if (i == id) {
          return { textContent: cur.textContent, done: !cur.done };
        } else {
          return cur;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
