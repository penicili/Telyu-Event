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
    fetch


//  login
const apiUrl = 'https://483d-36-65-250-80.ngrok-free.app/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTcyNzQxMTU5MywiZXhwIjoxNzI3NDk3OTkzfQ.Afkki42-9_QoJY-v4P5HvQZ65wNkMZMlTsS4hifTAhw'
const getItems = async () => {
    const response = await fetch(`${apiUrl}`,{
        mode: 'cors',
        method: 'GET',
        headers: {
            "ngrok-skip-browser-warning": "true",
            "Authorization": `Bearer ${token}`
        },
    })
    const data = await response.json()
    console.log(data)
}
getItems()






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