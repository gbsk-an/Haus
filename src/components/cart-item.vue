<template>
    <div class="cart-item">
        <div class="cart-item_head">
            <div>
                <p class="brand-title">{{cart_item_data.brand}}</p>
                <p>{{cart_item_data.name}}</p>
            </div>            
            <button @click="deletFromCart" class="cart-item_head-button"></button>
        </div>
        <div class="cart-item_body">
            <img :src="require('../assets/' +  cart_item_data.image)" class="cart-item_image" alt="product image" />
            <p class="product-price">${{cart_item_data.price}}</p>
            <div class="product-qty">
                <p class="product-qty_title">Qty:</p>
                <div class="product-qty_value">
                    <button @click="qtyMinus" type="button" class="product-qty_value-btn">-</button>
                        <span class="product-qty_value-total">{{cart_item_data.quantity}}</span>
                    <button  @click="qtyPlus" type="button" class="product-qty_value-btn">+</button>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        name: "cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            deletFromCart() {
                this.$emit('deletFromCart')
            },
            qtyMinus() {
                this.$emit('minus')
            },
            qtyPlus() {
                this.$emit('plus')
            }
        },
        mounted() {
            this.cart_item_data.quantity = 1
        },
    }
</script>

<style lang="scss" scoped>
.cart-item {
    width: 600px;
    margin: 0 auto 1em;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &_head{
        display: flex;
        justify-content: space-between;
        &-button {
            position: relative;
            height: 36px;
            width: 36px;
            background-color: transparent;
            border: none;
            border-radius: 0px;
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                width: 14px;
                height: 14px;
                background-image: url("../assets/close.svg");
                background-repeat: no-repeat;
                background-position: center;
                transform: translate(-50%,-50%);
                cursor: pointer;
            }
        }
    }
    &_body {
        display: flex;
        justify-content: space-between;
        height: 150px;
    }
    &_image {
        max-height: 140px;
    }
}
.brand-title {
    margin: 0 0 0.8em;
    color: #141414;
    font-size: 24px;
    font-weight: 700;
}    
.product-price {
    margin: 0;
}
.product-qty {
    &_title {
        margin: 0 0 1em;
    }
    &_value{
        display: flex;
        align-items: center;
        gap: .6em;

        &-btn {
            padding: .4em;
            background-color: #74747469;
            border: none;
            color: #141414;
            font-family: 'Playfair Display', serif;
            font-size: 14px;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            cursor: pointer;
            transition: all .1s;
            &:hover {
                background-color: #7474747e;
                color: #141414;
                outline: none;
                box-shadow: none;
            }
        }
        &-total {
            font-size: 14px;
            font-weight: 700;
        }
    }

}
</style>