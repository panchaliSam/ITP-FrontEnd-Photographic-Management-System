import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPhotoFilm, faVideo, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/V De Silva Logo PNG.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#home">
        <img 
          src={logo} 
          alt="Logo"
          style={{
            top: 0,
            left: '30px',
            height: '110px',
            width: '110px'
          }} 
        />
      </a>
      <a href="/selectPhotos">
        <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", marginRight: '5px' }} />
        Photos
      </a>
      <a href="/viewVideos">
        <FontAwesomeIcon icon={faVideo} style={{ color: "#ffffff", marginRight: '5px' }} />
        Videos
      </a>
      <a href="/viewAlbum">
        <FontAwesomeIcon icon={faPhotoFilm} style={{ marginRight: '5px' }} />
        Albums
      </a>
      <a href="/paymentHistory">
        <FontAwesomeIcon icon={faCreditCard} style={{ color: "#ffffff", marginRight: '5px' }} />
        Payment
      </a>
    </div>
  );
}

export default Sidebar;
