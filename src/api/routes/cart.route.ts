import { Router } from 'express';
import { CartController } from '../../app/controller/cart.controller';

const cartsRouter = Router();

cartsRouter.get('/', async (req, res, _next) => {
  const result = await CartController.get(req.query);
  return res.status(200).json(result);
});

export default cartsRouter;