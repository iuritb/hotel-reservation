// src/services/api.ts
import { ref } from "vue";

const hotels = ref([
  { id: 1, name: "Hotel A", price: 100, rating: 4.5 },
  { id: 2, name: "Hotel B", price: 150, rating: 4.0 },
  // Adicione mais hotéis conforme necessário
]);

export function useHotelService() {
  const searchHotels = (criteria: any) => {
    // Lógica de busca de hotéis baseada nos critérios
    return hotels.value.filter((hotel) => {
      // Adicione lógica de filtro conforme necessário
      return true;
    });
  };

  const getHotelById = (id: number) => {
    return hotels.value.find((hotel) => hotel.id === id);
  };

  return {
    searchHotels,
    getHotelById,
  };
}
