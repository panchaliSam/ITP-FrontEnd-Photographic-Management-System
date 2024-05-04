import React from 'react';
import { useParams } from 'react-router-dom';
import EditImage from '../../components/ContentManagement/editImage';

const EditImageDetails = () => {
//   Extracting params from URL
  const { imageId } = useParams();

  return (
    <div>
      <h1><center>Edit Image Details Page</center></h1>
      <br></br><br></br>
      <EditImage imageId={imageId} />
    </div>
  );
};

export default EditImageDetails;