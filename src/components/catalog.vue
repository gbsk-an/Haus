<template>
<default-layout> 
    <div class="wrapper">
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
                <btn-clear-filters>Clear Filters</btn-clear-filters>
                <div class="input-range">
                    <input 
                        v-model.number="minPrice" 
                        @change="setRange"
                        type="range" 
                        min="0" 
                        max="500" 
                        step="10" 
                    />
                    <input 
                        v-model.number="maxPrice"
                        @change="setRange"
                        type="range" 
                        min="0"
                        max="500" 
                        step="10"
                    />
                </div>
                <div class="range-value">
                    <p>Min: {{minPrice}}</p>
                    <p>Max: {{maxPrice}}</p>
                </div>
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
</default-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductItem from '@/components/product-item.vue'
import hSelect from '@/components/UI/h-select.vue'
import BtnClearFilters from '@/components/UI/button-clear-filters.vue'

export default {
    name: "catalog",
    components: {
        ProductItem,  
        hSelect,  
        BtnClearFilters,      
    },
    props: {},
    data() {
        return {            
            options: [
                {name: 'Popular', value: 'popular'},
                {name: 'Vintage', value: 'vintage'},    
                {name: 'Rating', value: 'rating'},
                {name: 'Price-low-to-high', value: 'price-low-to-high'},
                {name: 'Price-high-to-low', value: 'price-high-to-low'},                                
            ],
            selected: 'Popular',
            minPrice: 0,
            maxPrice: 300,
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
                if (option.name === 'vintage' || item.vintage == 'True') {                    
                    vm.sortedProducts.push(item);                        
                } else if (option.name == 'popular') {
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
                }                
                          
            }),            
            this.selected = option.name
        },
        sortByPrice(option) {
            let vm = this;
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = this.sortedProducts.filter(function(item) {
                return item.price >= vm.minPrice && item.price <= vm.maxPrice
            })
        },
        setRange() {
            if (this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp
            }
            this.sortByPrice()
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        this.sortByPrice()
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 0 auto;
    padding: 2em 0;
    max-width: 1710px;
}
.container {
    display: flex;
    gap: 1em;

    &-catalog {    
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2em;
    }
    
    &-sort {
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
}
.products {
    text-align: right;

    &-quantity {
        font-size: 20px;
        font-weight: bold;
    }
}
.input-range {
    position: relative;
    margin-top: 3em;

    & > input {
        width: 100%;
        accent-color: #747474;
    }
}
.input-range svg, .input-range input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
}
input[type=range]::-webkit-slider-thumb{
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}
.range-value {
    display: flex;
    justify-content: space-between;
    & > p {
        margin: 0;
        color: #141414;
        font-size: 17px;
        font-weight: 400;
    }
}
</style>