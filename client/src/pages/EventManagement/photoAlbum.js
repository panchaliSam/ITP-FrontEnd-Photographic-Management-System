import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoAlbum from '../../components/EventManagement/photoAlbum'; 

const AlbumDetails = () => {
    // Extracting params from URL
    const { photoAlbumId, userId, eventId, staffId } = useParams();

    return (
        <div>
            <h1><center>Album Details Page</center></h1>
            <PhotoAlbum
                photoAlbumId={photoAlbumId}
                userId={userId}
                eventId={eventId}
                staffId={staffId}
            />
        </div>
    );
};

export default AlbumDetails;
