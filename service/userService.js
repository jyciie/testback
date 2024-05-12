const {
  createUser,
  UpdateUser,
  DeleteUser,
  GetUserByID,
  GetUsers,
} = require('../repository/userrepository');

const createUserService = async (user) => {
  return await createUser(user);
};

const updateUserService = async (user, userID) => {
  return await UpdateUser(user, userID);
};

const deleteUserService = async (userID) => {
  return await DeleteUser(userID);
};

const getUserByIDUserService = async (userID) => {
  return await GetUserByID(userID);
};

const getUsersService = async () => {
  return await GetUsers();
};

module.exports = {
  createUserService,
  updateUserService,
  deleteUserService,
  getUserByIDUserService,
  getUsersService,
};
