<template>
    <input class="input-authorization">
</template>

<script>
    export default {
        name: "input-authorization"
    }
</script>

<style lang="scss" scoped>
.input-authorization {
    position: relative;
    display: block;
    width: 100%;
    padding: 1.6em 1em;
    color: #747474;
    background-color: #ffffff;
    border: 1px solid #141414;
    border-radius: 0;
    background-clip: padding-box;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>