import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyPaymentHistory = ({ userId }) => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get(`/api/pay/payment/history/${userId}`); // Adjust the endpoint based on your backend implementation
      setPaymentHistory(response.data);
    } catch (error) {
      console.error('Error fetching payment history:', error);
    }
  };

  return (
    <div>
      <h2>My Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Invoice Number</th>
            <th>Amount</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment.paymentID}>
              <td>{payment.Date}</td>
              <td>{payment.InvoiceNumber}</td>
              <td>{payment.Amount}</td>
              {/* Display additional payment details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPaymentHistory;
