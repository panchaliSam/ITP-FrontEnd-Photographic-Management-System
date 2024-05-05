import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/PaymentManagement/AddPaymentForm.css'; 


const AddCardForm = () => {
  const [formData, setFormData] = useState({
    FullName : '',
    Email : '',
    Address : '',
    City : '',
    ZipCode : '',
    CreditcardNumber : '',
    ExpMonth : '',
    ExpireYear : '',
    CVV : ''

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
  }
    try {
      const response = await axios.post('/api/card/Card/add', formData);
      console.log(' Card Payment added successfully:', response.data);
      // Optionally, you can clear the form fields after successful submission
      setFormData({
        FullName : '',
        Email : '',
        Address : '',
        City : '',
        ZipCode : '',
        CreditcardNumber : '',
        ExpMonth : '',
        ExpireYear : '',
        CVV : ''
    
      });
    } catch (error) {
      console.error('Error adding card payment:', error);
    }
  };

  const validateForm = () => {
    const { FullName, Email, Address, City, ZipCode, CreditcardNumber, ExpMonth, ExpireYear,CVV } = formData;
    // Perform your form validation logic here
    // For example, check if required fields are filled
    if ( !FullName || !Email || !Address || !City || !ZipCode || !CreditcardNumber || !ExpMonth || !ExpireYear || !CVV) {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
    };
  return (
    <div className="outer-container">
      <div className="form-container">
        <div className="left-side-image">
          <img src="https://www.freepik.com/free-vector/realistic-credit-card-design_19058332.htm#fromView=image_search_similar&page=4&position=49&uuid=8b250a52-b233-4c98-8830-bbe5566e33b9" alt="Left Side Image" />
        </div>
        <div className="form-wrapper">
          <h2 > Add Card </h2>
          
          <form onSubmit={handleSubmit}>
          
          
            <div>
              <label>FullName:</label>
              <input type="text" name="FullName" value={formData.FullName} onChange={handleChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
            </div>
            
            <div>
              <label>Address:</label>
              <input type="text" name="Address" value={formData.Address} onChange={handleChange} />
            </div>
            <div>
              <label>City:</label>
              <input type="text" name="City" value={formData.City} onChange={handleChange} />
            </div>
            <div>
              <label>ZipCode:</label>
              <input type="text" name="ZipCode" value={formData.ZipCode} onChange={handleChange} />
            </div>
            <div>
              <label>CreditcardNumber:</label>
              <input type="text" name="CreditcardNumber" value={formData.CreditcardNumber} onChange={handleChange} />
            </div>
            <div>
              <label>ExpMonth:</label>
              <input type="text" name="ExpMonth" value={formData.ExpMonth} onChange={handleChange} />
            </div>
            <div>
              <label>ExpireYear:</label>
              <input type="text" name="ExpireYear" value={formData.ExpireYear} onChange={handleChange} />
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" name="CVV" value={formData.CVV} onChange={handleChange} />
            </div>
           
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCardForm;
