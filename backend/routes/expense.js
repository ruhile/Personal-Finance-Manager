const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// 📌 Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// 📌 Add an expense
router.post("/", async (req, res) => {
  try {
    const { title, amount } = req.body;
    if (!title || !amount) return res.status(400).json({ message: "All fields are required" });

    const newExpense = new Expense({ title, amount });
    await newExpense.save();
    
    res.status(201).json(newExpense);
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// 📌 Update an expense
router.put("/:id", async (req, res) => {
  try {
    const { title, amount } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      { title, amount },
      { new: true } // Return the updated document
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json(updatedExpense);
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// 📌 Delete an expense
router.delete("/:id", async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
