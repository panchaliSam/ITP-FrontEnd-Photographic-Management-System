import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VideoAlbum = () => {
    const [albumURLs, setAlbumURLs] = useState([]);
    const { userId, eventId } = useParams();

    useEffect(() => {
        // Replace this with the actual API endpoint
        const apiEndpoint = `/api/video/albumVideosByUserIdEventId/${userId}/${eventId}`;

        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => setAlbumURLs(data))
            .catch(error => console.error('Error:', error));
    }, [userId, eventId]);

    return (
        <div className="video-container">
            {albumURLs.length > 0 ? (
                albumURLs.map((url, index) => (
                    <div key={index} className="video-player">
                        <video width="500" height="280" controls>
                            <source src={url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))
            ) : (
                <p>No video albums found for the specified user and event.</p>
            )}
        </div>
    );
};

export default VideoAlbum;
