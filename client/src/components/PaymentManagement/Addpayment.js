// AddPaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/PaymentManagement/AddPaymentForm.css'; 

const AddPaymentForm = () => {
  const [formData, setFormData] = useState({
    pin_No:'',
    UserID: '',
    paymentID: '',
    packageID: '',
    Date: '',
    InvoiceNumber: '',
    Amount: '',
    Advance_or_Full: 'Advance',
    PaymentMethod: 'card'
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
      const response = await axios.post('http://localhost:4001/api/pay/payment/add', formData);
      console.log('Payment added successfully:', response.data);
      // Optionally, you can clear the form fields after successful submission
      setFormData({
        pin_No:'',
        UserID: '',
        paymentID: '',
        packageID: '',
        Date: '',
        InvoiceNumber: '',
        Amount: '',
        Advance_or_Full: 'Advance',
        PaymentMethod: 'card'
      });
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };

  return (
    <div>
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>pin_No:</label>
          <input type="text" name="pin_No" value={formData.pin_No} onChange={handleChange} />
        </div>
        <div>
          <label>User ID:</label>
          <input type="text" name="UserID" value={formData.UserID} onChange={handleChange} />
        </div>
        <div>
          <label>Payment ID:</label>
          <input type="text" name="paymentID" value={formData.paymentID} onChange={handleChange} />
        </div>
        <div>
          <label>Package ID:</label>
          <input type="text" name="packageID" value={formData.packageID} onChange={handleChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="text" name="Date" value={formData.Date} onChange={handleChange} />
        </div>
        <div>
          <label>Invoice Number:</label>
          <input type="text" name="InvoiceNumber" value={formData.InvoiceNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="Amount" value={formData.Amount} onChange={handleChange} />
        </div>
        <div>
          <label>Advance or Full:</label>
          <select name="Advance_or_Full" value={formData.Advance_or_Full} onChange={handleChange}>
            <option value="Advance">Advance</option>
            <option value="Full">Full</option>
          </select>
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

export default AddPaymentForm;
