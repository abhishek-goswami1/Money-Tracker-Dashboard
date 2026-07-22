import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col space-y-6 py-12 px-14">
      <h2>DashBoard</h2>
      <div className="flex space-x-8">
        <div className="w2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Abhishek</span>
          <span className="text-gray-500">Your Balance Rs RS 100000</span>
        </div>
        <div className="w2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Abhishek</span>
          <span className="text-gray-500">Your Expenses Rs RS 40000</span>
        </div>
      </div>
      <div className="flex space-x-8">
        <h2>Expenses Chart</h2>
      </div>
      <div className="flex space-x-8">
        <div className="w2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Your Activity</span>
          <li className="text-gray-500">You Sent Rs 5000 to your mother</li>
        </div>
        <div className="w2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Pending Bills</span>
          <li className="mt-4">Dipu kirana Bill: Rs 700</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
