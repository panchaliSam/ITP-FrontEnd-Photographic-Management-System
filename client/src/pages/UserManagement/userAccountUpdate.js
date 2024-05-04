import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
// import UserSideBar from '../../components/UserManagement/userAccountSideBar';
import UserAccountUpdate from '../../components/UserManagement/userAccountUpdate'

const UpdateUserAccount  = () => {
  const { userId } = useParams();
  return (
    <div>
        <h1><center>Update Details</center></h1>

      <UserAccountUpdate userId={userId} /> 
    </div>
  );
};

export default UpdateUserAccount ;
