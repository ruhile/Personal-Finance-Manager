import React, { useEffect, useState } from "react";
import { fetchExpenses, addExpense, updateExpense, deleteExpense } from "../services/ExpenseService";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await fetchExpenses();
    setExpenses(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateExpense(editId, { title, amount });
      setEditId(null);
    } else {
      await addExpense({ title, amount });
    }
    setTitle("");
    setAmount("");
    loadExpenses();
  };

  const handleEdit = (expense) => {
    setTitle(expense.title);
    setAmount(expense.amount);
    setEditId(expense._id);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (
    <div className="dashboard-container">
      <h2>Expense Manager</h2>

      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          {editId ? "Update Expense" : "Add Expense"}
        </button>
      </form>

      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense._id} className="expense-item">
            <span>{expense.title} - ₹{expense.amount}</span>
            <div className="buttons">
              <button onClick={() => handleEdit(expense)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(expense._id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
