import React from "react";
import ClientLayout from "../../../layouts/ClientLayout";

const PaymentPage = () => {
  // Dummy Data
  const advanceBooking = [
    { service: "Haircut", amount: 1000 },
    { service: "Facial", amount: 2000 },
    { service: "Massage", amount: 2000 },
  ];

  const dueBooking = [
    { service: "Hair Spa", amount: 1200 },
    { service: "Beard Trim", amount: 800 },
  ];

  const totalAdvance = advanceBooking.reduce((sum, item) => sum + item.amount, 0);
  const totalDue = dueBooking.reduce((sum, item) => sum + item.amount, 0);

  return (
    <ClientLayout>
      <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg shadow-blue-500/50 transform transition duration-300 hover:scale-105">
        Payment Management
      </h1>
      
      <div className="flex gap-6 px-10">
        {/* Advance Booking Table */}
        <div className="w-1/2 bg-green-100 p-6 rounded-lg shadow-lg border border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Advance Booking</h2>
          <table className="w-full border-collapse border border-green-500">
            <thead>
              <tr className="bg-green-300">
                <th className="border border-green-500 p-2">Service</th>
                <th className="border border-green-500 p-2">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {advanceBooking.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-green-500 p-2">{item.service}</td>
                  <td className="border border-green-500 p-2">{item.amount}</td>
                </tr>
              ))}
              <tr className="bg-green-300 font-bold">
                <td className="border border-green-500 p-2 text-center">Total</td>
                <td className="border border-green-500 p-2 text-center">₹{totalAdvance}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Due Booking Table */}
        <div className="w-1/2 bg-red-100 p-6 rounded-lg shadow-lg border border-red-300">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Due Booking</h2>
          <table className="w-full border-collapse border border-red-500">
            <thead>
              <tr className="bg-red-300">
                <th className="border border-red-500 p-2">Service</th>
                <th className="border border-red-500 p-2">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {dueBooking.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-red-500 p-2">{item.service}</td>
                  <td className="border border-red-500 p-2">{item.amount}</td>
                </tr>
              ))}
              <tr className="bg-red-300 font-bold">
                <td className="border border-red-500 p-2 text-center">Total</td>
                <td className="border border-red-500 p-2 text-center">₹{totalDue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ClientLayout>
  );
};

export default PaymentPage;


