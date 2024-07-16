<template>
  <v-card>
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{ hotel.name }}</h3>
        <div>{{ hotel.location }}</div>
      </div>
    </v-card-title>
    <v-card-subtitle> {{ hotel.rooms }} quartos disponíveis </v-card-subtitle>
    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="amenity in hotel.amenities" :key="amenity">
          {{ amenity }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <div class="my-2 subtitle-1">Preço: R$ {{ hotel.price }}</div>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="compare">Comparar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
//Vue
import { defineComponent } from "vue";

export default defineComponent({
  name: "HotelCard",
  props: {
    hotel: {
      type: Object,
      required: true,
    },
  },
  methods: {
    compare() {
      this.$emit("compare", this.hotel);
    },
  },
});
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
