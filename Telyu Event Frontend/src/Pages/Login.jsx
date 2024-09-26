import './Login.css'
import loginbgimg from '../assets/LoginBg.png'
import logoTevent from '../assets/TeventLogo.png'
import mataCoret from '../assets/EyeSlashFill.png'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



const Login = () =>{

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
    const handleMasukButton =() =>{
        history.push('/')
    }

    return(
        <div className="loginBg" style={{backgroundImage:`url(${loginbgimg})`}}>
            <div className='logo'>
                <img src={logoTevent} alt="" />
            </div>
            <div className="loginMasuk" style={{backgroundColor:'white'}}>
                <div className='kotakLogin' style={{display:'flex', flexDirection:'column'}}>
                    <h1>Masuk</h1>

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