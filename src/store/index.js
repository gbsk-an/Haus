import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductInCart = false;
        state.cart.map(function (item) {
          if (item.name === product.name) {
            isProductInCart = true;
            item.quantity++
          }
        })
        if (!isProductInCart) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }      
    },
    DELETE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    PLUS: (state, index) => {
      state.cart[index].quantity++
    },
    MINUS: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then(products => {        
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index){
      commit('DELETE_FROM_CART', index)
    },
    QTYMINUS_CART_ITEM({commit}, index) {
      commit('MINUS', index)
    },
    QTYPLUS_CART_ITEM({commit}, index) {
      commit('PLUS', index)
    },
  },
  modules: {
  }
})
