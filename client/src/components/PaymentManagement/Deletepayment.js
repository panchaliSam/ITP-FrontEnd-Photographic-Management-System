// PaymentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [uniquePayments, setUniquePayments] = useState([]);
  const [searchUserId, setSearchUserId] = useState('');
  const [filteredPayments, setFilteredPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    if (searchUserId.trim() === '') {
      setFilteredPayments(uniquePayments);
    } else {
      const filtered = uniquePayments.filter(payment => payment.UserID.toLowerCase().includes(searchUserId.toLowerCase()));
      setFilteredPayments(filtered);
    }
  }, [searchUserId, uniquePayments]);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('/api/pay/payment');
      const uniquePaymentIDs = [...new Set(response.data.map(payment => payment.paymentID))];
      const uniquePaymentList = response.data.filter(payment => uniquePaymentIDs.includes(payment.paymentID));
      setUniquePayments(uniquePaymentList);
      setFilteredPayments(uniquePaymentList);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleDelete = async (paymentID) => {
    try {
      await axios.delete(`/api/pay/payment/${paymentID}`);
      fetchPayments(); // Refresh payments after deletion
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };
  

  
  const handleSearchChange = (e) => {
    setSearchUserId(e.target.value);
  };

  return (
    <div style={{ marginLeft: '250px' }}>
      <h2>All Payments</h2>
      <div>
        <label htmlFor="searchUserId">Search by User ID:</label>
        <input
          type="text"
          id="searchUserId"
          value={searchUserId}
          onChange={handleSearchChange}
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <br />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>pin_No</th>
            <th>User ID</th>
            <th>Payment ID</th>
            <th>Package ID</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.paymentID}>
              <td>{payment.pin_No}</td>
              <td>{payment.UserID}</td>
              <td>{payment.paymentID}</td>
              <td>{payment.packageID}</td>
              <td>{payment.Amount}</td>
              <td>
                <button 
                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
                onClick={() => handleDelete(payment.paymentID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
