import './Navbar.css'
import navbarlogo from '../assets/navbarlogo.png'
import notificon from '../assets/notificon.png'
import searchicon from '../assets/searchicon.png'
import profpic  from '../assets/profpic.png'
import { useLocation } from 'react-router-dom'
const Navbar =() =>{

    const location = useLocation();
const handleLogoclick=()=>{
    window.location.href="/dashboard"
}
const handleMasukclick =()=>{
    window.location.href="/login"
}
return(
    <div className='navbar'>
        <div className='navbarlogo'>
            <img src={navbarlogo} alt="navbarlogo" onClick={handleLogoclick} />
        </div>
        {location.pathname != '/' &&         <div className='searchbar'>
            <input type="text"
            placeholder='Cari eventmu disini' />
            <img src={searchicon} alt="cari" />
        </div>}

        <ul className={`navchoice ${location.pathname === '/' ? 'navchoice-no-searchbar' : ''}`}>
            <li><a href="/kalender">Kalender</a></li>
            <li>Tentang Kami</li>
            <li>Kontak Kami</li>
        </ul>
            {location.pathname != '/' &&         <div className='notificon'>
            <img src={notificon} alt="notificon" />
        </div>  }

        <div className='profpic'>          
            {location.pathname === '/' ? (
                <div className='logbutton' onClick={handleMasukclick}>
                    <button>
                        Masuk
                    </button>
                    </div>
            ) : (
                <img src={profpic} alt="" />
            )}
        </div>
    </div>
)}
export default Navbar