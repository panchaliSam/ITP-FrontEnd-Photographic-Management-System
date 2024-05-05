import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const UserSideBar = ({ userId }) => {
  return (
    <div className="sidebar-container">
      <div className="top">
        <span className="username">Admin</span>
      </div>
      <div className="buttons">
        {/* <Link to={/adminLogin/adminDashboard} className="link">
          <button className="button">ACCOUNT</button>
        </Link> */}
        {/* <Link to={/adminLogin/adminDashboard/schedules} className="link">
          <button className="button">SCHEDULES</button>
        </Link> */}
        {/* <Link to={/adminLogin/adminDashboard/notifications} className="link">
          <button className="button">NOTIFICATIONS</button>
        </Link> */}
        <Link to={`/adminLogin/adminDashboard/manageSystem`} className="link">
          <button className="button">MANAGE</button>
        </Link>
        <Link to={`/adminLogin/adminDashboard/promotion`} className="link">
          <button className="button">PROMOTION</button>
        </Link>
      </div>
    </div>
  );
};

export default UserSideBar;