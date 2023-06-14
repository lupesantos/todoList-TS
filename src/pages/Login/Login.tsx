import { useContext, useEffect } from 'react';
import     UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import          {Link} from 'react-router-dom'
import            Swal from 'sweetalert2'
import           axios from "axios";
import           React from "react";
import '../Login/Login.css'

const Login: React.FC = () => {
  const User = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(()=> {  //persistir dados de login!
		const token = JSON.parse(localStorage.getItem("todo")!)?.token;
    User?.setToken?.(token)
    console.log(User?.token)
		if(token){
			navigate("/dashboard")
		}
	}, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const signin = axios.post("http://localhost:4000/sign-in", User)
              signin.then(result => 
                {
                    User?.setToken?.(result.data)
                    const JSONauth = JSON.stringify({
                      token: result.data.token,
                    });
                    localStorage.setItem('todo', JSONauth);
                    navigate('/dashboard');                  
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
            <span>Email</span>
            <input type="email" className="form-field" value={User?.email} onChange={(e) => 
              User?.setEmail?.(e.target.value)}/>
        </div>
        <div className="form-group">
            <span>Senha</span>
            <input type="password" className="form-field" value={User?.password} onChange={(e) => User?.setPassword?.(e.target.value)}/>
        </div>
        <button type="submit"  className="form-field">Login</button>
        <Link to='/cadastro' className="form-group2" >
            <span>Não possui cadastro ainda? Clique aqui!</span>       
          </Link>  
      </form>
    </div>
  );
};


export default Login;
