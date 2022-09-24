<template>
    <Header />
    <main>
      <Hero />
      <Feedbacks />
      <Catalog  
      :products="products"
      />
      <IntroToAperol />
    </main>
</template>

<script>
import Hero from '@/components/hero.vue'; 
import Header from '@/components/header.vue';
import Feedbacks from '@/components/feedbacks.vue'
import Catalog from '@/components/catalog.vue';
import IntroToAperol from '@/components/introToAperol.vue'
import products from './components/data/data'
  export default {
    components: {
      Hero,
      Header,
      Feedbacks,
      Catalog,
      IntroToAperol,
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
  font-family: 'Playfair Display', serif;
}
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

p {
  color: #141414;
}
</style>
