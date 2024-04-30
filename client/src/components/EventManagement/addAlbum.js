// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddAlbumForm = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     photoAlbumId: '',
//     userName: '',
//     eventName: '',
//     eventType: '',
//     staffName: ''
//   });

//   // State to store dropdown options
//   const [userNames, setUserNames] = useState([]);
//   const [eventTypes, setEventTypes] = useState([]);
//   const [staffNames, setStaffNames] = useState([]);

//   // Fetch user names, event types, and staff names on component mount
//   useEffect(() => {
//     const fetchUserNames = async () => {
//       try {
//         const response = await axios.get(`/api/newAlbum/userNames`);
//         setUserNames(response.data);
//       } catch (error) {
//         console.error('Error fetching user names:', error);
//       }
//     };

//     const fetchEventTypes = async () => {
//       try {
//         // Event types
//         const types = ['Wedding', 'Events', 'New Born', 'Couples', 'Graduation'];
//         setEventTypes(types);
//       } catch (error) {
//         console.error('Error fetching event types:', error);
//       }
//     };

//     const fetchStaffNames = async () => {
//       try {
//         const response = await axios.get(`/api/newAlbum/empNames`);
//         setStaffNames(response.data);
//       } catch (error) {
//         console.error('Error fetching staff names:', error);
//       }
//     };

//     fetchUserNames();
//     fetchEventTypes();
//     fetchStaffNames();
//   }, []);

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send formData to backend API for adding album
//       const response = await axios.post(`/api/album/albumPhotos/add`, formData);
//       // Reset form after successful submission
//       setFormData({
//         photoAlbumId: '',
//         userName: '',
//         eventName: '',
//         eventType: '',
//         staffName: ''
//       });
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error adding album:', error);
//       alert('Failed to add album. Please try again.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Album ID:</label>
//           <input type="text" name="photoAlbumId" value={formData.photoAlbumId} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>User Name:</label>
//           <select name="userName" value={formData.userName} onChange={handleInputChange}>
//             <option value="">Select User Name</option>
//             {userNames.map((name, index) => (
//               <option key={index} value={name}>{name}</option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Event Name:</label>
//           <input type="text" name="eventName" value={formData.eventName} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Event Type:</label>
//           <select name="eventType" value={formData.eventType} onChange={handleInputChange}>
//             <option value="">Select Event Type</option>
//             {eventTypes.map((type, index) => (
//               <option key={index} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Staff Name:</label>
//           <select name="staffName" value={formData.staffName} onChange={handleInputChange}>
//             <option value="">Select Staff Name</option>
//             {staffNames.map((name, index) => (
//               <option key={index} value={name}>{name}</option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Add Album</button>
//       </form>
//     </div>
//   );
// };

// export default AddAlbumForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAlbumForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    userName: '',
    eventName: '',
    eventType: '',
    staffName: '',
    date: '' // Add date field to formData
  });

  // State to store dropdown options
  const [userNames, setUserNames] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [staffNames, setStaffNames] = useState([]);

  // Fetch user names, event types, and staff names on component mount
  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const response = await axios.get(`/api/newAlbum/userNames`);
        setUserNames(response.data);
      } catch (error) {
        console.error('Error fetching user names:', error);
      }
    };

    const fetchEventTypes = async () => {
      try {
        // Event types
        const types = ['Wedding', 'Events', 'New Born', 'Couples', 'Graduation'];
        setEventTypes(types);
      } catch (error) {
        console.error('Error fetching event types:', error);
      }
    };

    const fetchStaffNames = async () => {
      try {
        const response = await axios.get(`/api/newAlbum/empNames`);
        setStaffNames(response.data);
      } catch (error) {
        console.error('Error fetching staff names:', error);
      }
    };

    fetchUserNames();
    fetchEventTypes();
    fetchStaffNames();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.date) {
      alert('Please provide a date.');
      return;
    }
    try {
      const response = await axios.post(`/api/album/albumPhotos/add`, formData);
      
      setFormData({
        userName: '',
        eventName: '',
        eventType: '',
        staffName: '',
        date: '' // Clear date field after submission
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error adding album:', error);
      alert('Failed to add album. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name:</label>
          <select name="userName" value={formData.userName} onChange={handleInputChange}>
            <option value="">Select User Name</option>
            {userNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Event Name:</label>
          <input type="text" name="eventName" value={formData.eventName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Event Type:</label>
          <select name="eventType" value={formData.eventType} onChange={handleInputChange}>
            <option value="">Select Event Type</option>
            {eventTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Staff Name:</label>
          <select name="staffName" value={formData.staffName} onChange={handleInputChange}>
            <option value="">Select Staff Name</option>
            {staffNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Event Date:</label>
          <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Album</button>
      </form>
    </div>
  );
};

export default AddAlbumForm;



