<template>
    <div class="wrapper">
        <div class="catalog-head">
            <div class="sort">
                <label class="form-control-label" for="sort-order-select">Sort by</label>
                <select name="sort-order" v-model="sortType" id="sort-order-select" class="custom-select" style="visibility: visible;">   
                    <option class="popular" data-id="popular">
                        Most Popular
                    </option>
                    <option class="rating" data-id="rating">
                        Reviewer Rating
                    </option>
                    <option class="price-low-to-high" data-id="price-low-to-high">
                        Price Low To High
                    </option>
                    <option class="price-high-to-low" data-id="price-high-to-low">
                        Price High to Low
                    </option>     
                    <option class="product-name-descending select" data-id="product-name-descending">
                        Vintage
                    </option>
                </select>
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
                sortType: 'byName'
            }
        },
        computed: {
    sortedItems() {
      switch(this.sortType) {
        case 'byName': return  // sort by name
        case 'bySomething': return  // sort by something
      } 
    }
  },

        methods: {},
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
</style>