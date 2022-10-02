<template>  
  <Home />
</template>

<script>
import Home from '@/components/home.vue'

  export default {
    components: {
      Home,
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
