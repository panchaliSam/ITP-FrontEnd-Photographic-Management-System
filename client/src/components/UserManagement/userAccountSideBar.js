import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const UserSideBar = ({ userId }) => {
  return (
    <div className="sidebar-container">
      <div className="top">
        <span className="username">UserName</span>
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
        <Link to={`/userAccount/${userId}/notifications`} className="link">
          <button className="button">NOTIFICATION</button>
        </Link>
      </div>
    </div>
  );
};

export default UserSideBar;
