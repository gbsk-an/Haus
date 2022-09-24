<template>
    <div class="product">
        <div class="product-brand">
          <h3 class="product-brand_title">{{product.brand}}</h3>
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
          <img v-if="product.image" :src="product.image" />
        </div> 
        <BtnBlack>Shop now</BtnBlack>
    </div>
</template>

<script>
import BtnBlack from './buttonBlack.vue';

    export default {
        name: "productItem",
        components: {
            BtnBlack,
        },
        props: {
            product: {
                type: Object, 
                required: true,
            }
        },
        data() {
            return {    
                
            }            
        },
        computed: { 
 
    }
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
    }
    p {
        margin: 0;
    }
    .product-image {
        margin: 1em 0;;
        background-color: brown;
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