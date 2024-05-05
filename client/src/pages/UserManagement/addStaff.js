import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import AdminAccountSideBar from '../../components/UserManagement/adminAccountSideBar';
import axios from 'axios';
import staffRegistrationImage from '../../images/UserManagement/staffRegistration.png'; // Import your image

const StaffRegistration = () => {
    const [formData, setFormData] = useState({
        staffId: '',
        empName: '',
        email: '',
        contact: '',
        role: '',
        password: ''
    });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/adminTask/admin/add', formData);
            console.log(response.data);
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
            setFormData({
                staffId: '',
                empName: '',
                email: '',
                contact: '',
                role: '',
                password: ''
            });
        } catch (error) {
            console.error('Error submitting data:', error);
            setShowErrorAlert(true);
            setShowSuccessAlert(false);
        }
    };

    
    const handleCancel = () => {
        window.location.href = '/adminLogin/adminDashboard/manageSystem/manageUsers'; // Changed the URL for navigation
    };

    return (
        <div className="container-fluid" style={{ marginLeft: '-200px' }} >
            <div className="row">
                <div className="col-lg-3">
                    <AdminAccountSideBar />
                </div>

                <div className="col-lg-4">
                    <div className="form-container ">
                        <h2>Staff Registration</h2>
                        {showSuccessAlert && <Alert variant="success">Staff added successfully!</Alert>}
                        {showErrorAlert && <Alert variant="danger">Error adding staff. Please try again.</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    name="empName"
                                    value={formData.empName}
                                    onChange={handleChange}
                                    style={{ width: '450px' }}

                                />
                            </div>
                            <div className="form-group">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ width: '450px' }}

                                />
                            </div>
                            <div className="form-group">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter contact number"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    style={{ width: '450px' }}

                                />
                            </div>
                            <div className="form-group">
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    style={{ width: '450px' }}

                                />
                            </div>
                            <div className="form-group">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    style={{ width: '450px' }}

                                />
                            </div>
                            
                            <div className="button-container">
                                 <Button variant="outline-dark" type="submit" onClick={handleCancel} className="mr-2">
                                     Cancel
                                 </Button>
                                <Button variant="primary" type='submit'>
                                     Register
                                </Button>
                             </div>
                        </Form>
                    </div>
                </div>
                
                {/* Image Section */}
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <img src={staffRegistrationImage} alt="Staff Registration" style={{ width: '140%',marginLeft:'50%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
};

export default StaffRegistration;
// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import AdminAccountSideBar from '../../components/UserManagement/adminAccountSideBar';
// import axios from 'axios';
// import staffRegistrationImage from '../../images/UserManagement/staffRegistration.png'; // Import your image

// const StaffRegistration = () => {
//     const [formData, setFormData] = useState({
//         staffId: '',
//         empName: '',
//         email: '',
//         contact: '',
//         role: '',
//         password: ''
//     });
//     const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//     const [showErrorAlert, setShowErrorAlert] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/adminTask/admin/add', formData);
//             console.log(response.data);
//             setShowSuccessAlert(true);
//             setShowErrorAlert(false);
//             setFormData({
//                 staffId: '',
//                 empName: '',
//                 email: '',
//                 contact: '',
//                 role: '',
//                 password: ''
//             });
//         } catch (error) {
//             console.error('Error submitting data:', error);
//             setShowErrorAlert(true);
//             setShowSuccessAlert(false);
//         }
//     };

    
//     const handleCancel = () => {
//         window.location.href = '/adminLogin/adminDashboard/manageUsers';
//     };

//     return (
//         <div className="container-fluid" style={{ marginLeft: '-200px' }} >
//             <div className="row">
//                 <div className="col-lg-3">
//                     <AdminAccountSideBar />
//                 </div>

//                 <div className="col-lg-4">
//                     <div className="form-container ">
//                         <h2>Staff Registration</h2>
//                         {showSuccessAlert && <Alert variant="success">Staff added successfully!</Alert>}
//                         {showErrorAlert && <Alert variant="danger">Error adding staff. Please try again.</Alert>}
//                         <Form onSubmit={handleSubmit}>
//                             {/* Your form inputs here */}
                            
//                             <div className="button-container">
//                                 <Button variant="outline-dark" type="submit" onClick={handleCancel} className="mr-2">
//                                     Cancel
//                                 </Button>
//                                 <Button variant="primary" type='submit'>
//                                     Register
//                                 </Button>
//                             </div>
//                         </Form>
//                     </div>
//                 </div>
                
//                 {/* Image Section */}
//                 <div className="col-lg-5 d-flex justify-content-center align-items-center">
//                     <img src={staffRegistrationImage} alt="Staff Registration" style={{ width: '80%', height: 'auto' }} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StaffRegistration;
