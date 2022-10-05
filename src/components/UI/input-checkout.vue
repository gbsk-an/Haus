<template>
    <input class="input-checkout" required> 
</template>

<script>
    export default {
        name: "input-checkout",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
.input-checkout {
    position: relative;
    display: block;
    width: 384px;
    padding: .6em 1em;
    color: #747474;
    background-color: #ffffff;
    border: 1px solid #b1b1b1;
    border-radius: 0;
    background-clip: padding-box;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    &:focus {
        border-color: #141414;
        color: #141414;
        outline: none;
        box-shadow: none;
    }
}
</style>