<template>
  <Header />
  <div class="catalog-layout">
    <slot> </slot>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "catalog-layout",
  components: {
    Header,
    Footer,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.catalog-layout {
  padding-top: 4em;
}
</style>
