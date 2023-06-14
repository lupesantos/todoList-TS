import { BrowserRouter, Routes, Route } from 'react-router-dom';
import          Dashboard from "./pages/Dashboard/Dashboard";
import           Cadastro from "./pages/Cadastro/Cadastro";
import        UserContext from "./contexts/UserContext";
import              Login from "./pages/Login/Login";
import               Ola2 from "./pages/Ola2";
import                Ola from "./pages/Ola";
import React, { useState} from "react";

const App: React.FC = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="App">
      <UserContext.Provider 
        value={{
            email, 
            setEmail,
            password,
            setPassword,
            name,
            setName,
            token,
            setToken
             }}>
        <BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/ola' element={<Ola />} />
            <Route path='/ola2' element={<Ola2 />} />
          </Routes>
				</BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;