// // src/services/api.js
// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_KEY || 'http://localhost:5000';

// // Configure axios defaults
// axios.defaults.baseURL = API_BASE_URL;

// // User related API calls
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post('/user/register', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };

// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post('/user/login', credentials);
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

// export const getProfile = async (token) => {
//   try {
//     const response = await axios.get('/user/profile', {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching profile:', error);
//     throw error;
//   }
// };

// // Event related API calls
// export const getEvents = async (token) => {
//   try {
//     const response = await axios.get('/event', {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     throw error;
//   }
// };

// // get events by date 
// const getEventsByDate = async (token, date) => {
//   try {
//     const response = await axios.get(`/event/date?date=${date}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching events by date:', error);
//     throw error;
//   }
// };

// // get events by org
// const getEventsByOrganization = async (token, organization) => {
//   try {
//     const response = await axios.get(`/event/organization?eventHandler=${organization}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching events by organization:', error);
//     throw error;
//   }
// };

// // add new event 
// const addEvent = async (token, eventData) => {
//   try {
//     const formData = new FormData();
//     for (const key in eventData) {
//       formData.append(key, eventData[key]);
//     }
//     const response = await axios.post('/event/add', formData, {
//       headers: { 
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error adding event:', error);
//     throw error;
//   }
// };

// // update event
// const updateEvent = async (token, eventId, eventData) => {
//   try {
//     const response = await axios.put(`/event/edit/${eventId}`, eventData, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating event:', error);
//     throw error;
//   }
// };

// // delete event
// const deleteEvent = async (token, eventId) => {
//   try {
//     const response = await axios.delete(`/event/delete/${eventId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting event:', error);
//     throw error;
//   }
// };


// gajadi
