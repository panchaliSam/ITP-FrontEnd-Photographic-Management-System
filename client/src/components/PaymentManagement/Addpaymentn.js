// AddPaymentForm.js

import React, { useState,  } from 'react';
import axios from 'axios';
import '../../styles/PaymentManagement/AddPaymentForm.css'; 
import emailjs from '@emailjs/browser'

const AddPaymentForm = () => {
  const [formData, setFormData] = useState({
    UserID: '',
    paymentID: '', // We'll generate this
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
  //   if (!validateForm()) {
  //     return;
  // }
    emailjs.sendForm('service_wdz3xxy','template_hhdv6fq',e.target,'AkzAqUAg1H4ox9vlo')
    try {
      const response = await axios.post('/api/pay/payment/add', formData);
      console.log('Payment added successfully:', response.data);
      // Optionally, you can clear the form fields after successful submission
      setFormData({
        UserID: '',
        paymentID: '', // Regenerate payment ID for the next submission
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
  // const validateForm = () => {
  //   const { UserID, paymentID, packageID, Date, InvoiceNumber, Amount, Advance_or_Full, PaymentMethod} = formData;
  //   // Perform your form validation logic here
  //   // For example, check if required fields are filled
  //   if ( !UserID || !paymentID || !packageID || !Date || !InvoiceNumber || !Amount || !Advance_or_Full || !PaymentMethod) {
  //       alert("Please fill out all required fields.");
  //       return false;
  //   }

  //   return true;
  //   };

  return (
    <div className="add-payment-outer-container">
      <div className="add-payment-form-container">
        <div className="add-payment-left-side-image">
          <img src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1713593684~exp=1713597284~hmac=f595e1fb1d2891a487ada302c017ff0316d94c0f9ba23a954114a57d2267dcaf&w=740" alt="Left Side Image" />
        </div>
        <div className="add-payment-form-wrapper">
          <h2 > Add payment </h2>
          
          <form onSubmit={handleSubmit}>
            <div>
              <label>User ID:</label>
              <input type="text" name="UserID" value={formData.UserID} onChange={handleChange} />
            </div>
            <div>
              <label>payment ID:</label>
              <input type="text" name="paymentID" value={formData.paymentID} onChange={handleChange} />
            </div>
            <div>
              <label>Package ID:</label>
              <input type="text" name="packageID" value={formData.packageID} onChange={handleChange} />
            </div>
            <div>
              <label>Date:</label>
              <input type="date" name="Date" value={formData.Date} onChange={handleChange} />
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
      </div>
    </div>
  );
};

export default AddPaymentForm;
