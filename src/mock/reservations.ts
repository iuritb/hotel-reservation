import { Reservation } from "@/types/reservation";

const reservations: Reservation[] = [
  {
    id: 1,
    hotelId: 1,
    userId: 101,
    roomId: 1,
    checkInDate: "2024-01-01",
    checkOutDate: "2024-01-05",
  },
  {
    id: 2,
    hotelId: 2,
    userId: 102,
    roomId: 2,
    checkInDate: "2024-02-01",
    checkOutDate: "2024-02-10",
  },
  {
    id: 3,
    hotelId: 1,
    userId: 103,
    roomId: 3,
    checkInDate: "2024-03-01",
    checkOutDate: "2024-03-05",
  },
];

export default reservations;
