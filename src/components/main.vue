<template>
    <main>
        <hero />
        <feedbacks />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <intro-to-aperol />
        <follow-us />
    </main>
</template>

<script>
import Hero from '@/components/hero.vue'; 
import Feedbacks from '@/components/feedbacks.vue'
import IntroToAperol from '@/components/intro-to-aperol.vue'
import FollowUs from '@/components/follow-us.vue'

    export default {
        name: "main",
        components: {
            Hero,            
            Feedbacks,
            IntroToAperol,
            FollowUs,            
        },
        props: {},
        data() {
            return {}
        },
        computed: {},
    }
</script>

<style scoped>

</style>