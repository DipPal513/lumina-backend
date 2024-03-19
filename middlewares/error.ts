import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.statusCode = error.statusCode;
  error.message = error.message;

  // wrong mongodb id
  if (error.name == "CastError") {
    const message = `Resources not found Invalid: ${error.path}`;
    error = new ErrorHandler(400, message);
  }
  // duplicate key error
  if (error.statusCode == 1100) {
    const message = `Duplicate ${Object.keys(error.keyValue)} entered`;
    error = new ErrorHandler(400, message);
  }
  // wrong jwt error

  if (error.name === "JsonWebTokenError") {
    const message = "JSONwebtoken is invalid, try again";
    error = new ErrorHandler(400, message);
  }
  // JWT expired error

  if (error.name === "TokenExpireError") {
    const message = "JSON web token is expired";
    error = new ErrorHandler(400, message);
  }
};
