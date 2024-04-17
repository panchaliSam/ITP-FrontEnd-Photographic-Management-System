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

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

