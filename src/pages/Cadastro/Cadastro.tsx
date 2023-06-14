import UserContext     from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import {Link}          from 'react-router-dom'
import Swal            from 'sweetalert2'
import { useContext }  from 'react';
import React           from "react";
import axios           from "axios";
import '../Login/Login.css'

const Cadastro: React.FC = () => {
  const User = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const signup = axios.post("http://localhost:4000/sign-up", User)
              signup.then(result => 
                {
                    User?.setToken?.(result.data)
                    navigate('/');                  
                }).catch((result) => 
                {                
                  Swal.fire({
                    title: "Error: " + result.response.statusText,
                    text: "Status: " + result.response.status,
                    footer: "Motivo: " + result.response.data
                  })
                });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <span>Nome</span>
            <input type="text" className="form-field" value={User?.name} onChange={(e) => User?.setName?.(e.target.value)}/>
        </div>
        <div className="form-group">
            <span>Email</span>
            <input type="email" className="form-field" value={User?.email} onChange={(e) => User?.setEmail?.(e.target.value)}/>
        </div>
        <div className="form-group">
            <span>Senha</span>
            <input type="password" className="form-field" value={User?.password} onChange={(e) => User?.setPassword?.(e.target.value)}/>
        </div>
        <button type="submit" className="form-field">Cadastro</button>
        <Link to='/' className="form-group2" >
            <span>Já possui uma conta? Clique aqui!</span>       
          </Link> 
      </form>
    </div>
  );
};


export default Cadastro;