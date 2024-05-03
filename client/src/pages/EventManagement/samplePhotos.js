import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from 'react-masonry-css';

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

  // Function to handle mouse over a photo and resize it
  const handleMouseOver = (index) => {
    // You can add custom styles here to resize the photo on mouse over if needed
    // For simplicity, let's just log the index for now
    console.log("Mouse over photo index:", index);
  };

  // Define the breakpoints and corresponding column counts
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="home">
      <div className="photos">
        {error && <p>Error: {error}</p>}
        {/* Use the Masonry component for the layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* Map through event photos and render each image */}
          {eventPhotos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Event ${index + 1}`}
                className="photo"
                onClick={() => handleImageClick(photo)}
                onMouseOver={() => handleMouseOver(index)}
              />
            </div>
          ))}
        </Masonry>
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
