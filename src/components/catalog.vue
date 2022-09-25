<template>
    <div class="wrapper">
        <div class="catalog-head">
            <div class="sort">
                <v-select 
                :options="options"
                @select="optionSelect"
                :selected="selected"
                />
            </div>
            <div class="">
                <p>Showing Products</p>
            </div>
        </div>    
        <div class="catalog">
            <productItem 
            v-for="product in products"
            :product="product" />
        </div>
    </div>
</template>

<script>
import productItem from '@/components/UI/productItem.vue'
import vSelect from '@/components/UI/v-select.vue'

    export default {
        name: "Catalog",
        components: {
            productItem,  
            vSelect,
                  
        },
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                options: [
                    {name: 'Popular', value: 'popular'},
                    {name: 'Rating', value: 'rating'},
                    {name: 'Price-low-to-high', value: 'price-low-to-high'},
                    {name: 'Price-high-to-low', value: 'price-high-to-low'},
                    {name: 'Vintage', value: 'vintage'}                    
                ],
                selected: 'Select'
            }
        },
        computed: {
           
        },
        methods: {
            optionSelect(option) {
                this.selected = option.name
            }
        },
    }
</script>

<style scoped>
    .wrapper {
        margin: 0 auto;
    padding: 5em 0;
    max-width: 1200px;
    }
    .catalog-head {
        display: flex;
        justify-content: space-between;
    }
    .catalog {    
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 3em;
    }
    .sort {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>