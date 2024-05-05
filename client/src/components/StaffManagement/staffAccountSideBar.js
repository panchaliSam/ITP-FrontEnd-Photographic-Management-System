
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const StaffSideBar = () => {
  const { staffId } = useParams();
  const [staffname] = useState('');

  

  return (
    <div className="sidebar-container">
      <div className="top">
        {/* Display the real username */}
        <span className="username">{staffname}</span>
      </div>
      <div className="buttons">
        <Link to={`/userAccount/${staffId}`} className="link">
          <button className="button">ACCOUNT</button>
        </Link>
        <Link to={`/`} className="link">
          <button className="button">MY EVENTS</button>
        </Link>
        <Link to={`/staffView`} className="link">
          <button className="button">TASKS</button>
        </Link>
        {/* <Link to={`/userAccount/${userId}/notifications`} className="link">
          <button className="button">NOTIFICATION</button>
        </Link> */}
      </div>
    </div>
  );
};

export default StaffSideBar;
