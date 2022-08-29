import { Sequelize } from 'sequelize';
import vars from '../vars';
import user from './users';

const sequelize = new Sequelize(vars.db.uri, {
  dialect: 'mysql'
});

export const UserSequelize = user(sequelize);

export default sequelize;