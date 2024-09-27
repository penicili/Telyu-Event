import './Landing.css'
import searchlogo from '../assets/searchlogo.png'
import tflogo from '../assets/tflogo.png'
import silogo from '../assets/silogo.png'
import ylogo from '../assets/ylogo.png'
import xlogo from '../assets/xlogo.png'
import tilogo from '../assets/tilogo.png'
import choirlogo from '../assets/choirlogo.png'
import landobg from '../assets/landingbg.png'
const Landing =()=>{
    return(
        <div className='landonorris'>
            <div className="landobg">
                <img src={landobg} alt="" className="landbgimg" />
            </div>
            <div className="logos">
                <img src={searchlogo} alt="" className="logox" />
                <img src={tflogo} alt="" className="logox" />
                <img src={silogo} alt="" className="logox" />
                <img src={ylogo} alt="" className="logox" />
                <img src={xlogo} alt="" className="logox" />
                <img src={tilogo} alt="" className="logox" />
                <img src={choirlogo} alt="" className="logox" />
            </div>
        </div>
)}
    

export default Landing