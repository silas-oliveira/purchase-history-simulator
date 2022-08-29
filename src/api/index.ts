import express from 'express';
import cartsRouter from './routes/carts.route';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use('/carts', cartsRouter);
api.get('/', (_, res) => res.send());

export default api;