import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectPhotos = () => {
    const { eventId } = useParams();
    const [eventPhotos, setEventPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventPhotos = async () => {
            try {
                const response = await fetch(`/api/eventPhotos/event/${eventId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch event photos');
                }
                const json = await response.json();
                setEventPhotos(json || []);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching event photos:', error);
            }
        };

        fetchEventPhotos();
    }, [eventId]);

    return (
        <div className="home">
            <div className="photos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginLeft: '250px' }}>
                {error && <p>Error: {error}</p>}
                {eventPhotos.map((photo, index) => (
                    <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                            src={photo}
                            alt={`Event ${index + 1}`}
                            style={{ width: '200px', height: '150px' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectPhotos;

