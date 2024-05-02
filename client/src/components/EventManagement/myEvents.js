import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserEvents = () => {
  const { userId } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let url = `/api/events/events/userEvents/${userId}`;
        if (searchTerm) {
          url = `/api/events/search/${userId}?eventType=${encodeURIComponent(searchTerm)}`;
        }
        const response = await axios.get(url);
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [userId, searchTerm]);

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (events.length === 0) {
    return <div>No events found for this user.</div>;
  }

  const eventImages = {
    "Wedding": "https://vdsp.blob.core.windows.net/eventcardsmyevents/wedding (2).jpg",
    "Birthday": "https://vdsp.blob.core.windows.net/eventcardsmyevents/Birthday.jpg",
    "Event": "https://vdsp.blob.core.windows.net/eventcardsmyevents/Events.jpg",
    "Couples": "https://vdsp.blob.core.windows.net/eventcardsmyevents/couples.jpg",
    "Graduation": "https://vdsp.blob.core.windows.net/eventcardsmyevents/graduation.jpg",
    "New Born": "https://vdsp.blob.core.windows.net/eventcardsmyevents/newBorn.jpg"
  };

  return (
    <div className="container mt-5" style={{ marginLeft: '200px' }}>
      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search by event type"
          value={searchTerm}
          onChange={handleSearch}
          className="mr-2"
          style={{ marginRight: '10px' }} // Adjust the right margin of the search input
        />
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {events.map((event, index) => (
          <div key={index} className="col mb-4">
            <Card className="h-100">
              {eventImages[event.eventType] && (
                <Card.Img variant="top" src={eventImages[event.eventType]} alt={event.eventType} style={{ maxHeight: '200px', objectFit: 'cover' }} />
              )}
              <Card.Body>
                <Card.Title>Event Name: {event.eventName}</Card.Title>
                <Card.Text>Event Type: {event.eventType}</Card.Text>
                <Card.Text>Event Date: {event.eventDate}</Card.Text>
                <Link to={`/userAccount/${userId}/myEvents/${event.reservationId}/viewAlbum`} className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEvents;

