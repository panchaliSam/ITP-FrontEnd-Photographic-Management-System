import React from 'react';
import { Link } from 'react-router-dom';

function FinanceTasks() {
  return (
    <div className="container mt-5">
      <h2>Finance Tasks</h2>
      <div className="row mt-4">
        <div className="col-md-3">
          <Link to="/editpackages" className="btn btn-primary btn-block">Manage Packages</Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <Link to="/viewpackages" className="btn btn-primary btn-block">View Packages</Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <Link to="/payment" className="btn btn-primary btn-block">View Payment History</Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <Link to="/addpaymentn" className="btn btn-primary btn-block">Add payment</Link>
        </div>
      </div>
    </div>
  );
}

export default FinanceTasks;
