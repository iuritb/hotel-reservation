<template>
  <div>
    <v-container>
      <HotelList :hotels="hotels" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
//Components
import HotelList from "../components/ui/HotelList.vue";

//Store
import useHotelStore from "@/store/hotelStore";

export default defineComponent({
  name: "HomeView",
  components: {
    HotelList,
  },
  setup() {
    const hotelStore = useHotelStore();

    onMounted(() => {
      hotelStore.loadHotels();
    });

    return {
      hotels: hotelStore.hotels,
    };
  },
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
