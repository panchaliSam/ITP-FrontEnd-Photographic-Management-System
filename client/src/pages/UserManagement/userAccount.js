import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
// import UserSideBar from '../../components/UserManagement/userAccountSideBar';
import UserAccount from '../../components/UserManagement/userAccount'

const Dashboard = () => {
  const { userId } = useParams();
  return (
    <div>
        <h1><center>Account Details</center></h1>

      <UserAccount userId={userId} /> 
    </div>
  );
};

export default Dashboard;
