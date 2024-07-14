// Primeiro, importe 'defineStore' de 'pinia'
import { defineStore } from "pinia";
import hotels from "../mock/hotels";

const useHotelStore = defineStore({
  id: "hotels",

  state: () => ({
    hotels: [] as typeof hotels,
  }),

  actions: {
    loadHotels() {
      this.hotels = hotels;
    },
  },
});

export default useHotelStore;
