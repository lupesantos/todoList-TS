import {Link}  from 'react-router-dom'
import './Ola.css'

export default function Ola (){
    return (
        <div>
        

        <div className="box">
	        <form>
		        <span className="text-center">login</span>
	            <div className="input-container">
		            <input type="text"/>
		            <label>Full Name</label>		
	            </div>
	            <div className="input-container">		
		            <input type="mail"/>
		            <label>Email</label>
	            </div>
                <Link to="/ola2">
                    <button type="button" className="btn">submit</button>
                </Link>
		        
            </form>	
        </div>


            


            
        </div>
    )
}