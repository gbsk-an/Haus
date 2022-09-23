<template>
    <Header />
    <main>
      <Hero />
      <Catalog  
      :products="products"
      />
    </main>
</template>

<script>
import Hero from '@/components/hero.vue'; 
import Header from '@/components/header.vue';
import Catalog from '@/components/catalog.vue';
import products from './components/data/data'
  export default {
    components: {
      Hero,
      Header,
      Catalog,
      products,
    },
    data() {
      return {
        products
      }
    },
    methods: {}

  }
</script>

<style>
body {
  margin: 0;
  background-color: #fff;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
  "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

</style>
