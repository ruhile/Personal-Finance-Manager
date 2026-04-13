require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 📌 Connect to MongoDB (Atlas)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 📌 Routes
// Routes
const expenseRoutes = require("./routes/expense");
const authRoutes = require("./routes/auth");

app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);

// 📌 Dynamic PORT (IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));