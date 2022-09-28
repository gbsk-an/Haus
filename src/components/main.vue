<template>
    <main>
        <Hero />
        <Feedbacks />
        <router-view></router-view>
        <!-- <Catalog  />
        <Cart 
            v-if="CART.length" 
            :cart_data="CART"
        /> -->
        <IntroToAperol />
        <FollowUs />
    </main>
</template>

<script>
import Hero from '@/components/hero.vue'; 
import Feedbacks from '@/components/feedbacks.vue'
// import Catalog from '@/components/catalog.vue';
// import Cart from '@/components/cart.vue'
import IntroToAperol from '@/components/introToAperol.vue'
import FollowUs from '@/components/followUs.vue'
import { mapGetters } from 'vuex';

    export default {
        name: "Main",
        components: {
            Hero,            
            Feedbacks,
            // Catalog,
            // Cart,
            IntroToAperol,
            FollowUs,            
        },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
    }
</script>

<style scoped>

</style>