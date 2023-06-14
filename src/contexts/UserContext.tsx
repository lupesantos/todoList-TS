import { createContext } from "react";

interface User {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    token?: string,
    setEmail?: React.Dispatch<React.SetStateAction<string>>,
    setName?: React.Dispatch<React.SetStateAction<string>>,
    setToken?: React.Dispatch<React.SetStateAction<string>>,
    setPassword?: React.Dispatch<React.SetStateAction<string>>,
  }

const UserContext = createContext<User| null>(null);

export default UserContext;