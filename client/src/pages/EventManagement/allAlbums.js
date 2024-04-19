import React from 'react';
import { Link } from 'react-router-dom'; 
import AllAlbums from '../../components/EventManagement/allAlnums'; 

const AllAlbumsPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Albums</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Link to="/manageAlbums/addAlbum" className="add-button button-margin">Add</Link>
            </div>
            <AllAlbums />
        </div>
    );
};

export default AllAlbumsPage;
