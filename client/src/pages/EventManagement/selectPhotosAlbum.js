import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as fasCheckCircle } from "@fortawesome/free-solid-svg-icons";
import EventPhotos from "../../components/EventManagement/eventPhotos";

const SelectPhotos = () => {
    const [eventPhotos, setEventPhotos] = useState([]);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventPhotos = async () => {
            try {
                const eventPhotoId = '1';
                const userId = '1';
                const eventId = '1';

                const response = await fetch(`/api/eventPhotos/eventPhotos/${eventPhotoId}/${userId}/${eventId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch event photos');
                }
                const json = await response.json();
                console.log('Fetched event photos response:', json); // Log the response
                setEventPhotos(json.imageURL || []);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching event photos:', error);
            }
        };

        fetchEventPhotos();
    }, []);

    console.log('Event photos state:', eventPhotos);

    const handleSelect = (photo) => {
        // Toggle the selection state of the photo
        setSelectedPhotos(prevSelectedPhotos => {
            if (prevSelectedPhotos.includes(photo)) {
                return prevSelectedPhotos.filter(selectedPhoto => selectedPhoto !== photo);
            } else {
                return [...prevSelectedPhotos, photo];
            }
        });
    };

    return (
        <div className="home">
            <div className="photos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginLeft: '250px' }}>
                {error && <p>Error: {error}</p>}
                {eventPhotos.map((photo, index) => (
                    <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handleSelect(photo)}>
                            <EventPhotos
                                eventPhoto={{ imageURL: photo }}
                                // width="200px"
                                // height="150px"
                            />
                            <FontAwesomeIcon
                                icon={fasCheckCircle}
                                size="2x"
                                style={{
                                    position: 'absolute',
                                    top: '-2px',
                                    right: '0px',
                                    color: selectedPhotos.includes(photo) ? '#37ff00' : 'transparent', // Change color when selected
                                    fontWeight: 'bold',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectPhotos;
