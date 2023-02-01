import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Joi from "joi";

function ErrorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (Joi.isError(err)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: err.message })
  }

  return res.status(500).json({ message: 'Erro interno' });
}

export default ErrorMiddleware;