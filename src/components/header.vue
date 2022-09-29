<template>
    <header class="navigation hheader">
        <div>
            <a href="#" class="navigation-item">shop</a>
            <a href="#" class="navigation-item">membership</a>
            <a href="#" class="navigation-item">our story</a>
        </div>
        <div class="logo">
            <img src="../assets/logo.svg" class="navigation-item" alt="HAUS logo">
        </div>
        <div class="navigation-flex">
            <a href="#" class="navigation-item">newsletter</a>
            <a href="#" class="navigation-item">account</a>
            <router-link :to="{name: 'cart', params: {cart_data: CART}}" class="navigation-item">
                <div>cart <span class="cart-items">({{CART.length}})</span></div>
            </router-link>            
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "header",
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ]),
        },
        methods: {
            ...mapActions ([
                'ADD_TO_CART'
            ])
        }
    }
</script>

<style lang="scss" scoped>
.hheader {
    padding: 2em 2em 1em;
    background-color: #996b607c;
    z-index: 100;
}
.navigation {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-flex {
        display: flex;
    }
    
    &-item {
        color: #f7f7f7;
        border: none;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;

        &:not(:last-child) {
            margin-right: 3em;
        }
    }
}
.logo {
    width: 5.2em;
    height: 2.4em;
}
.cart-items {
    font-size: 14px;
    font-weight: 700;
}
</style>