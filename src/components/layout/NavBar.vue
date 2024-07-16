<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title class="headline">Hotel Reservation System</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/compare">Compare</v-btn>
    <v-btn text to="/reserve">Reserve</v-btn>
    <v-btn text>Login</v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list dense>
      <v-list-item link to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/compare">
        <v-list-item-title>Compare</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/reserve">
        <v-list-item-title>Reserve</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<style scoped>
.headline {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
