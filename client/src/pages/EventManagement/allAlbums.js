import React from 'react';
import { Link } from 'react-router-dom'; 
import AllAlbums from '../../components/EventManagement/allAlnums'; 

const AllAlbumsPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Albums</h1><br></br>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Link to="/adminLogin/adminDashboard/manageSystem/manageAlbums/manageAlbums/addAlbum" className="add-button button-margin">Add Album</Link>
            </div>
            <AllAlbums />
        </div>
    );
};

export default AllAlbumsPage;
