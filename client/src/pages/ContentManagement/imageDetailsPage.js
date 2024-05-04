import React from 'react';
import ImageInfo from '../../components/ContentManagement/imageDetails'; // Import the PhotoAlbum component
import { useParams } from 'react-router-dom';

const ImageDetailsPage = () => {
    const params = useParams();
    const { imageId, staffId } = params;
    return (
        <div className="imageDetails">
            <h1>View Photo Album Details</h1>
            <ImageInfo imageId={imageId} staffId={staffId} />
        </div>
    );
};

export default ImageDetailsPage;
