import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Dashboard() {
  return (
    <div className="flex flex-col space-y-6 py-12 px-14">
      <h2>DashBoard</h2>
      <div className="flex space-x-8">
        <div className="w-2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Abhishek</span>
          <span className="text-gray-500">Your Balance Rs RS 10000</span>
        </div>
        <div className="w-2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Abhishek</span>
          <span className="text-gray-500">Your Expenses Rs RS 40000</span>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Expenses Chart</h2>

        <div className="flex gap-6">
          <div className="w-2/3 border rounded-lg p-4">
            <LineChart />
          </div>

          <div className="w-1/3 border rounded-lg p-4">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="flex space-x-8">
        <div className="w-2/5 h-37.5 border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Your Activity</span>
          <li className="text-gray-500 m-4 ">You Sent Rs 5000 to your mother</li>
        </div>
        <div className="w-2/5 h-37.5 border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Pending Bills</span>
          <li className="text-gray-500 m-4">Dipu kirana Bill: Rs 700</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
