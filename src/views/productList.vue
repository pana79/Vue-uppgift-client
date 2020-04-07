<template>
    
        <v-container >
            <v-row class="justify-space-between">
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
            </v-row>
       </v-container>

  
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { mapState } from 'vuex'
 
 export default {
   
     components: {
      ProductCard,
    
     },
     created() {
      this.$store.dispatch('fetchProducts')
     },
     computed: mapState(['products'])
     
 }
</script>

<style scoped>

</style>