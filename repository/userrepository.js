const sequelize = require('../config/connection');
const db = require('../database/models/index');

const createUser = async (user) => {
  return await db.User.create(user);
};

const UpdateUser = async (user, userID) => {
  return await db.User.update(user, {
    where: {
      userID,
    },
  });
};

const DeleteUser = async (userID) => {
  return await db.User.destroy({
    where: {
      userID,
    },
  });
};

const GetUserByID = async (userID) => {
  return await db.User.findOne({
    where: {
      userID,
    },
    include: db.UserImage,
  });
};

const GetUsers = async () => {
  return await db.User.findAll({
    include: db.UserImage,
  });
};
//asdasd
module.exports = {
  createUser,
  UpdateUser,
  DeleteUser,
  GetUserByID,
  GetUsers,
};
