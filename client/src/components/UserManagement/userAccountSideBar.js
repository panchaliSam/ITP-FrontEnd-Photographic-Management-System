import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserSideBar = () => {
  const { userId } = useParams();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the real username based on the userId
    const fetchUsername = async () => {
      try {
        const response = await fetch(`/api/newAlbum/userName/${userId}`);
        const data = await response.json();
        if (response.ok) {
          setUsername(data.username);
        } else {
          // Handle error response
          console.error('Failed to fetch username:', data.error);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, [userId]);

  return (
    <div className="sidebar-container">
      <div className="top">
        {/* Display the real username */}
        <span className="username">{username}</span>
      </div>
      <div className="buttons">
        <Link to={`/userAccount/${userId}`} className="link">
          <button className="button">ACCOUNT</button>
        </Link>
        <Link to={`/userAccount/${userId}/myEvents`} className="link">
          <button className="button">MY EVENTS</button>
        </Link>
        <Link to={`/userAccount/${userId}/payments`} className="link">
          <button className="button">PAYMENTS</button>
        </Link>
        {/* <Link to={`/userAccount/${userId}/notifications`} className="link">
          <button className="button">NOTIFICATION</button>
        </Link> */}
      </div>
    </div>
  );
};

export default UserSideBar;
