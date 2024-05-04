// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faPhotoFilm, faVideo, faCreditCard } from '@fortawesome/free-solid-svg-icons';
// import logo from '../images/V De Silva Logo PNG.png';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <a href="#home">
//         <img 
//           src={logo} 
//           alt="Logo"
//           style={{
//             top: 0,
//             left: '30px',
//             height: '110px',
//             width: '110px'
//           }} 
//         />
//       </a>
//       <a href="/selectPhotos">
//         <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", marginRight: '5px' }} />
//         Photos
//       </a>
//       <a href="/viewVideos">
//         <FontAwesomeIcon icon={faVideo} style={{ color: "#ffffff", marginRight: '5px' }} />
//         Videos
//       </a>
//       <a href="/viewAlbum">
//         <FontAwesomeIcon icon={faPhotoFilm} style={{ marginRight: '5px' }} />
//         Albums
//       </a>
//       <a href="/paymentHistory">
//         <FontAwesomeIcon icon={faCreditCard} style={{ color: "#ffffff", marginRight: '5px' }} />
//         Payment
//       </a>
//     </div>
//   );
// }

// export default Sidebar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPhotoFilm, faVideo, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/V De Silva Logo PNG.png';
import { Link, useParams } from 'react-router-dom'; // Import useParams

const Sidebar = () => {
  // Call useParams to get userId and eventId from the URL
  const { userId, eventId } = useParams();

  return (
    <div className="sidebar">
      <Link to="#home">
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
      </Link>
      <Link to={`/userAccount/${userId}/myEvents/${eventId}/viewAlbum/samplePhotos`}>
        <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", marginRight: '5px' }} />
        Photos
      </Link>
      <Link to={`/userAccount/${userId}/myEvents/${eventId}/viewAlbum/videoAlbum`}>
        <FontAwesomeIcon icon={faVideo} style={{ color: "#ffffff", marginRight: '5px' }} />
        Videos
      </Link>
      {/* Link for Albums with dynamic userId and eventId */}
      <Link to={`/userAccount/${userId}/myEvents/${eventId}/viewAlbum`}>
        <FontAwesomeIcon icon={faPhotoFilm} style={{ marginRight: '5px' }} />
        Albums
      </Link>
      <Link to={`/userAccount/${userId}/myEvents/${eventId}/payment`}>
        <FontAwesomeIcon icon={faCreditCard} style={{ color: "#ffffff", marginRight: '5px' }} />
        Payment
      </Link>
    </div>
  );
}

export default Sidebar;
