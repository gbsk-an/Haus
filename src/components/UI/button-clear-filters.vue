<template>
    <button class="btn-clear-filters">
        <slot>

        </slot>
    </button>
</template>

<script>
    export default {
        name: "btn-clear-filters"
    }
</script>

<style scoped>
.btn-clear-filters {
    padding: 1.5em 2em;
    background: #f7f7f7;
    border: 1px solid #141414;
    border-radius: 0px;
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 14px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #141414;
    cursor: pointer;
}
</style>