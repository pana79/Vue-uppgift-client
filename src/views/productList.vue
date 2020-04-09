<template>
    
        <v-container  >
            <v-row  class="justify-space-around" cols="12">
                <v-col class="flex-grow-0"  v-for="product in products" :key="product.id" >
                     <ProductCard :product="product"/>
         
                </v-col>
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