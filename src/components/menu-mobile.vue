<template>
  <header class="menu-mobile">
    <router-link :to="{ name: 'home' }">
      <img
        v-if="menuVisibility != true"
        src="../assets/logo.svg"
        alt="HAUS logo"
      />
    </router-link>
    <button-menu @click="showMenu" v-if="menuVisibility != true" />
  </header>
  <mobileSidebar v-model:showSidebar="menuVisibility" />
</template>

<script>
import mobileSidebar from "@/components/mobile-sidebar.vue";
export default {
  name: "menu-mobile",
  components: {
    mobileSidebar,
  },
  data() {
    return {
      menuVisibility: false,
    };
  },
  methods: {
    showMenu() {
      this.menuVisibility = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
.menu-mobile {
  position: fixed;
  width: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-between;
  background-color: $primaryClear;
  z-index: 100;
}
</style>
