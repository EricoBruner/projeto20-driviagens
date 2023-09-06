import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

const port = process.env.NODE_ENV || 5000;
app.listen(5000, () => {
  console.log(`👾 Server running on port ${port}! 👾`);
});
