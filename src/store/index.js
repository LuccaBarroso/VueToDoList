import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: ["valha", "valah"],
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter((cur) => cur !== todo);
    },
  },
  actions: {},
  modules: {},
});
