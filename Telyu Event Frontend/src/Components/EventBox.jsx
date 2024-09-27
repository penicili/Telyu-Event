import './EventBox.css'
import event from '../assets/event.jpg'
const EventBox =()=>{
//  fetch all events



    return(
        <div className="EventBox">
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