const {
  createUserService,
  updateUserService,
  deleteUserService,
  getUserByIDUserService,
  getUsersService,
} = require('../service/userService');
const {
  createUserImageService,
  updateUserImageService,
  deleteUserImageService,
} = require('../service/userImageService');

const createUser = async (req, res) => {
  const { FName, MName, LName, BDate, ContactNumber, Address, ImageBlob } =
    req.body;

  const user = await createUserService({
    FName,
    MName,
    LName,
    BDate,
    ContactNumber,
    Address,
  });
  if (user) {
    const userimage = await createUserImageService({
      ImageBlob,
      userID: user.userID,
    });
    if (userimage) {
      return res.send('Added');
    } else return res.send('Error UserImage');
  } else return res.send('Error User');
};

const updateUser = async (req, res) => {
  const { FName, MName, LName, BDate, ContactNumber, Address, ImageBlob } =
    req.body;
  const { userID } = req.params;
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
    const userimage = await updateUserImageService(
      {
        ImageBlob,
        userID: userID,
      },
      userID
    );
    if (userimage) {
      return res.send('Updated');
    } else return res.send('Error UserImage');
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
