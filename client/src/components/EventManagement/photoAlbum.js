import React, { useState } from 'react';
import axios from 'axios';

const PhotoAlbum = () => {
    const [photoAlbumId, setPhotoAlbumId] = useState('');
    const [userId, setUserId] = useState('');
    const [eventId, setEventId] = useState('');
    const [staffId, setStaffId] = useState('');
    const [albumDetails, setAlbumDetails] = useState({});
    const [staffDetails, setStaffDetails] = useState({});

    const fetchAlbumDetails = async () => {
        try {
            // Fetch event details
            const eventResponse = await axios.get(`/api/eventAlbum/albumDetails/${eventId}`);
            setAlbumDetails(eventResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchStaffDetails = async () => {
        try {
            // Fetch staff details
            const staffResponse = await axios.get(`/api/eventAlbum/staffDetails/${staffId}`);
            setStaffDetails(staffResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleViewDetails = async (e) => {
        e.preventDefault();
        fetchAlbumDetails();
        fetchStaffDetails();
    };

    return (
        <div className="photoAlbum">
            <form>
                <label>
                    Photo Album ID:
                    <input type="text" value={photoAlbumId} onChange={(e) => setPhotoAlbumId(e.target.value)} />
                </label>
                <label>
                    User ID:
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <label>
                    Event ID:
                    <input type="text" value={eventId} onChange={(e) => setEventId(e.target.value)} />
                </label>
                <label>
                    Staff ID:
                    <input type="text" value={staffId} onChange={(e) => setStaffId(e.target.value)} />
                </label>
                <button onClick={handleViewDetails}>View Details</button>
            </form>
            <h2>Event Details</h2>
            <div className="eventCard">                
                <p>Event Name: {albumDetails.eventName}</p>
                <p>Event Type: {albumDetails.eventType}</p>
                <p>Staff Name: {staffDetails.empName}</p>
            </div>
        </div>
    );
};

export default PhotoAlbum;


