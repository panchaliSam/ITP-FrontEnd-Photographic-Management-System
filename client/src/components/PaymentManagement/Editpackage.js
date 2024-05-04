import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackageList() {
  const [packages, setPackages] = useState([]);
  const [updatedPackage, setUpdatedPackage] = useState({
    packageID: '',
    packageName: '',
    packageType: '',
    Description: '',
    No_of_photographers: 0,
    No_of_videographers: 0,
    No_of_photos: 0,
    Advance_price : 0,
    Price: 0
  });

  useEffect(() => {
    // Fetch packages from backend when component mounts
    axios.get('http://localhost:4002/api/eventPackage/package')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  const handleDelete = async (packageID) => {
    try {
      // Send delete request to backend
      await axios.delete(`http://localhost:4002/api/eventPackage/package/${packageID}`);
      
      // Remove the deleted package from the state
      setPackages(packages.filter(pkg => pkg.packageID !== packageID));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      // Send update request to backend
      await axios.put(`http://localhost:4002/api/eventPackage/package/${updatedPackage.packageID}`, updatedPackage);
      
      // Update the state to reflect the changes
      setPackages(packages.map(pkg => pkg.packageID === updatedPackage.packageID ? updatedPackage : pkg));
      
      // Reset the form
      setUpdatedPackage({
        packageID: '',
        packageName: '',
        packageType: '',
        Description: '',
        No_of_photographers: 0,
        No_of_videographers: 0,
        No_of_photos: 0,
        Advance_price : 0,
        Price: 0
      });
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleChange = (e) => {
    setUpdatedPackage({ ...updatedPackage, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Package List</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Package ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Package Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Package Type</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>No. of Photographers</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>No. of Videographers</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>No. of Photos</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Advance_price</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Price</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f0f0f0', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map(pkg => (
            <tr key={pkg._id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.packageID}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.packageName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.packageType}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.Description}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.No_of_photographers}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.No_of_videographers}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.No_of_photos}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{pkg.Advance_price}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>${pkg.Price}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                <button style={{ cursor: 'pointer', padding: '5px 10px', border: 'none', backgroundColor: '#dc3545', color: 'white', borderRadius: '5px' }} onClick={() => handleDelete(pkg.packageID)}>Delete</button>
                <button style={{ cursor: 'pointer', padding: '5px 10px', border: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', marginLeft: '5px' }} onClick={() => setUpdatedPackage(pkg)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', marginTop: '20px' ,marginLeft:"100px",marginRight:"100px"}}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '20px' }}>Update Package</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Package ID:</label>
          <input type="text" name="packageID" value={updatedPackage.packageID} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} disabled />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Package Name:</label>
          <input type="text" name="packageName" value={updatedPackage.packageName} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Package Type:</label>
          <input type="text" name="packageType" value={updatedPackage.packageType} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <input type="text" name="Description" value={updatedPackage.Description} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>No. of Photographers:</label>
          <input type="number" name="No_of_photographers" value={updatedPackage.No_of_photographers} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>No. of Videographers:</label>
          <input type="number" name="No_of_videographers" value={updatedPackage.No_of_videographers} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>No. of Photos:</label>
          <input type="number" name="No_of_photos" value={updatedPackage.No_of_photos} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Advance Price:</label>
          <input type="number" name="Advance_price" value={updatedPackage.Advance_price} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Price:</label>
          <input type="number" name="Price" value={updatedPackage.Price} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <button style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleUpdate}>Update Package</button>
      </div>
    </div>
  );
}

export default PackageList;
