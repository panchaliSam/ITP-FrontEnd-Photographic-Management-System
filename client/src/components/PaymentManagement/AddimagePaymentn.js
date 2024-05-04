import React, { useState, useEffect } from 'react';
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
      console.log('Payment added successfully:', response.data);
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
      console.error('Error adding payment:', error);
    }
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <div className="left-side-image">
          <img src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1713593684~exp=1713597284~hmac=f595e1fb1d2891a487ada302c017ff0316d94c0f9ba23a954114a57d2267dcaf&w=740" alt="Left Side Image" />
        </div>
        <div className="form-wrapper">
          <h2 > Add Image payment </h2>
          
          <form onSubmit={handleSubmit}>
          
            <div>
              <label>Payment ID:</label>
              <input type="text" name="paymentID" value={formData.paymentID} disabled />
            </div>
            <div>
              <label>User ID:</label>
              <input type="text" name="UserID" value={formData.UserID} onChange={handleChange} />
            </div>
            <div>
              <label>photoId:</label>
              <input type="text" name="photoId" value={formData.photoId} onChange={handleChange} />
            </div>
            <div>
              <label>Date:</label>
              <input type="date" name="Date_of_buy" value={formData.Date_of_buy} onChange={handleChange} />
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
      </div>
    </div>
  );
};

export default AddimagePaymemntForm;
