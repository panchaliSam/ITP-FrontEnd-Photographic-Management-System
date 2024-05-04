import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState(null);
  const { userId, eventId } = useParams();

  useEffect(() => {
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
    <div className="container mt-5" style={{ marginLeft: '200px', marginBottom: '20px' }}>
      {eventDetails ? (
        <Card className="event-details-card">
          <Card.Body>
            <Card.Title>Event Name: {eventDetails.eventName}</Card.Title>
            <Card.Text>Event Type: {eventDetails.eventType}</Card.Text>
            <Card.Text>Staff Name: {eventDetails.staffName}</Card.Text>
            <div className="button-group">
              <Link to={`/userAccount/${userId}/myEvents/${eventId}/viewAlbum/samplePhotos`}>
                <Button variant="primary" className="view-button">View Sample Photo</Button>
              </Link>
              <Link to={`/userAccount/${userId}/myEvents/${eventId}/viewAlbum/ratings`}>
                <Button variant="warning" className="view-button">Add Ratings</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default EventDetails;
