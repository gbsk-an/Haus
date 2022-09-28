<template>
    <div class="product">
        <div class="product-brand">
          <h5 class="product-brand_title">{{product.brand}}</h5>
        </div>
        <div class="product-name">
            <p class="product-name_title">{{product.name}}</p>
        </div>
        <div class="product-attribute">
            <p class="product-attribute_title">{{product.attribute}}</p>
        </div>
        <div class="product-price">
            <p class="product-price_value">${{product.price}}</p>
        </div>
        <div class="product-image">
          <img :src="require('../assets/' +  product.image)" alt="product image" />
        </div> 
        <BtnBlack @click="addToCart">Add to cart</BtnBlack>
    </div>
</template>

<script>
import BtnBlack from './UI/buttonBlack.vue';

    export default {
        name: "productItem",
        components: {
            BtnBlack,
        },
        props: {
            product: {
                type: Object, 
                required: true,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {    
                
            }            
        },
        computed: {},
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product);
            }
        },
}
</script>

<style scoped>
    .product {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2em;
        width: 300px;
        background-color: rgb(235, 235, 235);
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p {
        margin: 0;
    }
    .product-image {
        margin: 1em 0;;
        height: 100%;
        background-color: transparent;
    }
    .product-brand_title {
        margin-bottom: .8em;
        color: #141414;
        font-size: 24px;
        font-weight: 700;
    }
    .product-name_title {
        margin-bottom: 2em;
        font-size: 17px;
        font-weight: 400;    
    }
    .product-attribute_title {
        margin-bottom: .8em;
        font-size: 17px;  
        font-weight: 400; 
    }
    .product-price_value {
        font-size: 19px;
        font-weight: 700;
    }
</style>