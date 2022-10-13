<template>
    <div class="product">
        <div class="product-brand">
          <p class="product-brand_title">{{product.brand}}</p>
        </div>
        <div class="product-name">
            <p class="product-name_title">{{product.name}}</p>
        </div>
        <div class="product-attribute">
            <p class="product-attribute_title">{{product.attribute}}</p>
        </div>
        <div class="product-price">
            <p class="product-price_value">${{product.price}}.00</p>
        </div>
        <div class="product-image">
          <img 
            :src="require('../assets/' +  product.image)" 
            alt="product image" />
        </div> 
        <btn-black @click="addToCart">Add to cart</btn-black>
    </div>
</template>

<script>
    export default {
        name: "product-item",
        props: {
            product: {
                type: Object, 
                required: true,
                default() {
                    return {}
                }
            }
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product);
            }
        },
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2em;
    width: 300px;
    background-color: rgb(235, 235, 235);
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &-brand {
        &_title {
            margin: .6em 0 .8em;
            color: #141414;
            font-size: 22px;
            font-weight: 700;
        }
    }

    &-name {
        &_title {
            margin: 0 0 2em;
            font-size: 17px;
            font-weight: 400;    
        }
    }

    &-attribute {
        &_title {
            margin: 0 0 .8em;
            font-size: 17px;  
            font-weight: 400; 
        }
    }

    &-price {
        &_value {
            margin: 1em 0;
            font-size: 19px;
            font-weight: 700;
        }
    }

    &-image {
        margin: 1em 0;
        height: 100%;
        background-color: transparent;
    }
}

</style>