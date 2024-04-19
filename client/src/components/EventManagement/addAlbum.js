import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAlbumForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    albumId: '',
    userName: '',
    eventName: '',
    eventType: '',
    staffName: ''
  });

  // State to store dropdown options
  const [userNames, setUserNames] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);

  // Fetch user names and event types on component mount
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
        const response = await axios.get(`/api/newAlbum/empNames`);
        setEventTypes(response.data);
      } catch (error) {
        console.error('Error fetching event types:', error);
      }
    };

    fetchUserNames();
    fetchEventTypes();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to backend API for adding album
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      await axios.post('YOUR_BACKEND_API_URL', formData);
      // Reset form after successful submission
      setFormData({
        albumId: '',
        userName: '',
        eventName: '',
        eventType: '',
        staffName: ''
      });
      alert('Album added successfully!');
    } catch (error) {
      console.error('Error adding album:', error);
      alert('Failed to add album. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Album ID:</label>
          <input type="text" name="albumId" value={formData.albumId} onChange={handleInputChange} />
        </div>
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
          <input type="text" name="staffName" value={formData.staffName} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Album</button>
      </form>
    </div>
  );
};

export default AddAlbumForm;
