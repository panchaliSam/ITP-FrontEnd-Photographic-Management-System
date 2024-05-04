
import React, { useState } from 'react';
 // Import axios for making HTTP requests
import axios from 'axios';

function ImageDetails() {
  
  const [imageId, setImageId] = useState(''); 
  const [imageDetails, setImageDetails] = useState(null); // State to store the fetched image details
  const [error, setError] = useState(null); // State to store any errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/contentGallery/photos/${imageId}`);
      setImageDetails(response.data.image); 
      setError(null);
    } catch (error) {
      console.error('Error fetching image details:', error);
      setImageDetails(null);
      setError('Image not found');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Image ID:
          <input type="text" value={imageId} onChange={(e) => setImageId(e.target.value)} />
        </label>
        <button type="submit">View Image</button>
      </form>
      {error && <p>{error}</p>}
      {imageDetails && (
        <div>
          <h2>Image Details</h2>
          <p>Image Category: {imageDetails.imageCategory}</p>
                        <p>Image Location: {imageDetails.ImageLocation}</p>
                         <p>Image Customer: {imageDetails.ImageCustomer}</p> 
          {}
        </div>
      )}
    </div>
  );
}

export default ImageDetails;
