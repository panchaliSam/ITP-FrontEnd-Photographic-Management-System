import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditAlbum = () => {
    const { photoAlbumId, userId, eventId, staffId } = useParams();
    const [albumData, setAlbumData] = useState({});
    const [newUrls, setNewUrls] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const response = await axios.get(`/api/album/albumPhotos/${photoAlbumId}/${userId}/${eventId}/${staffId}`);
                setAlbumData(response.data);
            } catch (error) {
                console.error('Error fetching album data:', error);
                setError('Error fetching album data');
            }
        };

        fetchAlbumData();
    }, [photoAlbumId, userId, eventId, staffId]);

    const handleAddUrl = () => {
        const urlsArray = newUrls.split(',').map(url => url.trim());
        axios.put(`/api/album/albumPhotos/${photoAlbumId}/${userId}/${eventId}/${staffId}`, { albumURL: urlsArray })
            .then(() => {
                setNewUrls('');
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            })
            .catch(error => {
                console.error('Error adding URLs:', error);
                setError('Error adding URLs');
            });
    };

    return (
        <div className="editAlbum">
            <h2><center>Edit Album</center></h2>
            <div>
                <h3>Current Album URLs:</h3>
                <ul>
                    {albumData.albumURL && albumData.albumURL.map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Add New URLs:</h3>
                <input
                    type="text"
                    value={newUrls}
                    onChange={(e) => setNewUrls(e.target.value)}
                    placeholder="Enter URLs separated by comma"
                />
                <button onClick={handleAddUrl}>Add URLs</button>
            </div>
            {success && <p className="success">URLs added successfully!</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default EditAlbum;
