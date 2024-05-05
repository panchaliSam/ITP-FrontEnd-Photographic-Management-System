import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const MyPaymentHistory = () => {
  const { userID } = useParams(); // Get userId from URL params
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetchPaymentHistory();
  }, [userID]); // Add userId to dependency array

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get(`/api/pay/payment/${userID}`);
      setPaymentHistory(response.data);
    } catch (error) {
      console.error('Error fetching payment history:', error);
    }
  };

  return (
    <div>
      <h2><center>My Payment History</center></h2><br></br>
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
            <tr key={payment.userID}>
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
