import { useState } from "react"
import EventBox from "../Components/EventBox"
import './Dashboard.css'
import { useEffect } from "react";
import axios from "axios";
const Dashboard =()=>{
    // api keys
    const getEvents = ''


    // array event
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        axios.get('')
    })



    return(
        <div className="dashcontent">
                <p>Rekomendasi Event</p>
            <div className="rekomendasi">
                <EventBox/>
            </div>
                <p>Event Eksternal Kampus</p>
            <div className="eksternal">
                <EventBox/>
            </div>
                <p>Event Internal Kampus</p>
            <div className="internal">
                <EventBox/>
            </div>
        </div>
    )
}
export default Dashboard