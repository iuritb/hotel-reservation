interface Hotel {
  id: number;
  name: string;
  location: string;
  rooms: number;
  amenities: string[];
  price: number; // Adicionando o atributo preço
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hotel A",
    location: "Cidade X",
    rooms: 100,
    amenities: ["Wi-Fi gratuito", "Estacionamento", "Academia"],
    price: 150, // Adicionando o preço para cada hotel
  },
  {
    id: 2,
    name: "Hotel B",
    location: "Cidade Y",
    rooms: 200,
    amenities: ["Wi-Fi gratuito", "Piscina", "Restaurante"],
    price: 200,
  },
  {
    id: 3,
    name: "Hotel C",
    location: "Cidade Z",
    rooms: 150,
    amenities: ["Wi-Fi gratuito", "Estacionamento", "Spa"],
    price: 180,
  },
];

export default hotels;
