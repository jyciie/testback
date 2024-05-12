const {
  CreateUserImage,
  UpdateUserImage,
  DeleteUserImage,
  GetUserImageByID,
  GetUserImages,
} = require('../repository/userimagerepository');

const createUserImageService = async (userImage) => {
  return await CreateUserImage(userImage);
};

const updateUserImageService = async (userImage, userID) => {
  return await UpdateUserImage(userImage, userID);
};

const deleteUserImageService = async (userID) => {
  return await DeleteUserImage(userID);
};

const getUserImageByIDService = async (userID) => {
  return await GetUserImageByID(userID);
};

const getUserImagesService = async () => {
  return await GetUserImages();
};
module.exports = {
  createUserImageService,
  updateUserImageService,
  deleteUserImageService,
  getUserImageByIDService,
  getUserImagesService,
};
