import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import the EventUserDetails component
import EventUserDetails from './userEventDetails'; 
import EditAlbum from './editPhotoAlbum';

const AllAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState(null); // State to store selected album
    const [deletionSuccess, setDeletionSuccess] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(`/api/allDetails/allAlbums`);
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
                setError('Error fetching albums');
            }
        };

        fetchAlbums();
    }, [deletionSuccess]); // Add deletionSuccess to dependency array

    const handleDelete = async (photoAlbumId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this album?");
        if (confirmDelete) {
            try {
                await axios.delete(`/api/album/albumPhotos/${photoAlbumId}`);
                setAlbums(albums.filter(album => album.photoAlbumId !== photoAlbumId));
                setDeletionSuccess(true); // Set deletion success state
                setShowPopup(true); // Show popup
            } catch (error) {
                console.error('Error deleting album:', error);
                setError('Error deleting album');
            }
        }
    };
    

    const handleView = (album) => {
        // Set the selected album
        setSelectedAlbum(album); 
    };

    const handleEdit = (id) => {
        console.log(`Edit album with ID ${id}`);
    };

    useEffect(() => {
        if (showPopup) {
            setTimeout(() => {
                // Hide popup after 3 seconds
                setShowPopup(false); 
            }, 3000);
        }
    }, [showPopup]);

    return (
        <div className="allAlbums">
            {error && <p className="error">{error}</p>}
            {showPopup && <p className="popup">Deleted successfully!</p>}
            <table>
                <thead>
                    <tr>
                        <th>Album ID</th>
                        <th>User Name</th>
                        <th>Event Name</th>
                        <th>Event Type</th>
                        <th>Staff Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album._id}>
                            <td>{album.albumId}</td>
                            <td>{album.userName}</td>
                            <td>{album.eventName}</td>
                            <td>{album.eventType}</td>
                            <td>{album.staffName}</td>
                            <td className="actions">
                                <button className="view-button" onClick={() => handleView(album)}>
                                    <Link to={`/customerDetails/${album.eventId}`} className="button-link">View</Link>
                                </button>
                                <button className="edit-button" onClick={() => handleEdit(album._id)}>
                                <Link to={`/editAlbum/${album.albumId}`} className="button-link">Edit</Link>
                                </button>
                                <button className="delete-button" onClick={() => handleDelete(album.albumId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedAlbum && <EventUserDetails eventId={selectedAlbum.eventId} />}
            {selectedAlbum && <EditAlbum albumId={selectedAlbum.photoAlbumId} />}
        </div>
    );
};

export default AllAlbums;

