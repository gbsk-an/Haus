<template>
    <button type="button" class="btn-transparent">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "BtnTransparent",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>
    .btn-transparent {
        padding: 1.5em 4em;
        background-color: transparent;
        border: 1px solid #FFFFFF;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>