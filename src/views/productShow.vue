<template>
 
        <v-card
            outlined 
            class="mt-10 mx-auto"
            max-width="600"
            >
            <v-card-title class="justify-center primary white--text">{{ product.name }}</v-card-title>
            <v-img height="400px" :src="product.image"/>
            <v-card-subtitle class="black--text title">Produktbeskrivning</v-card-subtitle>
            <v-card-text>
                {{product.desc}}
            </v-card-text>
            <v-card-actions>
                <v-btn color="orange" class="justify-center">Add to cart</v-btn>
            </v-card-actions>
        </v-card>
    
     
   
</template>

<script>

import { mapState } from 'vuex'

export default {
    props: ["id"],
  
    created() {
        // console.log('1. ******ProductShow dispatch getProductById****')
       // console.log(this.id)
        this.$store.dispatch('getProductById', this.id)
    }, 
    computed: mapState(['product'])
}
</script>

<style scoped>

</style>