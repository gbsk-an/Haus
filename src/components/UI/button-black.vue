<template>
    <button type="submit" class="btn-black">
        <slot>
            
        </slot>
    </button>
</template>

<script>
    export default {
        name: "btn-black"
    }
</script>

<style scoped>
.btn-black {
    padding: 1.5em 4em;
    background: #191919;
    border: 1px solid #191919;
    border-radius: 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
}
</style>