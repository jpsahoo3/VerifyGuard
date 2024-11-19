/*
URL Scanner - Backend

Jyotiprakash Sahoo: jpsahoo3@gmail.com

Main file from where execution starts
*/
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDb.js";
import router from "./routes/routers.js";

//For using Dot env files
dotenv.config();
const port = process.env.PORT || 8000 ;

const app = express();

//JSON middleware (For reading data from payload present in json format)
app.use(express.json());

//Task List Routers
app.use("/", router);

//Database connection for Task List
connectDB(process.env.DATABASE_URL);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});