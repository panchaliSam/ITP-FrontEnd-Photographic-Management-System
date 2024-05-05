// AddPaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/PaymentManagement/AddPaymentForm.css'; 

const AddimagePaymemntForm = () => {
  const [formData, setFormData] = useState({
    
            paymentID : '',
            UserID : '',
            photoId : '',
            Date_of_buy : '',
            Amount : '1000.00',
            PaymentMethod : ''

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
      const response = await axios.post('/api/images/imagePayment/add', formData);
      console.log('Card Payment added successfully:', response.data);
      // Optionally, you can clear the form fields after successful submission
      setFormData({
        paymentID : '',
        UserID : '',
        photoId : '',
        Date_of_buy : '',
        Amount : '1000.00',
        PaymentMethod : ''
      });
    } catch (error) {
      console.error('Error adding card payment:', error);
    }
  };

  return (
    <div>
      <h2>Add Image Payment </h2>
      <form onSubmit={handleSubmit}>
      
        <div>
          <label>paymentID:</label>
          <input type="text" name="paymentID" value={formData.paymentID} onChange={handleChange} />
        </div>
        <div>
          <label>UserID:</label>
          <input type="text" name="UserID" value={formData.UserID} onChange={handleChange} />
        </div>
        <div>
          <label>photoId:</label>
          <input type="text" name="photoId" value={formData.photoId} onChange={handleChange} />
        </div>
        <div>
          <label> Date:</label>
          <input type="text" name=" Date_of_buy" value={formData. Date_of_buy} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="Amount" value={1000.00} onChange={handleChange} />
        </div>
        <div>
          <label>Payment Method:</label>
          <select name="PaymentMethod" value={formData.PaymentMethod} onChange={handleChange}>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddimagePaymemntForm;
