import { Router } from 'express';
import { CartsController } from '../../app/controller';

const cartsRouter = Router();

cartsRouter.get('/', async (req, res, _next) => {
  const result = await CartsController.list(req.query);
  return res.status(200).json(result);
});

export default cartsRouter;