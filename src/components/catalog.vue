<template>
    <div class="wrapper">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <p class="navigation-item">cart ({{CART.length}})</p>
        </router-link>
        <div class="products">
            <p>Showing <span class="products-quantity">{{PRODUCTS.length}}</span> Products</p>
        </div>
        <div class="container">
            <div class="container-sort">
                <h-select 
                :options="options"
                :selected="selected"
                @select="sortByOptions"                
                />
                <BtnClearFilters>Clear Filters</BtnClearFilters>

            </div>    
            <div class="container-catalog">
                <productItem 
                    v-for="product in filteredProducts"
                    :key="product.name"
                    :product="product" 
                    @addToCart="addToCart"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import productItem from '@/components/productItem.vue'
import hSelect from '@/components/UI/h-select.vue'
import BtnClearFilters from '@/components/UI/buttonClearFilters.vue'

export default {
    name: "Catalog",
    components: {
        productItem,  
        hSelect,  
        BtnClearFilters,      
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
            'PRODUCTS',
            'CART'
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
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        sortByOptions(option) {
            this.sortedProducts = [];
            let vm = this;
            this.PRODUCTS.map(function(item) {
                if (option.name === item.vintage) {
                    vm.sortedProducts.push(item);
                }else if (option.name == 'popular') {
                    function sorting(a,b) {
                        let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
                        if (fa < fb) {
                            return -1
                        }
                        if (fa > fb) {
                            return 1
                        }
                        return 0
                    }
                    vm.sortedProducts.push(sorting(item))
                    console.log(sorting(item))
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
    .container {
        display: flex;
        gap: 1em;
    }
    .container-catalog {    
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2em;
    }
    .container-sort {
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .products {
        text-align: right;
    }
    .products-quantity {
        font-size: 20px;
        font-weight: bold;
    }
</style>