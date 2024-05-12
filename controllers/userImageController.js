const {
  getUserImageByIDService,
  getUserImagesService,
} = require('../service/userImageService');

const getUserImageByID = async (req, res) => {
  const { userID } = req.params;
  const userimage = getUserImageByIDService(userID);
  return res.send(userimage);
};

const getUserImages = async (req, res) => {
  const userimage = getUserImagesService();
  return res.send(userimage);
};

module.exports = {
  getUserImageByID,
  getUserImages,
};
