import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserEvents = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`/api/events/events/userEvents/${userId}`);
        console.log('Response Data:', response.data);
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (events.length === 0) {
    return <div>No events found for this user.</div>;
  }

  return (
    <div style={{ marginLeft: '250px', marginTop: '200px' }}> 
      {events.map((event, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title>{event.eventName}</Card.Title>
            <Card.Text>
              <br />
              <strong>Event Type:</strong> {event.eventType}
              <br />
              <strong>Event Date:</strong> {event.eventDate}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UserEvents;
