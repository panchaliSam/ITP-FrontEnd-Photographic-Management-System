import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import bgImage from "../../images/Staff Management/bailey-mahon-2b6K4uy0Hbc-unsplash.jpg"
import logo from '../../images/V De Silva Logo PNG.png';

function StaffLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Send login request with email and password for staff login
    axios.post('http://localhost:4001/api/staffLogin/login', { email, password })
      .then(response => {
        // Assuming your backend returns a token upon successful authentication
        const token = response.data.token;
        // Store the token in local storage or session storage
        localStorage.setItem('token', token);
        // Redirect the staff user to the staff dashboard or some other protected route
        window.location.href = '/staff/dashboard';
        alert('Staff Login Successful!');
      })
      .catch(error => {
        console.error('Staff Login failed:', error);
        // Handle staff login failure, display error message, etc.
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">
              <img 
                src={logo} 
                alt="Logo"
                style={{
                  top: 0,
                  left: '500px',
                  height: '200px',
                  width: '200px'
                }} 
              />
            </span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Staff Log in</h3>
            <form onSubmit={handleLogin}>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
              <MDBBtn color='info' size='lg' type='submit' className='mb-4 px-5 mx-5 w-100'>Login</MDBBtn>
              {/* <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p> */}
              <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
            </form>
          </div>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img 
            src={bgImage} 
            alt="Background" 
            className="w-100" 
            style={{
              objectFit: 'cover', 
              objectPosition: 'left',
              height: '700px', 
              width: '600px'   
            }} 
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StaffLogin;
