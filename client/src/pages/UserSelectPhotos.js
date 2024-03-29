import React, { useEffect, useState } from "react";
import EventPhotoDetails from "../components/eventPhotoAlbum";

const Home = () => {
    const [eventPhoto, setEventPhoto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventPhoto = async () => {
            try {
                const response = await fetch('/api/eventPhotoAlbum/photos/65f285703a6187d5d7cb6f30');
                if (!response.ok) {
                    throw new Error('Failed to fetch event photo');
                }
                const json = await response.json();
                console.log('Fetched event photo response:', json); // Log the response
                setEventPhoto(json);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching event photo:', error);
            }
        };

        fetchEventPhoto();
    }, []);

    console.log('Event photo state:', eventPhoto); // Add console.log for debugging

    return (
        <div className="home">
            <div className="photo">
                {error && <p>Error: {error}</p>}
                {eventPhoto && (
                    <EventPhotoDetails eventPhoto={eventPhoto} key={eventPhoto._id} width="200px" height="150px"/>
                )}
            </div>
        </div>
    );
}

export default Home;
