<template>
  <div class="h-select">
    <p class="h-select_title">Sort by:</p>
    <p @click="areOptionsVisible = !areOptionsVisible" class="h-select_selected">
      {{ selected }}
    </p>
    <div class="h-select_options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="h-select_options-item"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.h-select {
  position: relative;
  padding: 1em 0 0 0.6em;
  cursor: pointer;
  border: 1px solid $blackClear;
  width: 200px;
  &_title {
    margin: 0 0 1em;
    color: $themeBlack;
  }
  &_selected {
    color: $themeBlack;
  }
  &_options {
    position: absolute;
    left: 0;
    padding: 0.7em;
    width: 100%;
    border: 1px solid $themeBlack;
    background-color: $defaultWhite;
    z-index: 10;
    &-item {
      color: $themeBlack;
    }
  }
}
</style>
