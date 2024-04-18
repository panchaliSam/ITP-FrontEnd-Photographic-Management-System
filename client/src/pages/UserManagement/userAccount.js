import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import UserSideBar from '../../components/UserManagement/userAccountSideBar';

const Dashboard = () => {
  const { userId } = useParams(); // Get userId from URL parameters
  return (
    <div>
      <UserSideBar userId={userId} /> {/* Pass userId as a prop to UserSideBar */}
    </div>
  );
};

export default Dashboard;
