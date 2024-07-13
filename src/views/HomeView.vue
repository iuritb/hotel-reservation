<template>
  <div>
    <h1>Bem-vindo ao Sistema de Reserva de Hotéis</h1>
    <router-link to="/search">Pesquisar Hotéis</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
./home-view.vue
