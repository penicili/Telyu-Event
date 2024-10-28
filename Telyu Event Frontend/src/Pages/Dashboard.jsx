import { useState, useEffect } from "react";
import EventBox from "../Components/EventBox";
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    // State untuk menyimpan events
    const [events, setEvents] = useState([]);

    // Fungsi untuk mengambil events dari API
    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem('token'); // Ambil token dari local storage
            const response = await axios.get('http://localhost:5000/event', {
                headers: {
                    Authorization: `Bearer ${token}` // Kirim token di header
                }
            });
            setEvents(response.data); // Simpan data events ke state
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Panggil fetchEvents saat komponen di-mount
    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="dashcontent">
            <p>Rekomendasi Event</p>
            <div className="rekomendasi">
                {events.length > 0 ? (
                    events.map(event => (
                        <EventBox key={event.id} event={event} />
                    ))
                ) : (
                    <p>Tidak ada event yang tersedia.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;