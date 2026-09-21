import { useEffect, useRef, useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Dashboard() {
  const [income, setIncome] = useState(1000);
  const [newIncome, setNewIncome] = useState(0);

  const [expenses, setExpenses] = useState(1000);
  const [newExpense, setNewExpense] = useState(0);

  const [isIncomeDialogOpen, setIsIncomeDialogOpen] = useState(false);
  const [isExpensesDialogOpen, setIsExpensesDialogOpen] = useState(false);

  const incomeDialogRef = useRef(null);
  const expensesDialogRef = useRef(null);

  // Sync the React state with the native HTML dialog API
  useEffect(() => {
    if (!incomeDialogRef.current) return;
    if (isIncomeDialogOpen) {
      incomeDialogRef.current.showModal();
    } else {
      incomeDialogRef.current.close();
    }
  }, [isIncomeDialogOpen]);

  useEffect(() => {
    if (!expensesDialogRef.current) return;
    if (isExpensesDialogOpen) {
      expensesDialogRef.current.showModal();
    } else {
      expensesDialogRef.current.close();
    }
  }, [isExpensesDialogOpen]);

  return (
    <>
      <div className="flex flex-col space-y-6 py-12 px-14">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        {/* User Info */}
        <div className="flex space-x-8">
          <div className="w-33/100 min-h-37.5 border rounded flex flex-col justify-center p-4 text-gray-600">
            <span>Abhishek</span>
            <span className="text-gray-500">Your Balance Rs:- {income}</span>
            <button
              className="cursor-pointer mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setIsIncomeDialogOpen(true)}
            >
              Add Money
            </button>
          </div>

          <div className="w-33/100 min-h-37.5 border rounded flex flex-col justify-center p-4 text-gray-600">
            <span>Abhishek</span>
            <span className="text-gray-500">Your Expenses Rs:- {expenses}</span>
            <button
              className="cursor-pointer mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setIsExpensesDialogOpen(true)}
            >
              Add Expenses
            </button>
          </div>

          <div className="w-33/100 min-h-37.5 border rounded flex flex-col justify-center p-4 text-gray-600">
            <span>Abhishek</span>
            <span className="text-gray-500">Current Balance Rs:- {income - expenses}</span>
          </div>
        </div>

        {/* Expenses Chart */}
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

        {/* Activities and Bills */}
        <div className="flex space-x-8">
          <div className="w-2/5 min-h-37.5 border rounded flex flex-col justify-center p-4 text-gray-600">
            <span>Your Activity</span>
            <ul className="text-gray-500 m-4 list-disc list-inside">
              <li>You Sent Rs 5000 to your mother</li>
            </ul>
          </div>
          <div className="w-2/5 min-h-37.5 border rounded flex flex-col justify-center p-4 text-gray-600">
            <span>Pending Bills</span>
            <ul className="text-gray-500 m-4 list-disc list-inside">
              <li>Dipu kirana Bill: Rs 700</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Income Dialog */}
      <dialog
        ref={incomeDialogRef}
        onClose={() => setIsIncomeDialogOpen(false)}
        className="backdrop:bg-black/50" // Stylizes your modal backdrop layer
        style={{
          padding: "0", // Let internal wrapper control padding
          margin: "auto", // Center vertically and horizontally naturally
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        {/* Safe styling wrapper inside the dialog */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "250px",
          }}
        >
          <h2 className="text-lg font-bold mb-2">Income</h2>
          <input
            type="number"
            placeholder="Enter your income..."
            className="border rounded p-2 w-full mb-4"
            value={newIncome || ""}
            onChange={(e) => setNewIncome(parseInt(e.target.value) || 0)}
          />
          <div className="flex space-x-2">
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setIsIncomeDialogOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setIncome((prev) => prev + newIncome);
                setNewIncome(0); // Reset input after saving
                setIsIncomeDialogOpen(false);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </dialog>

      {/* Expenses Dialog */}
      <dialog
        ref={expensesDialogRef}
        onClose={() => setIsExpensesDialogOpen(false)}
        className="backdrop:bg-black/50"
        style={{
          padding: "0",
          margin: "auto",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "250px",
          }}
        >
          <h2 className="text-lg font-bold mb-2">Expenses</h2>
          <input
            type="number"
            placeholder="Enter your expenses..."
            className="border rounded p-2 w-full mb-4"
            value={newExpense || ""}
            onChange={(e) => setNewExpense(parseInt(e.target.value) || 0)}
          />
          <div className="flex space-x-2">
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setIsExpensesDialogOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setExpenses((prev) => prev + newExpense);
                setNewExpense(0); // Reset input after saving
                setIsExpensesDialogOpen(false);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Dashboard;
