import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

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

  return (
    <div style={{ marginLeft: '250px', marginTop: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by event type"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginRight: '10px', width: '200px' }}
        />
        <button style={{ backgroundColor: '#007bff', color: '#ffffff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Search</button>
      </div>
      {events.map((event, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', maxWidth: '500px' }}>
          <div style={{ fontWeight: 'bold' }}>Event Name: {event.eventName}</div>
          <div style={{ marginTop: '5px' }}>Event Type: {event.eventType}</div>
          <div style={{ marginTop: '5px' }}>Event Date: {event.eventDate}</div>
          <Link to={`/userAccount/${userId}/myEvents/${event.reservationId}/viewAlbum`} style={{ marginTop: '10px' }}>
            <button style={{ backgroundColor: '#007bff', color: '#ffffff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserEvents;
