import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserEvents = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log('Response Data:');
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
    <div>
      <h2>Events for User {userId}</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>Event Name:</strong> {event.eventName}<br />
            <strong>Event Type:</strong> {event.eventType}<br />
            <strong>Event Date:</strong> {event.eventDate}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserEvents;
