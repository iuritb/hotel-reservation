Claro, eu posso te ajudar com isso. Vamos começar com a interface de pesquisa.
Você pode criar um novo componente chamado SearchBar.vue para isso. Aqui está um
exemplo de como você pode estruturá-lo:

<template>
  <v-form @submit.prevent="search">
    <v-text-field v-model="destination" label="Destino" required></v-text-field>
    <v-date-picker v-model="checkIn" label="Check-in" required></v-date-picker>
    <v-date-picker
      v-model="checkOut"
      label="Check-out"
      required
    ></v-date-picker>
    <v-integer-field
      v-model="rooms"
      label="Número de quartos"
      required
    ></v-integer-field>
    <v-integer-field
      v-model="guests"
      label="Número de hóspedes"
      required
    ></v-integer-field>
    <v-btn type="submit">Pesquisar</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchBar",
  setup() {
    const destination = ref("");
    const checkIn = ref(null);
    const checkOut = ref(null);
    const rooms = ref(1);
    const guests = ref(1);

    const search = () => {
      // Aqui você pode implementar a lógica de pesquisa
      // Por exemplo, você pode chamar uma API ou filtrar os dados locais
      // Em seguida, você pode emitir um evento com os resultados da pesquisa
      this.$emit("search", { destination, checkIn, checkOut, rooms, guests });
    };

    return { destination, checkIn, checkOut, rooms, guests, search };
  },
});
</script>
