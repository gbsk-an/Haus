<template>
  <HeaderFooterLayout>
    <div class="wrapper">
      <div class="section-search">
        <div class="products">
          <p>
            Showing
            <span v-if="sortedProducts.length > 0" class="products-quantity">
              {{ sortedProducts.length }}
            </span>
            <span v-else class="products-quantity">
              {{ PRODUCTS.length }}
            </span>
            Products
          </p>
        </div>
      </div>
      <div class="container">
        <div class="container-sort">
          <select-custom
            :options="options"
            :selected="selected"
            @select="sortByOptions"
          />
          <div class="search-filed">
            <input
              type="text"
              class="search-filed_input"
              placeholder="search..."
              v-model="searchValue"
            />
            <button
              type="submit"
              class="search-filed_button"
              value="submit"
              @click="search(searchValue)"
            />
          </div>
          <btn-clear type="submit" value="submit" @click="clearFilters">
            Clear Filters
          </btn-clear>
          <div class="input-range">
            <input
              v-model.number="minPrice"
              @change="setRange"
              type="range"
              min="0"
              max="500"
              step="10"
            />
            <input
              v-model.number="maxPrice"
              @change="setRange"
              type="range"
              min="0"
              max="500"
              step="10"
            />
          </div>
          <div class="range-value">
            <p>Min: {{ minPrice }}</p>
            <p>Max: {{ maxPrice }}</p>
          </div>
        </div>
        <div class="container-catalog">
          <productItem
            v-for="product in filteredProducts"
            :key="product.name"
            :product="product"
            @addToCart="addToCart"
          />
        </div>
      </div>
      <cart-button />
    </div>
  </HeaderFooterLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductItem from "@/components/product-item.vue";
export default {
  name: "catalog",
  components: {
    ProductItem
  },
  props: {},
  data() {
    return {
      options: [
        { name: "Popular", value: "popular" },
        { name: "Rating", value: "rating" },
        { name: "Price-low-to-high", value: "price-low-to-high" },
        { name: "Price-high-to-low", value: "price-high-to-low" },
      ],
      selected: "...",
      minPrice: 0,
      maxPrice: 300,
      sortedProducts: [],
      searchValue: "",
      mobileWidth: false
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SEARCH_VALUE"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "GET_SEARCH_VALUE_VUEX",
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByOptions(option) {
      this.sortedProducts = [];
      let vm = this;
      this.selected = option.value;
      this.PRODUCTS.filter(function (item) {
        if (option.value === "rating") {
          vm.sortedProducts = [...vm.PRODUCTS].sort(
            (a, b) => a.rating - b.rating
          );
        } else if (option.value === "price-low-to-high") {
          vm.sortedProducts = [...vm.PRODUCTS].sort(
            (a, b) => a.price - b.price
          );
        } else if (option.value === "price-high-to-low") {
          vm.sortedProducts = [...vm.PRODUCTS].sort(
            (a, b) => b.price - a.price
          );
        } else if (option.value === "popular") {
          vm.sortedProducts = [...vm.PRODUCTS].sort(
            (a, b) => a.popular - b.popular
          );
        } else {
          vm.sortedProducts = [...vm.PRODUCTS].sort(
            (a, b) => a.popular - b.popular
          );
        }
      });
    },
    sortByPrice(option) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
    },
    setRange() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByPrice();
    },
    search(value) {
      this.GET_SEARCH_VALUE_VUEX(value);
    },
    sortProductsBySearch(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
    clearFilters() {
      this.searchValue = "";
      this.selected = "...";
      this.GET_SEARCH_VALUE_VUEX();
    },
    onResize() {
        this.mobileWidth = window.innerWidth <= 576;
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response) {
        this.sortByPrice();
        this.sortProductsBySearch(this.SEARCH_VALUE);
      }
    });
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearch(this.SEARCH_VALUE);
    },
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
.wrapper {
  margin: 0 auto;
  padding: 2em 0;
  max-width: 1710px;
  @media (max-width: (576px)) {
    padding: 0;
  }
}
.container {
  display: flex;
  gap: 1em;
  @media (max-width: (576px)) {
    flex-direction: column;
  }

  &-catalog {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2em;
    @media (max-width: (576px)) {
      justify-content: center;
  }
  }

  &-sort {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (max-width: (576px)) {
      width: 100%;
      padding: 0 1em;
    }
  }
}

.section-search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2em;
  gap: 0 2em;
  @media (max-width: (576px)) {
    margin: 0;
  }
}

.search-filed {
  display: flex;
  border: 1px solid $themeBlack;

  &_input {
    padding: 1em;
    width: 100%;
    background-color: transparent;
    color: $themeGrey;
    appearance: none;
    border: none;
    border-radius: 0;
    outline: 0;
    outline-offset: 0;
    font-family: $themeFont;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.12px;
  }
  &_button {
    position: relative;
    margin-left: -3em;
    padding: 1em 1.2em;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 32px;
      background-image: url("../assets/search.svg");
      background-repeat: no-repeat;
      background-position: center;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
}
.products {
  & > p {
    margin: 0;
  }
  &-quantity {
    font-size: 20px;
    font-weight: bold;
  }
}
.input-range {
  position: relative;
  margin-top: 3em;

  & > input {
    width: 100%;
    accent-color: $themeGreyAlt;
  }
}
.input-range svg,
.input-range input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.range-value {
  display: flex;
  justify-content: space-between;
  & > p {
    margin: 0;
    color: $themeBlack;
    font-size: 17px;
    font-weight: 400;
  }
}
</style>
