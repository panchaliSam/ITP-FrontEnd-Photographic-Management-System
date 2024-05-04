import React from 'react';
import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

import MyEvents from '../../components/EventManagement/myEvents';

const MyEventsPage = () => {
  const { userId } = useParams();

  console.log("userId:", userId); // Add console log here

  return (
    <div>
      <h1><center>My Events</center></h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Link to={`/userAccount/${userId}/myEvents/addEvents`} className="add-button button-margin">Add Event</Link>
      </div>
      <MyEvents userId={userId} />
    </div>
  );
};

export default MyEventsPage;

