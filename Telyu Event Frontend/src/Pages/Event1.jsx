import './Event1.css'
import { useState } from 'react'
import eventimg from '../assets/event.jpg'
import calvector from '../assets/calvector.png'
import clock from '../assets/clock.png'
import location from '../assets/location 1.png'
import silogo from '../assets/silogo.png'
import Popupcomponent from '../Layout/Popupcomponent'
const Event1 =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(!isOpen);
    };


    const [buttonState, setbuttonState] = useState(0)
    const handlebutPress = ()=>{
        setbuttonState(buttonState+1)
        if(buttonState >= 2){
            handleOpen()
        }
        setinputs([...inputs, {
            name: inputname,
            nim: inputnim,
            kelas: inputkelas
          }])
    }



    const [inputname, setinputname] = useState('')
    const [inputnim, setinputnim] = useState('')
    const [inputkelas, setinputkelas] = useState('')

    const [inputs, setinputs] =useState([])

    const handleinputname =()=>{
        setinputname(event.target.value)
    }
    const handleinputnim =()=>{
        setinputnim(event.target.value)
        
    }
    const handleinputkelas =()=>{
        setinputkelas(event.target.value)

    }

    const renderContent = () => {
        switch (buttonState) {
            case 0:
            return <div className='satu'>
                <p>Isi form dibawah!</p>
                <input style={{opacity:0.3}}
                type="text" 
                    placeholder='Nama lengkap'
                    value={inputname}
                    onChange={handleinputname}
                    
                    />
                <input style={{opacity:0.3, paddingTop:'30px'}}
                type="text" 
                    placeholder='NIM'
                    value={inputnim}
                    onChange={handleinputnim}
                    />
                <input style={{opacity:0.3, paddingTop:'30px'}}
                type="text" 
                    placeholder='Kelas'
                    value={inputkelas}
                    onChange={handleinputkelas}
                    />
            </div>;
            default:
            return <div className='dua'>
                <div className='namaevent'>
                    <p>Genesis 2024</p>
                </div>
                <div className="tanggalevent">
                    <img src={calvector} alt="" className='logok'/>
                    <p>1 Januari 2003 - Selesai</p>
                </div>
                <div className="waktuevent" >
                    <img src={clock} alt="" className='logok' />
                    <p>07.00 - 23.00</p>
                </div>
                <div className="tempat">
                    <img src={location} alt="" className='logok' />
                    <p>Telkom University Landmark Tower</p>
                </div>
                <div className='dottedLine'></div>
                <div className="penyelenggara">
                    <div className="penyelenggaralogo">
                        <img style={{width:'68px', height:'68px'}} src={silogo} alt="" />
                    </div>
                    <div className="penyelenggaratext">
                        <p style={{fontSize:'20px', opacity:'0.3'}}>Diselenggarakan oleh:</p>
                        <p style={{fontSize:'24px', fontWeight:'bold'}}>Himpunan Mahasiswa Sistem Informasi</p>
                    </div>
                </div>
            </div>;
        }
        };


    return(
        <div className="event1">
            <Popupcomponent isOpen={isOpen}/>
            <div className="top" >
                <div className="left" style={{overflow:'hidden', borderRadius:'35px'}}>
                    <img src={eventimg} alt="" className="banner" />
                </div>
                <div className="right" style={{backgroundColor:'white', borderRadius:'35px', boxShadow:'0px 3px 10px rgba(56, 56, 56, 0.3)'}}> 
                {renderContent()}
                </div>
            </div>
            <div className="bot">
                <div className="left" >
                    <p style={{fontWeight:'bold',fontSize:'24px'}}>Deskripsi</p>
                    <p style={{fontSize:'20px',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                </div>
                <div className="right">
                    <button 
                    onClick={handlebutPress}
                    className="sbutton">
                        Daftar sekarang
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Event1