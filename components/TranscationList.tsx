// transactions.js
'use client'
export default function Transactions() {
    const transactionData = [
      {
        emailAddress: "mulizanni99@gmail.com",
        amount: 3000,
        status: "Pending",
        date: "12/02/2024"
      },
      {
        emailAddress: "mulizanni99@gmail.com",
        amount: 3000,
        status: "Completed",
        date: "12/02/2024"
      },
      // Add the rest of the transaction data
    ];
  
    return (
      <div>
        <h1>Transactions</h1>
        <table>
          <thead>
            <tr>
              <th>Email Address</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.emailAddress}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }