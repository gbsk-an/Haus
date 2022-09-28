<template>
    <div class="cart">
        <div class="wrapper">
            <div class="cart-item_shipping">
                <div class="checkout-section">
                    <div class="login-section">
                        <h4 class="login-section_title">Your Email Address</h4>
                        <InputCheckout placeholder="your email adress" class="login-section_input" /> 
                    </div>
                    <div class="shipping-section">
                        <h4 class="shipping-section_title">Delivery Address</h4>
                        <div class="shipping-section_inputs">
                            <InputCheckout placeholder="first name" /> 
                            <InputCheckout placeholder="last name" /> 
                            <InputCheckout placeholder="country" /> 
                            <InputCheckout placeholder="city" /> 
                            <InputCheckout placeholder="region" /> 
                            <InputCheckout placeholder="zip code" /> 
                            <InputCheckout placeholder="contact phone" /> 
                            <InputCheckout placeholder="date of birth (MM/DD/YYYY)" /> 
                        </div>                        
                    </div>
                    <div class="shipping-method-block">
                        <h4 class="shipping-method-block_title">Shipping Method</h4>
                        <p class="shipping-method-block_text">The dates below are shipping times. There is 1-5 days warehouse processing time for all orders</p>
                    </div>
                    <ButtonGrey type="submit" class="buttonProceedToPayment" value="submit-shipping">Proceed to Payment</ButtonGrey>
                </div>
            </div>
            <div class="cart-item_products">
                <div class="checkout-order-summary">
                    <h4 class="checkout-order-summary_title">Order Summary</h4>
                    <CartItem 
                        v-for="(item, index) in CART" 
                        :key="item.name" 
                        :cart_item_data="item" 
                        @deletFromCart="deletFromCart(index)"
                    />
                </div>                
            </div>            
        </div>
    </div>

</template>

<script>
import CartItem from '@/components/cartItem.vue'
import InputCheckout from '@/components/UI/inputCheckout.vue'
import ButtonGrey from '@/components/UI/buttonGrey.vue'
import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "Cart",
        components: {
            CartItem,
            InputCheckout,
            ButtonGrey
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deletFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style lang="scss" scoped>
.cart {
    padding: 2em 0;
    border-top: 1px solid #141414;
    border-bottom: 1px solid #141414;
    &-item {
        &_shipping {
            max-width: 600px;
        }
    }
}
.wrapper {
    margin: 0 auto;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    gap: 2em;
}
.login-section {
    margin-bottom: 1em;
    &_title {
        margin: 0 0 .6em;
        color: #141414;
        font-weight: 400;
        font-size: 30px;
        line-height: 44px;
    }
    &_input {
        width: 100%;
    }
}
.shipping-section {
    margin-bottom: 1em;
    &_title {
        margin: 0 0 .6em;
        color: #141414;
        font-weight: 400;
        font-size: 30px;
        line-height: 44px;
    }
    &_inputs {
        display: flex;
        flex-wrap: wrap;
        gap: 1em 2em;
    }
}
.shipping-method-block {
    &_title {
        margin: 0 0 .6em;
        color: #141414;
        font-weight: 400;
        font-size: 30px;
        line-height: 44px;
    }
    &_text{
        color: #141414;
        font-size: 18px;
        font-weight: 600;
        line-height: 32px;
    }
}
.checkout-order-summary {
    &_title {
        margin: 0 0 .6em;
        color: #141414;
        font-weight: 400;
        font-size: 24px;
        line-height: 44px;
    }
}
</style>