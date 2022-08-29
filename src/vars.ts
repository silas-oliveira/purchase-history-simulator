import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default {
  api: {
    port: Number(env.API_PORT || env.PORT || 3001),
  },
  db: {
    uri: env.DB_URI || 'mysql://root:123456@127.0.0.1:3002/carts'
  }
};
