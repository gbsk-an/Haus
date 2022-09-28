<template>
  <Header />
  <Main />
  <Footer /> 
</template>

<script>
import Header from '@/components/header.vue';
import Main from '@/components/main.vue'
import Footer from './components/footer.vue';

  export default {
    components: {
    Header,
    Main,
    Footer,
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
</style>
