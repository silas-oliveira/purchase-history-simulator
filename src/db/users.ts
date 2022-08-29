import { DataTypes, Sequelize } from 'sequelize';

const user = (sequelize: Sequelize) => {
  const model = sequelize.define('users', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: false,
    tableName: 'users'
  });
  return model;
};

export default user;