import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    getTotal(state) {
      return state.todos.length;
    },
    getPercentage(state, getters) {
      const total = getters.getTotal;
      const done = state.todos.reduce(function(acc, cur) {
        return cur.done ? acc + 1 : acc;
      }, 0);
      if (total === 0) {
        return "0%";
      }
      const percentage = (done / total) * 100;
      return percentage + "%";
    },
    getLength(state) {
      return state.todos.length;
    },
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, textContent) {
      state.todos = [...state.todos, { textContent: textContent, done: false }];
      localStorage.setItem("todos", JSON.stringify(this.getTodos));
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(function(cur, i) {
        return i != id;
      });
      localStorage.setItem("todos", JSON.stringify(this.getTodos));
    },
    editTodo(state, { id, newText }) {
      state.todos = state.todos.map(function(cur, i) {
        if (i == id) {
          return { textContent: newText, done: false };
        } else {
          return cur;
        }
      });
      localStorage.setItem("todos", JSON.stringify(this.getTodos));
    },
    changeStatus(state, id) {
      state.todos = state.todos.map(function(cur, i) {
        if (i == id) {
          return { textContent: cur.textContent, done: !cur.done };
        } else {
          return cur;
        }
      });
      localStorage.setItem("todos", JSON.stringify(this.getTodos));
    },
    deleteAll(state) {
      console.log("delete all");
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(this.getTodos));
    },
    LocalStorageTodos(state) {
      const localTodos = JSON.parse(localStorage.getItem("todos"));
      if (localTodos) state.todos = localTodos;
    },
  },
  actions: {},
  modules: {},
});
