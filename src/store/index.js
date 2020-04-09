import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
        ],
    product: null
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      console.log('SET_PRODUCTS')
      state.products = products
      console.log(state.products)
    },
    GET_PRODUCT_BYID(state, product) {
      // state.product = state.products.filter(p => p.id == id)[0]
      state.product =product
      console.log(state.product)
    }
  },
  actions: {
    fetchProducts({commit}) {
      console.log('getProducts')
      ProductService.getProducts()
      .then(response => {
          commit('SET_PRODUCTS',response.data)
          // console.log(response.data)
      })
      .catch(error => {
          console('There was an error: ' + error.response)
      })
    },
    getProductById({commit}, id) {
      console.log('getProductById')
      ProductService.getProduct(id)
      .then( response => {
        commit('GET_PRODUCT_BYID', response.data)
      })
      .catch(error => {
        console('There was an error: ' + error.response)
      })
     
    }},
  getters: {
    products(state) {
      return state.products
    },
    product(state) {
      return state.product
    }           
  }
})
