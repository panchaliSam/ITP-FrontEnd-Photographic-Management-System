import React from 'react';
import FinanceTasks from '../../components/PaymentManagement/financeTask';

function FinanceTaskPage() {
  return (
    <div>
      <h1> Finance Team Task </h1>
      <FinanceTasks /> {/* Render the FinanceTasks component */}
    </div>
  );
}

export default FinanceTaskPage;