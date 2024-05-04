import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Navbar.css'
import './styles/Sidebar.css'
import './styles/footer.css'
import './index.css';

//Event Management System
import './styles/EventManagement/album.css'
import './styles/EventManagement/customerEvent.css'
import './styles/EventManagement/allAlbums.css'
// import './styles/EventManagement/myEvents.css'
import './styles/EventManagement/viewAlbum.css'
import './styles/EventManagement/addAlbum.css'
import './styles/EventManagement/samplePhotos.css'
import './styles/EventManagement/videoAlbum.css'

//User Management System
import './styles/UserManagement/userSideBar.css'
import './styles/UserManagement/adminManageButtons.css'

//Event Reservation Management System
import './styles/EventReservationManagement/reservationDetails.css'
import './styles/EventReservationManagement/allReservations.css'
import './styles/EventReservationManagement/ReservationForm.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

