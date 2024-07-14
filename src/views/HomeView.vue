<template>
  <div>
    <h1>Bem-vindo ao Sistema de Reserva de Hotéis</h1>
    <router-link to="/search">Pesquisar Hotéis</router-link>
    <div>
      <div v-for="hotel in hotelStore.hotels" :key="hotel.id">
        <h2>{{ hotel.name }}</h2>
        <p>{{ hotel.location }}</p>
        <p>{{ hotel.rooms }} quartos</p>
        <p>Amenidades: {{ hotel.amenities.join(", ") }}</p>
        <p>Preço: {{ hotel.price }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
//Components
// import HotelList from "@/components/HotelList.vue";

//Store
import useHotelStore from "@/store/hotelStore";

export default defineComponent({
  name: "HomeView",
  setup() {
    // Use sua store
    const hotelStore = useHotelStore();

    // Carregue os dados simulados quando o componente for montado
    onMounted(() => {
      hotelStore.loadHotels();
    });

    return {
      hotelStore,
    };
  },
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
