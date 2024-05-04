import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentDetails = ({ paymentID, userID }) => {
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/pay/payment/${paymentID}/${userID}`);
        setPayment(response.data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };

    fetchPaymentDetails();
  }, [paymentID, userID]);

  return (
    <div style={{border: '1px solid #ccc', borderRadius: '10px', padding: '20px', marginTop: '20px'}}>
      <h2 style={{marginBottom: '20px'}}>Payment Details</h2>
      {payment ? (
        <div>
          <p style={{marginBottom: '10px'}}><strong>Payment ID:</strong> {payment.paymentID}</p>
          <p style={{marginBottom: '10px'}}><strong>User ID:</strong> {payment.UserID}</p>
          <p style={{marginBottom: '10px'}}><strong>Package ID:</strong> {payment.packageID}</p>
          <p style={{marginBottom: '10px'}}><strong>Amount:</strong> {payment.Amount}</p>
          {/* Other payment details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentDetails;
