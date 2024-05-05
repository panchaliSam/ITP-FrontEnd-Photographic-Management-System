import React from 'react';
import { Link, useParams } from 'react-router-dom';
import userPayment from "../../images/Payment Management/paymentUserAccount.png";

const ManageButtons = () => {
  // Extract userId from URL parameters
  const { userId } = useParams();

  return (
    <div className="split-screen">
      <div className="left-pane">
        <div className="manage-buttons-container">
          <Link to={`/userAccount/${userId}/payments/addCard`} className="manage-button-link">
            <button className="manage-button">
              Add Card
            </button>
          </Link><br/>
          <Link to={`/userAccount/${userId}/payments/paymentsHistory`} className="manage-button-link">
            <button className="manage-button">
              View Payment History
            </button>
          </Link><br/>
        </div>
      </div>
      <div className="right-pane">
        <img src={userPayment} alt="description" className="image"/>
      </div>
    </div>
  );
};

export default ManageButtons;
