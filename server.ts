import { app } from "./app";
import dotenv from "dotenv";
import connectDatabase from "./utils/db";

// config dotenv
dotenv.config();


app.listen(4000, () => {
  console.log("app is running on port", process.env.PORT);
  connectDatabase();
});
