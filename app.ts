import { ErrorMiddleware } from './middlewares/error';
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// app initialization
export const app = express();
// config dotenv
dotenv.config();

// cors setup

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);



// test api

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "api is working",
  });
});

// unknown route

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} is not found!`);
//   error. = 404;
  next(error);
});


// 

app.use(ErrorMiddleware);