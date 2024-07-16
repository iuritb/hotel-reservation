<!-- src/App.vue -->
<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  color: #42b983;
}
</style>
