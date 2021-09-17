<template>
  <transition
    name="grow"
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
    v-bind="$attrs"
    v-on="hooks"
    appear
  >
    <slot> </slot>
  </transition>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: "1s",
    },
  },
  computed: {
    hooks() {
      return {
        beforeEnter: this.setDuration,
        afterEnter: this.cleanUpDuration,
        beforeLeave: this.setDuration,
        afterLeave: this.cleanUpDuration,
        ...this.$listeners,
      };
    },
  },
  methods: {
    setDuration(el) {
      el.style.animationDuration = this.duration;
    },
    cleanUpDuration(el) {
      el.style.animationDuration = "";
    },
  },
};
</script>

<style>
.fadeIn {
  animation: grow forwards ease-in-out;
}
.fadeOut {
  animation: grow reverse ease-in-out;
}

@keyframes grow {
  0% {
    opacity: 0;
    font-size: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
