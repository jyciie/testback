const {
  createUserService,
  updateUserService,
  deleteUserService,
  getUserByIDUserService,
  getUsersService,
} = require('../service/userService');
const {
  createUserImageService,
  deleteUserImageService,
  upsertUserImageService,
} = require('../service/userImageService');

const createUser = async (req, res) => {
  const { FName, MName, LName, BDate, ContactNumber, Address } = req.body;
  const file = req.file;

  const user = await createUserService({
    FName,
    MName,
    LName,
    BDate,
    ContactNumber,
    Address,
  });

  if (user) {
    if (file) {
      const userimage = await createUserImageService({
        ImageBlob: file.buffer,
        userID: user.userID,
      });
      if (userimage) {
        return res.send('Added');
      } else return res.send('Error UserImage');
    }
    return res.send('User added');
  } else return res.send('Error User');
};

const updateUser = async (req, res) => {
  const { FName, MName, LName, BDate, ContactNumber, Address, ImageBlob } =
    req.body;
  const { userID } = req.params;
  const file = req.file;

  const user = await updateUserService(
    {
      FName,
      MName,
      LName,
      BDate,
      ContactNumber,
      Address,
    },
    userID
  );
  if (user) {
    if (file) {
      const userimage = await upsertUserImageService(
        { ImageBlob: file.buffer, userID: userID },
        userID
      );
      if (userimage) {
        return res.send('Updated');
      } else return res.send('Error UserImage');
    }
    return res.send('Updated');
  } else return res.send('Error User');
};

const deleteUser = async (req, res) => {
  const { userID } = req.params;
  const user = await deleteUserService(userID);
  if (user) {
    const userimage = await deleteUserImageService(userID);
    if (userimage) {
      return res.send('Deleted');
    } else return res.send('Error UserImage');
  } else {
    return res.send('Error User');
  }
};

const getUserByIDUser = async (req, res) => {
  const { userID } = req.params;
  const user = await getUserByIDUserService(userID);
  if (user) return res.send(user);
  else return res.send('Error user');
};

const getUsers = async (req, res) => {
  const user = await getUsersService();
  if (user) return res.send(user);
  else return res.send('Error user');
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserByIDUser,
  getUsers,
};
