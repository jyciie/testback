'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      FName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ContactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.associate = (models) => {
    User.hasOne(models.UserImage, {
      foreignKey: 'userID',
    });
  };
  return User;
};
