interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  {
    id: 101,
    name: "Usuário A",
    email: "usuarioA@email.com",
  },
  {
    id: 102,
    name: "Usuário B",
    email: "usuarioB@email.com",
  },
  {
    id: 103,
    name: "Usuário C",
    email: "usuarioC@email.com",
  },
];

export default users;
