<template>
  <div>
    <h1 class="mytitle heading-3">TODO</h1>
    <div class="detailBar">
      <svg
        width="203"
        height="48"
        viewBox="0 0 203 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="4.32296"
          y1="44.4498"
          x2="140.45"
          y2="10.67703"
          stroke="#710000"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "~vuetify/src/components/VStepper/_variables.scss";
.mytitle {
  color: $detailsC;
  font-family: $mainFont;
  font-weight: 900;
  padding-left: 10px;
  padding-top: 5px;
}
.detailBar {
  position: absolute;
  top: 20px;
  left: 25px;
}
</style>
