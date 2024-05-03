import React from 'react';
import adminManage from "../../images/UserManagement/AdminLogin/adminManage.png";

const ManageButtons = () => {
  return (
    <div className="split-screen">
      <div className="left-pane">
        <div className="manage-buttons-container">
            <button className="manage-button">
                Manage Users
            </button><br></br>
            <button className="manage-button">
                Manage Events
            </button><br></br>
            <button className="manage-button">
                Manage Albums
            </button><br></br>
            <button className="manage-button">
                Manage Schedules
            </button><br></br>
            <button className="manage-button">
                Manage Tasks
            </button><br></br>
            <button className="manage-button">
                Manage Payments
            </button><br></br>
            <button className="manage-button">
                Manage Feedbacks
            </button><br></br>
            <button className="manage-button">
                Manage Content
            </button><br></br>
        </div>
      </div>
      <div className="right-pane">
        <img src= {adminManage} alt="description" className="image"/>
      </div>
    </div>
  );
};

export default ManageButtons;