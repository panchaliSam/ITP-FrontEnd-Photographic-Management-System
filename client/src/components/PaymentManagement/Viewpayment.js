// Viewpayment.js (or any other parent component where you're using PaymentDetails)
import React from 'react';
import PaymentDetails from './PaymentDetails';

const ViewPayment = () => {
  return (
    <div>
      <h1>View Payment</h1>
      {/* Assuming you're passing paymentID and userID as props */}
      <PaymentDetails paymentID="p123" userID="u123" />
    </div>
  );
};

export default ViewPayment;
