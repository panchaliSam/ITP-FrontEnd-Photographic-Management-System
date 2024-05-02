import React from 'react';
import { Link } from 'react-router-dom'; 
import StaffViewAlbums from '../../components/EventManagement/staffViewAlbums';

const MyWork = () => {
    return (
        <div className="myWork">
            <h1><center>My Work</center></h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Link to="/manageAlbums/addAlbum" className="add-button button-margin">Add Album</Link>
            </div>
            <StaffViewAlbums />
        </div>
    );
};

export default MyWork;
>>>>>>> bea0809a1960901a82698fd3ced71cba680c5260
