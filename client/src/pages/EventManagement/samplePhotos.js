import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectPhotos = () => {
  const { eventId } = useParams();
  const [eventPhotos, setEventPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchEventPhotos = async () => {
      try {
        const response = await fetch(`/api/eventPhotos/event/${eventId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event photos");
        }
        const json = await response.json();
        setEventPhotos(json || []);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching event photos:", error);
      }
    };

    fetchEventPhotos();
  }, [eventId]);

  // Function to handle click on an image and enlarge it
  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // Function to handle closing enlarged image view
  const handleCloseImage = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="home">
      <div className="photos">
        {error && <p>Error: {error}</p>}
        {/* Map through event photos and render each image */}
        {eventPhotos.map((photo, index) => (
          <div key={index} className="photo-container">
            <img
              src={photo}
              alt={`Event ${index + 1}`}
              className="photo"
              onClick={() => handleImageClick(photo)} // Handle click event
            />
          </div>
        ))}
        {/* Overlay for enlarged image view */}
        {selectedPhoto && (
          <div className="overlay" onClick={handleCloseImage}>
            <img src={selectedPhoto} alt="Enlarged" className="enlarged-photo" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPhotos;
