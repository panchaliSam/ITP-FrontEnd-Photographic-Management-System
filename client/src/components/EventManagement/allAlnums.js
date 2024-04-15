import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventUserDetails from './userEventDetails'; // Import the EventUserDetails component
import { Link } from 'react-router-dom';

const AllAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState(null); // State to store selected album

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
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/albums/${id}`);
            setAlbums(albums.filter(album => album._id !== id));
        } catch (error) {
            console.error('Error deleting album:', error);
            setError('Error deleting album');
        }
    };

    const handleView = (album) => {
        setSelectedAlbum(album); // Set the selected album
    };

    const handleEdit = (id) => {
        console.log(`Edit album with ID ${id}`);
    };

    return (
        <div className="allAlbums">
            {error && <p className="error">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Album ID</th>
                        <th>User ID</th>
                        <th>Event ID</th>
                        <th>Staff ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album._id}>
                            <td>{album.photoAlbumId}</td>
                            <td>{album.userId}</td>
                            <td>{album.eventId}</td>
                            <td>{album.staffId}</td>
                            <td className="actions">
                                <button className="view-button" onClick={() => handleView(album)}>
                                    <Link to={`/customerDetails/${album.eventId}`} className="button-link">View</Link>
                                </button>
                                <button className="edit-button" onClick={() => handleEdit(album._id)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(album._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedAlbum && <EventUserDetails eventId={selectedAlbum.eventId} />} {/* Pass the eventId of the selected album */}
        </div>
    );
};

export default AllAlbums;
