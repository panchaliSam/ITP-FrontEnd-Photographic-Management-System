import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import UserSideBar from '../../components/UserManagement/userAccountSideBar';

const Dashboard = () => {
  const { userId } = useParams();
  return (
    <div>
      <UserSideBar userId={userId} /> 
    </div>
  );
};

export default Dashboard;
