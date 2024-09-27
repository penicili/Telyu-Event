import './EventBox.css'
import event from '../assets/event.jpg'
import { useHistory } from 'react-router-dom'
const EventBox =()=>{
//  fetch all events


const history = useHistory()
const handleDivClick =()=>{
    history.push('/event1')
}
    return(
        <div className="EventBox" onClick={handleDivClick}>
            <div className="eventbanner">
                <img src={event} alt="" className='eventimg'/>
            </div>
            <div className="eventtitle">
                <p>Genesis 2024</p>
            </div>
            <div className="eventdetails">
                <p>Bagi teman-teman yang telah menantikan GENESIS 2024 dan ingin <br /> mengenal jurusan Sistem infromasi serta mengasah kemampuan, <br />tiada waktu yang lebih baik daripada saat ini untuk bergabung dalam <br />GENESISI 2024</p>
            </div>
        </div>
    )
}
export default EventBox