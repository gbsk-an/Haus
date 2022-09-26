<template>
    <Header />
      <main>
        <Hero />
        <Feedbacks />
        <Catalog  />
        <IntroToAperol />
      </main>
    <Footer /> 
</template>

<script>
import Hero from '@/components/hero.vue'; 
import Header from '@/components/header.vue';
import Feedbacks from '@/components/feedbacks.vue'
import Catalog from '@/components/catalog.vue';
import IntroToAperol from '@/components/introToAperol.vue'
import Footer from './components/footer.vue';

  export default {
    components: {
      Hero,
      Header,
      Feedbacks,
      Catalog,
      IntroToAperol,
      Footer
    },
    data() {
      return {

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
