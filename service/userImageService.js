const {
  CreateUserImage,
  UpdateUserImage,
  DeleteUserImage,
  GetUserImageByID,
  GetUserImages,
  UpsertUserImage,
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

const upsertUserImageService = async (userImage) => {
  return await UpsertUserImage(userImage);
};
module.exports = {
  createUserImageService,
  updateUserImageService,
  deleteUserImageService,
  getUserImageByIDService,
  getUserImagesService,
  upsertUserImageService,
};
