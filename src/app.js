import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import errorHandler from "./middlewares/error.handler.js";
import router from "./routers/index.js";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use(router);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`👾 Server running on port ${port}! 👾`);
});
