import express from 'express';
import 'express-async-errors';
import errorHandler from './middleware/error.middleware';
import cartsRouter from './routes/cart.route';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use('/cart-history', cartsRouter);
api.get('/', (_, res) => res.send());
api.use(errorHandler);


export default api;