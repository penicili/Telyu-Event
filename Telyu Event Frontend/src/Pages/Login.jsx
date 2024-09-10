import './Login.css'
import loginbgimg from '../assets/loginBg-Placeholder.jpg'
const Login = () =>{


    return(
        <div className="loginBg" style={{backgroundImage:`url(${loginbgimg})`}}>
            <div className="loginMasuk" style={{backgroundColor:'white'}}>
                <div className='kotakLogin' style={{display:'flex', flexDirection:'column'}}>
                    <h1>Masuk</h1>

                    <input type="email" 
                    placeholder='Email'
                    />
                    <input type="password" 
                    placeholder='Kata sandi'
                    />
                    <button className='MasukButton'>
                        Masuk
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login