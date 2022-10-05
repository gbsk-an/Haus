<template>
<catalog-layout> 
    <div class="wrapper">
        <div class="section-search">
            <div class="products">
                <p>Showing <span class="products-quantity">{{PRODUCTS.length}}</span> Products</p>
            </div>
        </div>
        <div class="container">
            <div class="container-sort">
                <h-select 
                    :options="options"
                    :selected="selected"
                    @select="sortByOptions"                
                />
                <div class="search-filed">
                    <input
                        type="text"
                        class="search-filed_input"
                        placeholder="search..."
                        v-model="searchValue"
                    />
                    <button 
                        type="submit" 
                        class="search-filed_button" 
                        value="submit"
                        @click="search(searchValue)">
                    </button>
                </div>
                <btn-clear-filters
                    type="submit" 
                    value="submit"
                    @click="clearFilters"
                >                
                Clear Filters
                </btn-clear-filters>
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
</catalog-layout>
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
            sortedProducts: [],
            searchValue: ''
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'SEARCH_VALUE'
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
            'ADD_TO_CART',
            'GET_SEARCH_VALUE_VUEX'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        sortByOptions(option) {
            this.sortedProducts = [];
            let vm = this;  
            this.selected = option.value;           
            this.PRODUCTS.filter(function(item) { 
                if (option.value == 'vintage') {                    
                    if (item.vintage != 'False') {
                        vm.sortedProducts.push(item)
                    }                        
                }                      
            })                    
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
        },
        search(value) {
            this.GET_SEARCH_VALUE_VUEX(value);
        },
        sortProductsBySearch(value) {
            this.sortedProducts = [...this.PRODUCTS]
            if (value) {
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.name.toLowerCase().includes(value.toLowerCase())
                })
            } else {
                this.sortedProducts = this.PRODUCTS;
            }            
        },
        clearFilters() {
            this.searchValue = '';
            this.GET_SEARCH_VALUE_VUEX();
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response) {
                this.sortByPrice()
                this.sortProductsBySearch(this.SEARCH_VALUE)
            }
        })        
    },
    watch: {
        SEARCH_VALUE() {
            this.sortProductsBySearch(this.SEARCH_VALUE)
        }
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

.section-search {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2em;
    gap: 0 2em;  
}

.search-filed {
    display: flex;
    border: 1px solid #141414;
    

    &_input {
        padding: 1em;
        background-color: transparent;
        color: #818181;
        appearance: none;
        border: none;
        border-radius: 0;
        outline: 0;
        outline-offset: 0;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.12px;
    }
    &_button {
        position: relative;        
        margin-left: -3em;
        padding: 1em 1.2em;
        background-color: transparent;
        border: none;
        cursor: pointer;
        &::before {
            content: "";
            position: absolute;
            width: 20px;
            height: 32px;
            background-image: url("../assets/search.svg");
            background-repeat: no-repeat;
            background-position: center;
            transform: translate(-50%, -50%);
            cursor: pointer;
          }
    }
}
.products {
    &>p {
        margin: 0;
    }
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