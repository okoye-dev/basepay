"use client";
import React from "react";

export default function Transactions() {
  const transactionData = [
    {
      emailAddress: "mulizanni99@gmail.com",
      amount: 3000,
      status: "Pending",
      date: "12/02/2024",
    },
    {
      emailAddress: "mulizanni99@gmail.com",
      amount: 3000,
      status: "Completed",
      date: "12/02/2024",
    },
    {
      emailAddress: "mulizanni99@gmail.com",
      amount: 3000,
      status: "Failed",
      date: "12/02/2024",
    },
  ];

  return (
    <div className="rounded-2xl border p-8">
      <table className="min-w-full bg-white text-center text-sm font-light">
        <thead className="rounded-full bg-[#F7F7F7] text-[#646464]">
          <tr>
            <th className="border-b px-4 py-2">S/N</th>
            <th className="border-b px-4 py-2">Reference</th>
            <th className="border-b px-4 py-2">Amount</th>
            <th className="border-b px-4 py-2">Status</th>
            <th className="border-b px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2">{index + 1}</td>
              <td className="border-b px-4 py-2">{transaction.emailAddress}</td>
              <td className="border-b px-4 py-2">{transaction.amount}</td>
              <td className="border-b px-4 py-2">
                {(transaction.status) == "Pending"?(<p className="px rounded-full bg-[#FFA9441A] py-2 text-[#FFA944]">
                  {transaction.status}
                </p>):(transaction.status) == "Completed"?(<p className="px rounded-full bg-[#23AC001A] py-2 text-green">
                  {transaction.status}
                </p>):(<p className="px rounded-full bg-[#F71C1C1A] py-2 text-red">
                  {transaction.status}
                </p>) }
              </td>
              <td className="border-b px-4 py-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
