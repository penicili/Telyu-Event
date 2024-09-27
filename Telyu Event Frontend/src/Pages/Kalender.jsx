import './Kalender.css'
import silogo from '../assets/silogo.png'
import tflogo from '../assets/tflogo.png'
import searchlogo from '../assets/searchlogo.png'
import choirlogo from '../assets/choirlogo.png'
import xlogo from '../assets/xlogo.png'
import group1 from '../assets/group1.png'
import group2 from '../assets/group2.png'
import group3 from '../assets/group3.png'
import group4 from '../assets/group4.png'
import group5 from '../assets/group5.png'
import { useState } from 'react'


const Kalender =()=>{
 const[select, setSelect]= useState('Bulanan')
 const options =[
    {value: 'Bulanan', label:'Bulanan'},
    {value:'Mingguan', label:'Mingguan'}
 ]



    return(
        <div className="kalender">
            <div className="harini">
                <div className="kegiatan">
                    <p className='tanggal'>Senin, 2 September 2024</p>
                    <ul className='ngapain'>
                        <li>
                            <img className='alogo' src={silogo} alt="" />
                            <a href="/genesis2024">Genesis 2024</a>
                            <img src={group1} alt="" className="group" />
                        </li>
                        <li>
                            <img className='alogo' src={tflogo} alt="" />
                            <a>MPM HMTF</a>
                            <img src={group2} alt="" className="group" />
                        </li>
                    </ul>
                </div>
                <div className="kegiatan">
                    <p className="tanggal">Minggu, 15 September 2024</p>
                    <ul className="ngapain">
                        <li>
                            <img className='alogo' src={choirlogo} alt="" />
                            <a>Tel-U Choir Live</a>
                            <img src={group3} alt="" className="group" />
                        </li>
                    </ul>
                </div>
                <div className="kegiatan">
                    <p className="tanggal">Jumat, 20 September 2024</p>
                    <ul className="ngapain">
                        <li>
                            <img className='alogo' src={searchlogo} alt="" />
                            <a>Campus Visit</a>
                            <img src={group4} alt="" className="group" />
                        </li>
                    </ul>
                </div>
                <div className="kegiatan">
                    <p className="tanggal">Rabu, 25 September 2024</p>
                    <ul className="ngapain">
                        <li>
                            <img className='alogo' src={xlogo} alt="" />
                            <a>Fun Match</a>
                            <img src={group5} alt="" className="group" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bulanni">
                <p className="bulantahun">September, 2024</p>
                <div className='titik'>
                    <p className="pesan">Warnai September-mu dengan Tel-U Event! 🤩</p>
                    <select 
                    className='apalah'
                    value={select} 
                    onChange={(e)=> setSelect(e.target.value)}>
                        {options.map((option)=>(
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="kalenders">
                    <div className="calendar-header">
                        <div className="day">Minggu</div>
                        <div className="day">Senin</div>
                        <div className="day">Selasa</div>
                        <div className="day">Rabu</div>
                        <div className="day">Kamis</div>
                        <div className="day">Jumat</div>
                        <div className="day">Sabtu</div>
                    </div>
                    <div className="calendar-body">
                        <div className="week">
                        <div className="date">1</div>
                        <div className="date" style={{display:'flex', flexDirection:'column'}}>
                            2
                            <div style={{marginTop:'auto',display:'flex', paddingLeft:'0px'}}>
                            <img src={silogo} alt="" />
                            <img src={tflogo} alt="" />
                            </div>
                        </div>
                        <div className="date">3</div>
                        <div className="date">4</div>
                        <div className="date">5</div>
                        <div className="date">6</div>
                        <div className="date">7</div>
                        </div>
                        <div className="week">
                        <div className="date">8</div>
                        <div className="date">9</div>
                        <div className="date">10</div>
                        <div className="date">11</div>
                        <div className="date">12</div>
                        <div className="date">13</div>
                        <div className="date">14</div>
                        </div>
                        <div className="week">
                        <div className="date" style={{display:'flex', flexDirection:'column'}}>
                            15
                            <div style={{marginTop:'auto',display:'flex', paddingLeft:'0px'}}>
                            <img src={choirlogo} alt="" />
                            </div>

                            </div>
                        <div className="date">16</div>
                        <div className="date">17</div>
                        <div className="date">18</div>
                        <div className="date">19</div>
                        <div className="date" style={{display:'flex', flexDirection:'column'}}>
                            20
                            <div style={{marginTop:'auto',display:'flex', paddingLeft:'0px'}}>
                            <img src={searchlogo} alt="" />
                            </div>
                            </div>
                        <div className="date">21</div>
                        </div>
                        <div className="week">
                        <div className="date">22</div>
                        <div className="date">23</div>
                        <div className="date">24</div>
                        <div className="date">25</div>
                        <div className="date" style={{display:'flex', flexDirection:'column'}}>
                            26
                            <div style={{marginTop:'auto',display:'flex', paddingLeft:'0px'}}>
                            <img src={xlogo} alt="" />
                            </div>
                            </div>
                        <div className="date">27</div>
                        <div className="date">28</div>
                        </div>
                        <div className="week">
                        <div className="date">29</div>
                        <div className="date">30</div>
                        <div className="date">31</div>
                        <div className="date"></div>
                        <div className="date"></div>
                        <div className="date"></div>
                        <div className="date"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Kalender