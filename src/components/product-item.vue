<template>
  <div class="product">
    <div class="product-brand">
      <p class="product-brand_title">{{ product.brand }}</p>
    </div>
    <div class="product-name">
      <p class="product-name_title">{{ product.name }}</p>
    </div>
    <div class="product-attribute">
      <p class="product-attribute_title">{{ product.attribute }}</p>
    </div>
    <div class="product-price">
      <p class="product-price_value">${{ product.price }}.00</p>
    </div>
    <div class="product-image">
      <img :src="require('../assets/' + product.image)" alt="product image" />
    </div>
    <btn-black @click="addToCart">Add to cart</btn-black>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.product {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  width: 300px;
  background-color: $themeWhiteAlt;
  border-radius: 10px;
  box-shadow: $shadowDefault;

  &-brand {
    text-align: center;
    &_title {
      margin: 0.6em 0 0.8em;
      color: $themeBlack;
      font-size: 22px;
      font-weight: 700;
    }
  }

  &-name {
    text-align: center;
    &_title {
      margin: 0 0 2em;
      color: $themeBlack;
      font-size: 17px;
      font-weight: 400;
    }
  }

  &-attribute {
    text-align: center;
    &_title {
      margin: 0 0 0.8em;
      color: $themeBlack;
      font-size: 17px;
      font-weight: 400;
    }
  }

  &-price {
    text-align: center;
    &_value {
      margin: 1em 0;
      color: $themeBlack;
      font-size: 19px;
      font-weight: 700;
    }
  }

  &-image {
    margin: 1em 0;
    height: 100%;
    background-color: transparent;
  }
}
</style>
