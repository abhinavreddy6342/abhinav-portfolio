const dns = require("node:dns");

// Use reliable public DNS servers for MongoDB SRV lookup
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Gogulamudi Abhinav Reddy Portfolio API",
    status: "running",
  });
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is working perfectly!",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `🚀 Portfolio backend running on http://localhost:${PORT}`
  );
});