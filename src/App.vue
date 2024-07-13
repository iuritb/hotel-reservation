<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Pesquisar Hotéis</router-link> |
      <router-link to="/comparison">Comparar Hotéis</router-link> |
      <router-link to="/reservation">Reservar Quartos</router-link>
    </nav>
    <router-view />
  </div>
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
