import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

import MyEvents from '../../components/EventManagement/myEvents';

const MyEventsPage = () => {
  const { userId } = useParams();

  console.log("userId:", userId); // Add console log here

  return (
    <div>
      <h1><center>My Events</center></h1>
      <MyEvents userId={userId} />
    </div>
  );
};

export default MyEventsPage;
