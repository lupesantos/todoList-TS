import './Ola2.css'
export default function Ola2 (){
    return (
        <div>
            {/* <div className="loginBox">
	            <form>
                    <div className='input-container2'>
                        <input type="text" placeholder='Email'/>
                        <span>Entrar</span>
                    </div>
		        </form>	
            </div>  */}

            <div className="form-group">
                <span>Email</span>
                <input type="email" className="form-field"/>
            </div>
            <div className='treino-group'>
                <span>Teste</span>
                <input type="text" placeholder='digite seu email' className='treino-field' />
            </div>
        </div>
    )
}