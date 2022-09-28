<template>
    <button type="button" value="delete" class="button-close"></button>
</template>

<script>
    export default {
        name: "ButtonClose",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>
    .button-close {
        position: relative;
        height: 36px;
        width: 36px;
        background-color: transparent;
        border: 1px solid #141414;
        border-radius: 0px;
        cursor: pointer;
    }
    .button-close:after {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        background-image: url("../../assets/close.svg");
        background-repeat: no-repeat;
        background-position: center;
        transform: translate(-50%,-50%);
        cursor: pointer;
      }
</style>