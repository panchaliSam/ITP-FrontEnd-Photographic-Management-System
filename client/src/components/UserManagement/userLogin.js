// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import bgImage from "../../images/LoginPageBgImage/julius-drost-dS-q7-zkD9c-unsplash.jpg"
// import logo from '../../images/V De Silva Logo PNG.png';

// function LoginPage() {
//   return (
//     <MDBContainer fluid>
//       <MDBRow>

//         <MDBCol sm='6'>

//           <div className='d-flex flex-row ps-5 pt-5'>
//             <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
//             <span className="h1 fw-bold mb-0">
//                 <img 
//                     src={logo} 
//                     alt="Logo"
//                     style={{
//                         top: 0,
//                         left: '500px',
//                         height: '200px',
//                         width: '200px'
//                     }} 
//                 />
//             </span>
//           </div>

//           <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

//             <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

//             <Link to="/selectPhotos" className="nav-link">
//                 <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
//             </Link>            
//             <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
//             <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

//           </div>

//         </MDBCol>

//         <MDBCol sm='6' className='d-none d-sm-block px-0'>
//         <img 
//             src={bgImage} 
//             alt="Background" 
//             className="w-100" 
//             style={{
//                 objectFit: 'cover', 
//                 objectPosition: 'left',
//                 height: '700px', 
//                 width: '600px'   
//             }} 
//         />
//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import bgImage from "../../images/LoginPageBgImage/julius-drost-dS-q7-zkD9c-unsplash.jpg";
import logo from '../../images/V De Silva Logo PNG.png';
import axios from 'axios'; // Import axios for making HTTP requests

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Make a request to the backend API with username and password
      const response = await axios.get(`api/regUserTask/users/login/${username}/${password}`);

      // Extract user ID from response
      const userId = response.data.userId;

      // Redirect to dashboard page with user ID as URL parameter
      window.location.href = `/dashboard/${userId}`;
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || 'An error occurred');
      setError(error.response?.data?.message || 'An error occurred');
    }
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
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            {error && <p className="text-danger mb-3 ps-5">{error}</p>}
            <MDBInput 
              wrapperClass='mb-4 mx-5 w-100' 
              label='User Name' 
              id='formControlLg' 
              type='email' 
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput 
              wrapperClass='mb-4 mx-5 w-100' 
              label='Password' 
              id='formControlLg' 
              type='password' 
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn 
              className="mb-4 px-5 mx-5 w-100" 
              color='info' 
              size='lg'
              onClick={handleLogin} // Call handleLogin function on button click
            >
              Login
            </MDBBtn>            
            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">Forgot password?</a>
            </p>
            <p className='ms-5'>Don't have an account? <Link to="/register" className="link-info">Register here</Link></p>
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

export default LoginPage;

