<template>
  <v-card class="ma-5" max-width="300">
    <v-img class="white--text align-end" height="200px" :src="product.image"/>
    <v-card-title class="black--text">{{ product.name }}</v-card-title>
    <v-card-subtitle class="pb-0 red--text">Pris: {{ product.price}} kr</v-card-subtitle>
    <v-card-text class="text--primary">{{product.short}}</v-card-text>
    <v-card-actions>
      <v-btn color="orange">Add to cart</v-btn>
        <v-spacer></v-spacer>
        <router-link :to="{name: 'product-show', params: {id: product.id}}">
        <v-btn color="orange" text> Read more</v-btn>
      </router-link> 
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: { product:Object} 
}
</script>

<style scoped>


</style>