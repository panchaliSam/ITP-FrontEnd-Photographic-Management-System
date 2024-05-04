import React, { useState, useEffect } from 'react';
import AdminAccountSideBar from "../../components/UserManagement/adminAccountSideBar";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [userData, setUserData] = useState([]);
    const [staffData, setStaffData] = useState([]);
    const [displayedData, setDisplayedData] = useState(null); 
    const navigate = useNavigate(); 
    const [searchRole, setSearchRole] = useState(''); 

    useEffect(() => {
        const fetchStaffByRole = async () => {
            try {
                const response = await fetch(`/api/adminTask/searchEventsByRole?role=${searchRole}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    setStaffData(data);
                    setDisplayedData('staff');
                } else {
                    console.error('Error fetching staff users by role:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching staff users by role:', error);
            }
        };
        if (searchRole) {
            fetchStaffByRole();
        }
    }, [searchRole]);

    const handleFetchUsers = async () => {
        try {
            const response = await fetch('/api/adminTask/userTableData');
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                setDisplayedData('users');
            } else {
                console.error('Error fetching users:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleFetchStaff = async () => {
        try {
            const response = await fetch('/api/adminTask/staffTableData');
            if (response.ok) {
                const data = await response.json();
                setStaffData(data);
                setDisplayedData('staff');
            } else {
                console.error('Error fetching staff users:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching staff users:', error);
        }
    };

    const handleAddStaff = () => {
        navigate('/adminLogin/adminDashboard/manageSystem/manageUsers/addStaff'); 
    };

    const handleViewStaff = async (staffId) => {
        try {
            const response = await fetch(`/api/adminTask/admin/${staffId}`);
            if (response.ok) {
                navigate(`/adminLogin/adminDashboard/manageSystem/manageUsers/adminViewStaff/${staffId}`); 
            } else if (response.status === 404) {
                console.error('Staff details not found');
            } else {
                console.error('Error fetching staff details:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching staff details:', error);
        }
    };
    const handleViewUser = async (userId) => {
        try {
            const response = await fetch(`/api/regUserTask/users/${userId}`); 
            if (response.ok) {
                navigate(`/adminLogin/adminDashboard/manageSystem/manageUsers/adminViewUser/${userId}`);

            } else if (response.status === 404) {
                console.error('User details not found');
            } else {
                console.error('Error fetching user details:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleDeleteStaff = async (staffId) => {
        try {
            const response = await fetch(`/api/adminTask/admin/${staffId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const message = await response.json();
                console.log(message);
                setStaffData(staffData.filter(item => item.staffId !== staffId));
            } else {
                console.error('Error deleting staff:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting staff:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`/api/adminTask/user/${userId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const message = await response.json();
                console.log(message);
                
                // Update the state to remove the deleted user from the displayed data
                setUserData(userData.filter(item => item.userId !== userId));
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    const displayedDataTable = displayedData === 'staff' ? staffData : userData;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <AdminAccountSideBar />
                </div>
                <div className="col-lg-9">
                    <div className="row mt-3 mb-3">
                        <div className="col-lg-12">
                            <button className="btn btn-primary mr-4" onClick={handleFetchUsers}>Registered Users</button>
                            <button className="btn btn-primary" onClick={handleFetchStaff}>Staff Users</button>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <input
                                type="text"
                                placeholder="Search by Role"
                                className="form-control d-inline-block w-100"
                                value={searchRole}
                                onChange={(e) => setSearchRole(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-6 text-right">
                            <button className="btn btn-success mr-2" onClick={handleAddStaff}>Add Staff</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedDataTable.map(item => (
                                    <tr key={item.userId || item.staffId}>
                                        <td>{item.userId || item.staffId}</td>
                                        <td>{item.username || item.empName}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <button className="btn btn-info mr-2" onClick={() => displayedData === 'staff' ? handleViewStaff(item.staffId) : handleViewUser(item.userId)}>View</button>
                                            <button className="btn btn-danger" onClick={() => displayedData === 'staff' ? handleDeleteStaff(item.staffId) : handleDeleteUser(item.userId)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;