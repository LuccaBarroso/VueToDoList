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
  animation: growXY ease-in-out forwards;
}
.ending {
  animation: growXY ease-in-out reverse;
}
.moving {
  transition: all 1.5s ease-in-out;
}

@keyframes growXY {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
