<template>
    
        <v-container >
            <v-row class="justify-space-between">
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
            </v-row>
       </v-container>

  
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
 


 
 export default {
     data() {
            return { products: [
      { 
        id: 1, 
        name: "Sony TV-675", 
        short: "Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit", 
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores harum delectus voluptas tenetur rerum! Hic rem dignissimos quia natus quas voluptatem facilis quod maiores!",
        price: 5755,
        image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg"
        },
      { 
        id: 2,
        name: "Samsung CT-567",
        short: "Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit", 
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores voluptatem facilis quod maiores!",
        price: 3770,
        image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
      },
        { 
        id: 3,
        name: "Dell V-964i",
        short: "Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores harum delectus voluptas tenetur rerum! Hic rem dignissimos quia natus quas voluptatem facilis quod maiores!",
        price: 4599,
        image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
      },
     ]}
     }
     ,
     components: {
      ProductCard
     }
     
 }
</script>

<style scoped>

</style>