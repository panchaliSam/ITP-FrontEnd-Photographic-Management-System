import React from 'react';
import { useParams } from 'react-router-dom';
import VideoAlbum from '../../components/EventManagement/viewVideoAlbum';

const VideoAlbumPage = () => {

    const { userId, eventId} = useParams();

    return (
        <div>
            <h1>Video Album</h1>
            <VideoAlbum 
                userId={userId}
                eventId={eventId}
            />
        </div>
    );
};

export default VideoAlbumPage;