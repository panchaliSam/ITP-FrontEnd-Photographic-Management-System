import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import adminManage from "../../images/UserManagement/AdminLogin/adminManage.png";

const ManageButtons = () => {
  return (
    <div className="split-screen">
      <div className="left-pane">
        <div className="manage-buttons-container">
            {/* Use Link components to navigate to different routes */}
            <Link to="/adminLogin/adminDashboard/manageSystem/manageUsers" className="manage-button-link">
                <button className="manage-button">
                    Manage Users
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/manageEvents" className="manage-button-link">
                <button className="manage-button">
                    Manage Events
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/manageAlbums" className="manage-button-link">
                <button className="manage-button">
                    Manage Albums
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/manageSchedules" className="manage-button-link">
                <button className="manage-button">
                    Manage Schedules
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/manageTasks" className="manage-button-link">
                <button className="manage-button">
                    Manage Tasks
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/managePayments" className="manage-button-link">
                <button className="manage-button">
                    Manage Payments
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/manageFeedbacks" className="manage-button-link">
                <button className="manage-button">
                    Manage Feedbacks
                </button>
            </Link><br></br>
            <Link to="/adminLogin/adminDashboard/manageSystem/manageContent" className="manage-button-link">
                <button className="manage-button">
                    Manage Content
                </button>
            </Link><br></br>
        </div>
      </div>
      <div className="right-pane">
        <img src={adminManage} alt="description" className="image"/>
      </div>
    </div>
  );
};

export default ManageButtons;
