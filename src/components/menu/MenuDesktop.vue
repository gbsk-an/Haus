<template>
  <header class="navigation">
    <div class="navigation-flex">
      <router-link :to="{ name: 'catalog' }" class="navigation-item">
        <div>catalog</div>
      </router-link>
      <a href="#" class="navigation-item">membership</a>
      <a href="#" class="navigation-item">our story</a>
    </div>
    <div class="logo">
      <Loading v-if="isLoading"></Loading>
      <router-link :to="{ name: 'home' }" class="navigation-item">
        <img src="@/assets/logo.svg" class="navigation-item" alt="HAUS logo" />
      </router-link>
    </div>
    <div class="navigation-flex">
      <a href="#" class="navigation-item">newsletter</a>
      <router-link :to="{ name: 'authorization' }" class="navigation-item">
        <div>account</div>
      </router-link>
      <router-link :to="{ name: 'Cart' }" class="navigation-item">
        <div>
          cart <span class="cart-items">({{ CART.length }})</span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/loading.vue";
export default {
  name: "MenuDesktop",
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.navigation {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2em 2em 1em;
  background-color: $primaryClear;
  z-index: 100;

  &-flex {
    display: flex;
  }

  &-item {
    color: $themeWhite;
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-right: 3em;
    }
  }
}

.cart-items {
  font-size: 14px;
  font-weight: 700;
}
</style>
