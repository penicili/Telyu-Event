import './Navbar.css'
import navbarlogo from '../assets/navbarlogo.png'
import notificon from '../assets/notificon.png'
import searchicon from '../assets/searchicon.png'
import profpic  from '../assets/profpic.png'
const Navbar =() =>{


return(
    <div className='navbar'>
        <div className='navbarlogo'>
            <img src={navbarlogo} alt="navbarlogo"  />
        </div>
        <div className='searchbar'>
            <input type="text"
            placeholder='Cari eventmu disini' />
            <img src={searchicon} alt="cari" />
        </div>
        <ul className="navchoice">
            <li><a href="/kalender">Kalender</a></li>
            <li>Tentang Kami</li>
            <li>Kontak Kami</li>
        </ul>
        <div className='notificon'>
            <img src={notificon} alt="notificon" />
        </div>
        <div className='profpic'>
            <img src={profpic} alt="" />
        </div>
    </div>
)}
export default Navbar