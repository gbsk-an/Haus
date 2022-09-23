<template>
    <div class="product">
        <div class="product-brand">
          <h4>{{product.brand}}</h4>
        </div>
        <div class="product-name">
            <p>{{product.name}}</p>
        </div>
        <div class="product-attribute">
            <p>{{product.attribute}}</p>
        </div>
        <div class="product-price">
            <p>${{product.price}}</p>
        </div>
        <div class="product-image">
          <img src="image">
        </div> 
        <BtnBlack>shop now</BtnBlack>
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
                required: true
            }
        },
        data() {
            return {              
                image: `{{product.image}}`,
            }            
        },
        computed: {}
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
        margin: 1em 0;
        width: 150px;
        height: 200px;
        background-color: brown;
    }
</style>