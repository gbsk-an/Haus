<template>
  <Header />
  <div class="cart-layout">
    <slot> </slot>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "cart-layout",
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
.cart-layout {
  padding-top: 6em;
}
</style>
