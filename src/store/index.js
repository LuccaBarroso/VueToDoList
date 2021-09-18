import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    getLength(state) {
      return state.todos.length;
    },
    getPercentage(state, getters) {
      const total = getters.getLength;
      const done = state.todos.reduce(function(acc, cur) {
        return cur.done ? acc + 1 : acc;
      }, 0);
      if (total === 0) {
        return "0%";
      }
      const percentage = (done / total) * 100;
      return percentage + "%";
    },
    getTodos(state) {
      return state.todos;
    },
    getNextId(state, getters) {
      let lastIndex = getters.getLength - 1;
      if (lastIndex < 0) {
        return 0;
      }
      let nextId = state.todos[lastIndex].id + 1;
      return nextId;
    },
  },
  mutations: {
    addTodo(state, [textContent, id]) {
      state.todos = [
        ...state.todos,
        { textContent: textContent, done: false, id: id },
      ];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(function(cur) {
        return cur.id != id;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo(state, { id, newText }) {
      state.todos = state.todos.map(function(cur) {
        if (cur.id == id) {
          return { textContent: newText, done: false, id: id };
        } else {
          return cur;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeStatus(state, id) {
      state.todos = state.todos.map(function(cur) {
        if (cur.id == id) {
          return { textContent: cur.textContent, done: !cur.done, id: id };
        } else {
          return cur;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteAll(state) {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    LocalStorageTodos(state) {
      const localTodos = JSON.parse(localStorage.getItem("todos"));
      if (localTodos) state.todos = localTodos;
    },
  },
  actions: {},
  modules: {},
});
