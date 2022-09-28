<template>
    <div class="cart-item">
        <div class="cart-item_head">
            <div>
                <p class="brand-title">{{cart_item_data.brand}}</p>
                <p>{{cart_item_data.name}}</p>
            </div>            
            <ButtonClose @click="deletFromCart" />
        </div>
        <div class="cart-item_body">
            <img :src="require('../assets/' +  cart_item_data.image)" class="cart-item_image" alt="product image" />
            <p>{{cart_item_data.price}}</p>
            <p>Qty: {{cart_item_data.quantity}}</p>
        </div>        
    </div>
</template>

<script>
    import ButtonClose from '@/components/UI/buttonClose.vue'
    export default {
        name: "CartItem",
        components: {
            ButtonClose
        },
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            deletFromCart() {
                this.$emit('deletFromCart')
            }
        },
        mounted() {
            this.cart_item_data.quantity = 1
        },
    }
</script>

<style scoped>
    .cart-item {
        width: 600px;
        margin: 0 auto 1em;
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .cart-item_head{
        display: flex;
        justify-content: space-between;
    }
    .brand-title {
        margin: 0 0 0.8em;
        color: #141414;
        font-size: 24px;
        font-weight: 700;
    }
    .cart-item_body {
        display: flex;
        justify-content: space-between;
        height: 200px;
    }
    .cart-item_image {
        max-height: 140px;
    }
</style>