<template>
  <component
    :is="type"
    :tag="tag"
    enter-active-class="starting"
    leave-active-class="ending"
    move-class="moving"
    v-bind="$attrs"
    v-on="hooks"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: "1s",
    },
    group: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    type() {
      return this.group ? "transition-group" : "transition";
    },
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
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = "absolute";
      }
    },
  },
};
</script>

<style scoped>
.starting {
  animation: growHeight ease-in-out forwards;
}
.ending {
  animation: growHeight ease-in-out reverse;
}
.moving {
  animation: growHeight 0.5s ease-in-out;
}

@keyframes growHeight {
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
