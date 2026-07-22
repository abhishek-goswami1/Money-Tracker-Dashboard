import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col py-12 px-14">
      <h2>DashBoard</h2>
      <div className="flex space-x-8">
        <div className="w2/5 h-37.5 border  rounded flex-col justify-centerp-4 mt">
          <span>Abhishek</span>
          <span className="text-gray-500">Your Balance Rs RS.100000</span>
        </div>
        <div className="w2/5 h-37.5 border rounded flex-col justify-centerp-4 mt">
          <span>Abhishek</span>
          <span className="text-gray-500">Your Expenses Rs RS.40000</span>
        </div>
      </div>
      <div className="flex space-x-8">
        <div className="w2/5 h-37.5 border  rounded flex-col justify-centerp-4 mt">
          <span>Your Activity</span>
          <span className="text-gray-500">Your Balance Rs RS.100000</span>
        </div>
        <div className="w2/5 h-37.5 border rounded flex-col justify-centerp-4 mt">
          <span>Pending Bills</span>
          <span className="text-gray-500">Your Expenses Rs RS.40000</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
