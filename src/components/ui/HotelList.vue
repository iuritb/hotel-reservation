<template>
  <v-row>
    <v-col
      v-for="hotel in sortedHotels"
      :key="hotel.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <HotelCard :hotel="hotel" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
//Vue
import { defineComponent, computed } from "vue";

//Types
import { Hotel } from "@/types/hotel";

//Components
import HotelCard from "./HotelCard.vue";

export default defineComponent({
  name: "HotelList",
  components: {
    HotelCard,
  },
  props: {
    hotels: {
      type: Array,
      required: true,
    },
    sortKey: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const sortedHotels = computed(() => {
      if (props.sortKey) {
        return [...props.hotels].sort(
          (a: Hotel, b: Hotel) => a[props.sortKey] - b[props.sortKey]
        );
      } else {
        return props.hotels;
      }
    });

    return { sortedHotels };
  },
});
</script>
