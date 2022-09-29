<template>
    <div class="hero">
        <div class="hero-background">
            <img 
                src="../assets/background.png" 
                class="hero-background_image" 
                alt="background"
            />
        </div>
        <div class="hero-text">
            <h1 class="hero-text_title">Alcohol for the<br />modern drinker</h1>
            <p class="hero-text_description">Light and refreshing flavors made with real, clean ingredients you<br />can feel good about. Just pour, sip, and enjoy.</p>
            <ButtonTransparent>Shop all</ButtonTransparent>
        </div>
    </div>
</template>

<script>
import ButtonTransparent from '@/components/UI/button-transparent.vue';
    export default {        
        name: "hero",
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

<style lang="scss" scoped>
.hero {
    display: flex;
    gap: 9em;
    background-color: #996B60;
    &-background {
        &_image {
            height: 100%;
        }
    }

    &-text {
        margin: 15em 0 6em;
        &_title {
            margin: 0 0 1.2em;
            color: #f7f7f7;
            font-size: 73px;
            font-weight: 700;
            line-height: 96px;
        }
        &_description {
            margin: 0 0 1em;
            color: #f7f7f7;
            font-size: 18px;
            font-weight: 100;
            line-height: 32px;
        }
    }
}
</style>