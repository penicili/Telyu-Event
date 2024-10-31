import './Login.css'
import loginbgimg from '../assets/LoginBg.png'
import logoTevent from '../assets/TeventLogo.png'
import mataCoret from '../assets/EyeSlashFill.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Login = () =>{
    // aaaaaaa
    const [error, setError] = useState('');
    //apa
    const loginUser = async (credentials) => {
        const url = `${import.meta.env.VITE_API_KEY}/user/login`;
        try {
          const response = await fetch(url, {
            method: 'POST',
            // mode:'no-cors',
            headers: {
                "ngrok-skip-browser-warning": "true",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Ngrok-Version': '2',
                credentials:'include',
            },
            body: JSON.stringify(credentials),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error logging in:', error);
          throw error;
        }
      };
    // 
    const history = useHistory()
    // state untuk password keliatan apa kga
    const [passVisible, setPassVisible] = useState(false);
    const togglePassVis =()=>{
        setPassVisible(!passVisible)
    }

    // state untuk isi input
    const [userEmail, setUserEmail] =useState('')
    const [userPass, setUserPass] = useState('')

    // state untuk handling isi input
    const handleInputEmail = (event) =>{
        setUserEmail(event.target.value)
    }
    const handleInputPassword = (event) =>{
        setUserPass(event.target.value)
    }

    // masuk login pak eko
    const handleMasukButton = async () => {
        try {
            if (!userEmail || !userPass) {
                setError('Email dan password harus diisi');
                return;
            }
    
            const response = await loginUser({
                email: userEmail,    
                password: userPass   
            });
            
            console.log('Login successful:', response);
            localStorage.setItem('token', response.token);
            history.push('/dashboard');
        } catch (error) {
            setError('Login gagal. Periksa email dan password Anda.');
        }
    };

    return(
        <div className="loginBg" style={{backgroundImage:`url(${loginbgimg})`}}>
            <div className='logo'>
                <img src={logoTevent} alt="" />
            </div>
            <div className="loginMasuk" style={{backgroundColor:'white'}}>
                <div className='kotakLogin' style={{display:'flex', flexDirection:'column'}}>
                    <h1>Masuk</h1>
                    {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}

                    <input type="email" 
                    placeholder='Email'
                    value={userEmail}
                    onChange={handleInputEmail}
                    />
                    <div className='passwordInput' style={{display:'flex'}}>
                        <input type={passVisible ? 'text' : 'password'}
                        placeholder='Kata sandi'
                        value={userPass}
                        onChange={handleInputPassword}
                        />
                        <button className='showHide'
                        onClick={togglePassVis}>
                            <img 
                            src={mataCoret} alt="sembunyikan/tampilkan" />
                            </button>
                    </div>
                    <button 
                    className='masukButton'
                    onClick={handleMasukButton}>
                        Masuk
                    </button>

                </div>
            </div>
            
        </div>
    )
}

export default Login