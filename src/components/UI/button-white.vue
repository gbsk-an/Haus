<template>
    <button type="button" class="btn-white">
        <slot>
            
        </slot>
    </button>
</template>

<script>
    export default {
        name: "btn-white"
    }
</script>

<style scoped>
.btn-white {
    padding: 1.5em 4em;
    background: #f7f7f7;
    border: 1px solid #f7f7f7;
    border-radius: 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #191919;
    cursor: pointer;
}
</style>