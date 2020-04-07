<template>
  <div>
    <v-app-bar
      color="primary"
      app
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>The Best Webshop</v-toolbar-title> -->
      <router-link :to="{name: 'Home'}"> <v-btn text rounded>home</v-btn></router-link> 
     <router-link :to="{name: 'products'}"> <v-btn text rounded>Products</v-btn></router-link> 
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>


    </v-app-bar>
  </div>
</template>

