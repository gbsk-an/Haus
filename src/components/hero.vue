<template>
    <div class="hero">
        <div class="">
            <img src="../assets/background.png" class="hero-background" />
        </div>
        <div class="hero-text">
            <h1 class="hero-title">Alcohol for the<br>modern drinker</h1>
            <p class="hero-description">Light and refreshing flavors made with real, clean ingredients you<br>can feel good about. Just pour, sip, and enjoy.</p>
            <ButtonTransparent>Shop all</ButtonTransparent>
        </div>
    </div>
</template>

<script>
import ButtonTransparent from './UI/buttonTransparent.vue';

    export default {        
        name: "Hero",
        components: {
            ButtonTransparent
        },
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>
    .hero {
        display: flex;
        gap: 9em;
        background-color: #996B60;
    }
    .hero-text {
        margin: 18em 0 6em;
    }
    .hero-title {
        margin: 0 0 1.2em;
        color: #FFFFFF;
        font-size: 73px;
        line-height: 96px;
    }
    .hero-description {
        margin: 0 0 1em;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 32px;
    }
    .hero-background {
        z-index: -100;
    }
</style>