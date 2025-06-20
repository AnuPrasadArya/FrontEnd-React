import React, { useEffect, useState } from 'react';
import { GetTransactions } from '../Services/apicall';

function Transactions() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const payload = {
      cardNumber: "12345678",
      referenceId: "",
      status: "Held",
      fromDate: "2025-06-18",
      toDate: "2025-06-20",
      pageNumber: 1,
      pageSize: 10
    };
  GetTransactions(payload)
  .then(res => {
    console.log("Transaction Response:", res.data.Items); // 👈 This logs the full response
    setPayments(res.data.Items);
  })
  .catch(error => {
    console.error("Error fetching transactions:", error); // 👈 Optional: log any errors
  });
  
  }, []);

  return (
    <div>
      <h3>Payment Transactions</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>RefundCode</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(tx => (
            <tr key={tx.id}>
              <td>{tx.ReferenceId}</td>
              <td>${tx.TransactionAmount.toFixed(2)}</td>
              <td>{tx.TransactionStatus}</td>
              <td>{tx.RefundCode}</td>
              <td>{new Date(tx.CreatedOn).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
