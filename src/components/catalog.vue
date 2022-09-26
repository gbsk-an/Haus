<template>
    <div class="wrapper">
        <div class="catalog-head">
            <div class="sort">
                <h-select 
                :options="options"
                :selected="selected"
                @select="sortByOptions"                
                />
            </div>
            <div class="">
                <p>Showing <span class="products-quantity">{{PRODUCTS.length}}</span> Products</p>
            </div>
        </div>    
        <div class="catalog">
            <productItem 
                v-for="product in filteredProducts"
                :key="product.name"
                :product="product" 
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import productItem from '@/components/productItem.vue'
import hSelect from '@/components/UI/h-select.vue'

export default {
    name: "Catalog",
    components: {
        productItem,  
        hSelect,         
    },
    props: {},
    data() {
        return {            
            options: [
                {name: 'Popular', value: 'popular'},
                {name: 'Rating', value: 'rating'},
                {name: 'Price-low-to-high', value: 'price-low-to-high'},
                {name: 'Price-high-to-low', value: 'price-high-to-low'},
                {name: 'Vintage', value: 'vintage'}                    
            ],
            selected: 'Popular',
            sortedProducts: []
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),
        filteredProducts() {
            if (this.sortedProducts.length) {
                return this.sortedProducts
            } else {
                return this.PRODUCTS
            }
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
        sortByOptions(option) {
            this.sortedProducts = [];
            let vm = this;
            this.PRODUCTS.map(function(item) {
                if (item.vintage === option.name) {
                    vm.sortedProducts.push(item);
                }
            }),
            this.selected = option.name
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
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
    .products-quantity {
        font-size: 20px;
        font-weight: bold;
    }
</style>