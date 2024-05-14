const { where } = require('sequelize');
const sequelize = require('../config/connection');
const db = require('../database/models/index');
const user = require('../database/models/user');

const CreateUserImage = async (userImage) => {
  return await db.UserImage.create(userImage);
};

const UpdateUserImage = async (userImage, userID) => {
  return await db.UserImage.update(userImage, {
    where: {
      userID,
    },
  });
};

const DeleteUserImage = async (userID) => {
  return await db.UserImage.destroy({
    where: {
      userID,
    },
  });
};

const GetUserImageByID = async (userID) => {
  return await db.UserImage.findOne({
    where: {
      userID,
    },
  });
};
const GetUserImages = async () => {
  return await db.UserImage.findAll();
};

const UpsertUserImage = async (userImage) => {
  return await db.UserImage.upsert(userImage);
};

module.exports = {
  CreateUserImage,
  UpdateUserImage,
  DeleteUserImage,
  GetUserImageByID,
  GetUserImages,
  UpsertUserImage,
};
