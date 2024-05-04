import React, { useState } from 'react';
import axios from 'axios';
import addImage from '../../styles/ContentManagement/addImage.css';

const AddImage = () => {
    const [imageId, setImageId] = useState('');
    const [imageCategory, setImageCategory] = useState('');
    const [ImageLocation, setImageLocation] = useState('');
    const [ImageCustomer, setImageCustomer] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Data to be sent to the backend
            const imageData = {
                imageId,
                imageCategory,
                ImageLocation,
                ImageCustomer,
                imageURL: [imageUrl] // Pass the URL as an array
            };

            // Send a POST request to the backend API endpoint to add the image
            const response = await axios.post("/api/contentGallery/photos/add", imageData);

            // Show success message
            setShowAlert(true);
            
            // Clear the form fields
            setImageId('');
            setImageCategory('');
            setImageLocation('');
            setImageCustomer('');
            setImageUrl('');
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add image. Please check the console for more details.");
        }
    };

    // Function to handle changes in the image URL input
    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-center mb-4">Add New Image</h1>
                    <form onSubmit={handleSubmit}>
                        {/* Input fields for image details */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="imageId" className="form-label">Image Id:</label>
                                <input type="text" className="form-control" id="imageId" name="imageId" value={imageId} onChange={(e) => setImageId(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="imageCategory" className="form-label">Category:</label>
                                <select className="form-select" id="imageCategory" name="imageCategory" value={imageCategory} onChange={(e) => setImageCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Coporate Events">Coporate Events</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="Couples">Couples</option>
                                    <option value="New Born">New Born</option>
                                    <option value="Event">Event</option>
                                    <option value="Wallpaper">Wallpaper</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="ImageLocation" className="form-label">Location:</label>
                                <input type="text" className="form-control" id="ImageLocation" name="ImageLocation" value={ImageLocation} onChange={(e) => setImageLocation(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="ImageCustomer" className="form-label">Image Customer:</label>
                                <input type="text" className="form-control" id="ImageCustomer" name="ImageCustomer" value={ImageCustomer} onChange={(e) => setImageCustomer(e.target.value)} />
                            </div>
                        </div>

                        {/* Input field for entering image URL */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="imageUrl" className="form-label">Image URL:</label>
                                <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-8 offset-md-4">
                                <button type="submit" className="btn btn-dark me-2">Submit Image</button>
                                <button type="button" className="btn btn-danger" onClick={() => window.location.href = '/adminLogin/photographerDashboard/manageImage'}>Cancel</button>
                            </div>
                        </div>
                    </form>

                    {/* Show success message */}
                    {showAlert && (
                        <div className="alert alert-success" role="alert">
                            Image submitted successfully!
                        </div>
                    )}
                </div>
                {/* Absolute positioning for the image preview */}
                {imageUrl && (
                    <div className="image-preview">
                        
                        <img src={imageUrl} alt="Image Preview" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddImage;
