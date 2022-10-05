<template>
<cart-layout>
    <div class="cart">
        <div class="cart-navigation">
            <router-link :to="{name: 'catalog'}" class="cart-navigation_link">
                <div>Back to shop</div>
            </router-link>
        </div>        
        <div class="wrapper">
            <div class="cart-item_shipping">
                <div class="checkout-section">
                    <div class="login-section">
                        <h4 class="login-section_title">Your Email Address</h4>
                        <InputCheckout type="email" placeholder="your email adress" /> 
                    </div>
                    <div class="shipping-section">
                        <h4 class="shipping-section_title">Delivery Address</h4>
                        <div class="shipping-section_inputs">
                            <input-checkout type="text" placeholder="first name" /> 
                            <input-checkout type="text" placeholder="last name" /> 
                            <input-checkout type="text" placeholder="country" /> 
                            <input-checkout type="text" placeholder="city" /> 
                            <input-checkout type="text" placeholder="region" /> 
                            <input-checkout type="text" placeholder="zip code" /> 
                            <input-checkout type="number" placeholder="contact phone" /> 
                            <input-checkout type="month" placeholder="date of birth" /> 
                        </div>                        
                    </div>
                    <div class="shipping-method-block">
                        <h4 class="shipping-method-block_title">Shipping Method</h4>
                        <p class="shipping-method-block_text">The dates below are shipping times. There is 1-5 days warehouse processing time for all orders</p>
                    </div>
                    <div>
                        <ButtonGrey type="submit" class="buttonProceedToPayment" value="submit-shipping">Proceed to Payment</ButtonGrey>
                    </div>
                    <div class="shipping-help">
                        <h4 class="shipping-help_title">Unable to Proceed to Payment?</h4>
                        <p class="shipping-help_text">Please verify all required address fields have been properly filled out by choosing 'edit address' above.<br />Please call <a href="tel:1(234) 567-8900" class="shipping-help_text-link">1(234) 567-8900</a> for additional help.</p>
                    </div>
                </div>
            </div>
            <div class="cart-item_products">
                <div class="checkout-order-summary">
                    <h4 class="checkout-order-summary_title">Order Summary</h4>
                    <p v-if="!CART.length">Cart is empty</p>
                    <div class="checkout-order-summary_total">
                        <div class="checkout-order-summary_total-tax"><span class="summary-label">Tax </span><span class="append">-</span></div>
                        <div class="checkout-order-summary_total-grand"><span class="summary-label">Total</span><span class="append">${{cartTotalCost}}</span></div>
                    </div>
                    <CartItem 
                        v-for="(item, index) in CART" 
                        :key="item.name" 
                        :cart_item_data="item" 
                        @deletFromCart="deletFromCart(index)"
                        @plus="plus(index)"
                        @minus="minus(index)"
                    />
                </div>                
            </div>            
        </div>
    </div>
</cart-layout>
</template>

<script>
import CartItem from '@/components/cart-item.vue'
import InputCheckout from '@/components/UI/input-checkout.vue'
import ButtonGrey from '@/components/UI/button-grey.vue'
import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "cart",
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
            cartTotalCost() {
                let result = []

                if (this.CART.length) {
                    for (let item of this.CART) {
                        result.push(item.price * item.quantity);
                    }
                    result = result.reduce(function (sum, el) {
                        return sum + el
                    })
                    return result
                } else {
                    return 0
                }                
                
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'QTYMINUS_CART_ITEM',
                'QTYPLUS_CART_ITEM'
            ]),
            deletFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            plus(index) {
                this.QTYPLUS_CART_ITEM(index)
            },
            minus(index) {
                this.QTYMINUS_CART_ITEM(index)
            }
        }
    }
</script>

<style lang="scss" scoped>
.cart {
    padding: 2em 0;
    
    &-navigation {
        max-width: 1600px;
        margin: 0 auto;
        padding-bottom: 2em;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &_link {
            position: relative;
            padding-left: 1.6em;
            color: #141414;
            font-size: 18px;
            text-decoration: none;
            &:before {
                content: "";
                position: absolute;
                width: 16px;
                height: 16px;
                background-image: url("../assets/arrow-left.svg");
                background-repeat: no-repeat;
                background-position: center;
                left: 0;
                transform: translateY(30%);
                cursor: pointer;
            }
        }
    }
    &-item {
        &_shipping {
            max-width: 800px;
        }
    }
}
.wrapper {
    margin: 0 auto;
    max-width: 1600px;
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
    &_total {
        margin-bottom: 1.4em;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 1em;
        &-tax,
        &-grand {
            display: flex;
            justify-content: space-between;
            color: #141414;
        }
    }
}
.summary-label {
    flex: 1 1 auto;
}
.append {
    font-size: 20px;
    font-weight: 600;
}
.shipping-help {
    margin: 1em 0;
    &_title {
        margin: 0 0 .6em;
        font-weight: 400;
        font-size: 30px;
        line-height: 44px;
    }
    &_text {
        margin: 0;
        color: #747474;
        font-size: 18px;
        font-weight: 600;
        line-height: 32px;
        &-link {
            color: #141414;
        }
    }
}
</style>