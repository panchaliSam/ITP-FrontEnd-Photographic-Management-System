import React from 'react';
// import { Link } from 'react-router-dom'; 
import StaffViewAlbums from '../../components/EventManagement/staffViewAlbums';

const MyWork = () => {
    return (
        <div className="myWork">
            <h1><center>My Work</center></h1>
            {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Link to="/manageAlbums/addAlbum" className="add-button button-margin">Add Album</Link>
            </div> */}
            <StaffViewAlbums />
        </div>
    );
};

export default MyWork;

