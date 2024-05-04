// AddPaymentForm.js
import React, { useState } from 'react';
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
    try {
      const response = await axios.post('http://localhost:4002/api/card/card/add', formData);
      console.log('Card Payment added successfully:', response.data);
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

  return (
    <div>
      <h2>Add card </h2>
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
          <label> City:</label>
          <input type="text" name=" City" value={formData. City} onChange={handleChange} />
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
           <label>CVV :</label>
           <input type="text" name="CVV " value={formData.CVV } onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCardForm;
