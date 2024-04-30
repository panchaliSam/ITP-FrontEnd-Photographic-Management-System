import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import ViewAlbums from '../../components/EventManagement/viewAlbum';
import SideBar from '../../components/Sidebar'

const ViewAlbum = () => {
  // Call useParams to get userId and eventId from the URL
  const { userId, eventId } = useParams();

  return (
    <div>
      <SideBar />
      <h1><center>View Album Page</center></h1>
      <br></br>
      <ViewAlbums userId={userId} eventId={eventId} />
    </div>
  );
};

export default ViewAlbum;
