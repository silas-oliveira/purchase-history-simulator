import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = ({ message }, _req, res, _next) => {
  const [msg, status, token] = message.split('/');

  return res
    .status(Number(status))
    .json({ [token ? 'error' : 'message']: msg });
};

export default errorHandler;
