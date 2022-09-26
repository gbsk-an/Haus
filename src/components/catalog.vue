<template>
    <div class="wrapper">
        <div class="catalog-head">
            <div class="sort">
                <h-select 
                :options="options"
                :selected="selected"
                @select="optionSelect"                
                />
            </div>
            <div class="">
                <p>Showing Products</p>
            </div>
        </div>    
        <div class="catalog">
            <productItem 
                v-for="product in PRODUCTS"
                :key="product.name"
                :product="product" 
                @sendDataToParent="showChildArticleInConsole"
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
            selected: 'Select'
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
        optionSelect(option) {
            this.selected = option.name;
        },
        showChildArticleInConsole(data) {
            console.log(data)
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
</style>