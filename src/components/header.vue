<template>
    <header class="navigation">
        <div class="">
            <a href="" class="navigation-item">shop</a>
            <a href="" class="navigation-item">membership</a>
            <a href="" class="navigation-item">our story</a>
        </div>
        <div class="logo">
            <img src="../assets/logo.svg" class="navigation-item">
        </div>
        <div class="">
            <a href="" class="navigation-item">newsletter</a>
            <a href="" class="navigation-item">account</a>
            <a href="" class="navigation-item">cart ()</a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {},
        data() {
            return {
                
            }
        },
        computed: {}
    }
</script>

<style scoped>
    header {
        padding: 2em 2em 1em;
        background-color: #996b607c;
        z-index: 100;
    }
    .navigation {
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .navigation-item {
        margin-right: 3em;
        color: #f7f7f7;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
    }
    .logo {
        width: 2em;
        height: 2em;
    }
</style>