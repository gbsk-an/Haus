<template>
  <header class="menu-mobile">
    <router-link :to="{ name: 'home' }">
      <img
        v-if="menuVisibility != true"
        src="@/assets/logo.svg"
        alt="HAUS logo"
      />
    </router-link>
    <button-menu @click="showMenu" v-if="menuVisibility != true" />
  </header>
  <MobileNav v-model:showSidebar="menuVisibility" />
</template>

<script>
import MobileNav from "@/components/menu/MobileNav.vue";
export default {
  name: "MenuMobile",
  components: {
    MobileNav,
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
@import "@/styles/scss/variables";
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
