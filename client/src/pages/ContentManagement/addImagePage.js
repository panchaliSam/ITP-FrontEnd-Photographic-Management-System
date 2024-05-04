import React from 'react';
import AddImage from '../../components/ContentManagement/addImage'; // Correct import statement


const AddImagePage = () => {
    return (
        <div className="addImagePage">
            <h1>Add New Photo</h1>
            <AddImage /> {/* Use PascalCase for component name */}
        </div>
    );
};

export default AddImagePage;
