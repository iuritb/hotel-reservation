<template>
  <div>
    <h1>Componente de listagem de hoteis</h1>
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

export default defineComponent({
  name: "HotelList",
  // setup() {
  //   const props = defineProps({
  //     hotelList: Hotel[];
  //   });
  // },
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
