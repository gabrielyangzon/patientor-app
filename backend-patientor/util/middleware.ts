import { NextFunction, Response } from "express";

const requestLogger = (
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  console.log("Method:", _request.method);
  console.log("Path:  ", _request.url);
  console.log("Body:  ", _request.body);

  console.log("/end");
  next();
};

module.exports = { requestLogger };
