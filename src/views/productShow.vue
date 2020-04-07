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
import EventService from '@/services/ProductService.js'
export default {
    props: ['id'],
    data() {
        return {
            product:{}
        }
    },
    created() {
        EventService.getProduct(this.id)
            .then(response => {
                this.product = response.data
                console.log(response.data)
            })
            .catch ( error => {
                console.log('there was an error:', error.response)
            })
    } 
}
</script>

<style scoped>

</style>