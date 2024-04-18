import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

import MyEvents from '../../components/EventManagement/myEvents';

const MyEventsPage = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>My Events</h1>
      <MyEvents userId={userId} />
    </div>
  );
};

export default MyEventsPage;
