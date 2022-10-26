<template>
  <button type="submit" class="btn-black">
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: "btn-black",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.btn-black {
  padding: 1.5em 4em;
  background: $themeBlackAlt;
  border: 1px solid $themeBlackAlt;
  border-radius: 0px;
  font-size: 12px;
  font-weight: 400;
  font-family: $themeFont;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: $defaultWhite;
  cursor: pointer;
}
</style>
