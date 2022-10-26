<template>
  <MenuMobile v-if="mobileWidth" />
  <MenuDesktop v-else />
</template>

<script>
import MenuDesktop from "@/components/menu-desktop.vue"
import Loading from "@/components/loading.vue";
import MenuMobile from "@/components/menu-mobile.vue"
export default {
  name: "h-header",
  components: {
    Loading,
    MenuDesktop,
    MenuMobile
  },
  data: () => ({
    mobileWidth: false,
  }),
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
        this.mobileWidth = window.innerWidth <= 576;
    }
  }
};
</script>

<style lang="scss" scoped>


</style>
