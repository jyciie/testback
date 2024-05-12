'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserImage.init(
    {
      userID: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      ImageBlob: {
        type: DataTypes.BLOB,
      },
    },
    {
      sequelize,
      modelName: 'UserImage',
    }
  );

  UserImage.associate = (models) => {
    UserImage.belongsTo(models.User, {
      foreignKey: 'userID',
    });
  };
  return UserImage;
};
