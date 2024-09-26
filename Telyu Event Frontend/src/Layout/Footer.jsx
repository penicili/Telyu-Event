import './Footer.css'
import teventlogo from '../assets/Logosadios.png'
const Footer =()=>{

return(
    <div className="footer">
        <div className='logo12121'>
            <img src={teventlogo} alt="" />
        </div>
        <div className="tevent">
            <p style={{fontSize:'6vh', fontWeight:'bold', fontFamily:'Oxanium',color:'white', margin:'0', marginTop:'13vh'}}>Tel-U Event</p>
            <p style={{fontSize: '2vh', color:'white', margin:'0'}}>Create, Connect, Conquer.</p>
            <p style={{fontSize:'1.4vh', color:'white', margin:'0', marginTop:'0.05vh'}}>© Center of Information Technology Directorate, Telkom University</p>
        </div>
        <div className="link">
            <ul>
                <li>Beranda</li>
                <li>Tentang Kami</li>
                <li>Kontak Kami</li>
            </ul>
        </div>
    </div>
)
}

export default Footer