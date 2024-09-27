import './Landing.css'
import searchlogo from '../assets/searchlogo.png'
import tflogo from '../assets/tflogo.png'
import silogo from '../assets/silogo.png'
import ylogo from '../assets/ylogo.png'
import xlogo from '../assets/xlogo.png'
import tilogo from '../assets/tilogo.png'
import choirlogo from '../assets/choirlogo.png'
import landobg from '../assets/landingbg.png'
import orang from '../assets/orang.png'
import questionpict from '../assets/questionpict.png'
import medsos from '../assets/medsos.png'
import accordion from '../assets/Accordions.png'
import { useHistory } from 'react-router-dom'


const Landing =()=>{
// const apiUrl = 'https://483d-36-65-250-80.ngrok-free.app/';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTcyNzQxMTU5MywiZXhwIjoxNzI3NDk3OTkzfQ.Afkki42-9_QoJY-v4P5HvQZ65wNkMZMlTsS4hifTAhw'
// const getItems = async () => {
//     const response = await fetch(`${apiUrl}`,{
//         mode: 'cors',
//         method: 'GET',
//         headers: {
//             "ngrok-skip-browser-warning": "true",
//             "Authorization": `Bearer ${token}`
//         },
//     })
//     const data = await response.json()
//     console.log(data)
// }
// getItems()

const history = useHistory()
const handelButton =()=>{
    history.push('/login')
}
    return(
        <div className='landonorris'>
            <div className="landobg">              
                <img src={landobg} alt="" className="landbgimg" />
                <div className='apaini' style={{display:'flex', flexDirection:'column', position:'absolute'}}>
                    <p style={{textAlign:'center', fontSize:'49px', fontWeight:'bold'}}>Jembatan Menuju Pengalaman <br />Kampus yang Tak Terlupakan</p>
                    <p style={{textAlign:'center', fontSize:'16px'}}>Kami mendorong setiap mahasiswa untuk mewarnai kisah kampus mereka. Sebagai katalis perubahan <br /> dan kreativitas, kami menghubungkan passion Anda dengan peluang tak terbatas di dunia kampus.</p>
                    <button className='butong'
                    onClick={handelButton}
                    >
                        Mulai Petualanganmu Sekarang
                        
                    </button>
                </div>
            </div>
            <div className="logos">
                <img src={searchlogo} alt="" style={{width:'119px', height:'82px'}} />
                <img src={tflogo} alt="" className="logox" />
                <img src={silogo} alt="" className="logox" />
                <img src={ylogo} alt="" className="logox" />
                <img src={xlogo} alt="" className="logox" />
                <img src={tilogo} alt="" className="logox" />
                <img src={choirlogo} alt="" className="logox" />
            </div>
            <div className="aboutus">
                <div className="imag">
                    <img src={orang} alt="" />
                </div>
                <div className="text">
                    <p style={{fontSize:'24px', color:'#ED1E28',fontWeight:'650'}}>Tentang Kami</p>
                    <p style={{fontSize:'40px', fontWeight:'bold'}}>Mulai petualanganmu dengan Tel-U Event!</p>
                    <p style={{fontSize:'30px'}}>Tel-U Event adalah pusat aktivitas untuk mahasiswa Telkom <br /> University, membuka peluang untuk tumbuh dan berinovasi. Di <br />sini, kamu tidak hanya menjadi peserta, tapi juga pencipta <br />, inovator, dan pelopor di setiap acara. Dengan berbagai kegiatan <br /> mulai dari seminar inspiratif hingga kompetisi sengit, Tel-U Event <br /> membuka pintu menuju kesempatan tanpa batas untuk <br /> berkembang dan bersinar. Bergabunglah bersama kami dan <br /> mulai petualanganmu dalam meraih mimpi!</p>
                
                </div>
            </div>
            <div className="faq">
                <div className="faqleft">
                    <p style={{fontSize:'39px',fontWeight:'650'}}>Frequently asked questions</p>
                    <p style={{fontSize:'16px'}}>Gak usah bingung, semua jawabannya ada di sini! Mulai dari cara daftar, info acara, hingga tips <br /> biar gak ketinggalan event seru. Klik-klik aja, cari yang kamu butuh, atau tanya langsung kalau <br /> masih ada yang ngganjel. Yuk, kita bantu biar petualanganmu makin seru!</p>
                    <img src={accordion} alt="" />
                </div>
                <div className="faqyu">
                    <img src={questionpict} alt="" />
                    <p style={{fontSize:'24px', fontWeight:'650'}}>Masih ada pertanyaan?</p>
                    <p style={{marginBottom:'64px'}}>Jangan Ragu! Kalau masih ada yang bikin penasaran, langsung aja <br /> kontak kami Yuk, hubungi sekarang!</p>
                    <img src={medsos} alt="" />
                </div>
            </div>
        </div>
)}
    

export default Landing