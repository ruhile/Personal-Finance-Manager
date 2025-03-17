const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 📌 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/finance_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 📌 Use Expense Routes
const expenseRoutes = require("./routes/expense");
app.use("/api/expenses", expenseRoutes); // ✅ Make sure this line is present!

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
