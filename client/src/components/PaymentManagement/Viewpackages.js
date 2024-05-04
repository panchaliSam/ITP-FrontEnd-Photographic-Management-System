import React, { useState, useEffect } from 'react';
import axios from 'axios';



function PackageList() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages from backend when component mounts
    axios.get('/api/eventPackage/package')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  return (
    <>
      <h1><center>Packages</center></h1>
      <br/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
        {packages.map((pkg, index) => (
          <div key={pkg._id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px', overflow: 'hidden' }}>
            {index === 0 && <img src="https://img.freepik.com/free-photo/bride-groom-stand-bridge-look-away_8353-9498.jpg?t=st=1714818778~exp=1714822378~hmac=f673633db6dc819c7280743d2e722973bbccfba5e140ce12f5ddf66121497409&w=1380" alt={pkg.packageName} style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '10px 10px 0 0' }} />}
            {index === 1 && <img src="https://img.freepik.com/free-photo/new-year-concept-with-five-happy-friends_23-2147720565.jpg?t=st=1714819104~exp=1714822704~hmac=7b55aac503a3aa01d12e2d0ac7cbf9783fb8a16852c9538cafbd748ba5ed5edf&w=1380" alt={pkg.packageName} style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '10px 10px 0 0' }} />}
            {index === 2 && <img src="https://img.freepik.com/free-photo/photographer-make-photoshoot-woman_1157-37028.jpg?t=st=1714818704~exp=1714822304~hmac=c90c9cf5e3c91affd45679f3a70c3b3b1bdb3b6c3f2a3918c5a72840ce5efbe1&w=1380" alt={pkg.packageName} style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '10px 10px 0 0' }} />}
            <div style={{ backgroundColor: '#A49D9D', padding: '10px', borderRadius: '0 0 10px 10px' }}>
              <h2>{pkg.packageName}</h2>
              <p>No of Photographers: {pkg.No_of_photographers}</p>
              <p>No of Videographers: {pkg.No_of_videographers}</p>
              <p>No of photos: {pkg.No_of_photos}</p>
              <p>Advance_price: {pkg.Advance_price}</p>
              <div style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px', display: 'inline-block',backgroundColor:'#b8f2d4' }}>
                <p style={{ fontWeight: 'bold', marginLeft:'5px',marginRight:'5px',marginBottom:'5px',marginTop:'5px' }}>Price: {pkg.Price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PackageList;
