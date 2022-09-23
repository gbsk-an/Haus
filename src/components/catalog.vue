<template>
    <div class="wrapper">
        <productItem 
        v-for="product in products"
        :product="product" />
    </div>
</template>

<script>
import productItem from '@/components/UI/productItem.vue'
    export default {
        name: "Catalog",
        components: {
            productItem,            
        },
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                
            }
        },
        computed: {},
        methods: {},
    }
</script>

<style scoped>
.wrapper {
    margin: 0 auto;
    padding: 5em 0;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3em;
}
</style>