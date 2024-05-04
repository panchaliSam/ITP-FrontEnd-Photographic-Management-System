import React from 'react';
import { useParams } from 'react-router-dom';
import VideoAlbum from '../../components/EventManagement/viewVideoAlbum';

const VideoAlbumPage = () => {

    const { userId, eventId} = useParams();

    return (
        <div>
            <h1><center>Video Album</center></h1><br></br>
            <VideoAlbum 
                userId={userId}
                eventId={eventId}
            />
        </div>
    );
};

export default VideoAlbumPage;