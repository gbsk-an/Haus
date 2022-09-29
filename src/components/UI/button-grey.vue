<template>
    <button type="button" class="btn-grey">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "btn-grey",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
.btn-grey {
    width: 100%;
    padding: 1.5em 4em;
    background-color: #74747469;
    border: 1px solid #b1b1b1;
    color: #141414;
    font-family: 'Playfair Display', serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .4s;
    &:hover {
        background-color: #7474747e;
        color: #141414;
        outline: none;
        box-shadow: none;
    }
}
</style>