import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState(null);
  const { userId, eventId } = useParams();

  useEffect(() => {
    // Fetch event details from backend API
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`/api/album/viewAlbum/${eventId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }
        const data = await response.json();
        setEventDetails(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
    <div>
      {eventDetails ? (
        <div>
          <h2>Event Details</h2>
          <p>Event Name: {eventDetails.eventName}</p>
          <p>Event Type: {eventDetails.eventType}</p>
          <p>Staff Name: {eventDetails.staffName}</p>
          <Link to={`/userAccount/${userId}/myEvents/${eventId}/viewAlbum`}>
            <button>View</button>
          </Link>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default EventDetails;
