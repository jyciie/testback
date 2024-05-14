const express = require('express');
const sequelize = require('./config/connection');
const cors = require('cors');
const multer = require('multer');
const {
  createUser,
  updateUser,
  deleteUser,
  getUserByIDUser,
  getUsers,
} = require('./controllers/userController');

const {
  getUserImages,
  getUserImageByID,
} = require('./controllers/userImageController');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome');
});

app.post('/createUser', upload.single('file'), createUser);

app.put('/updateUser/:userID', upload.single('file'), updateUser);

app.delete('/deleteUser/:userID', deleteUser);

app.get('/getUserByIDUser/:userID', getUserByIDUser);

app.get('/getUsers', getUsers);

app.get('/getUserImages', getUserImages);

app.get('/getUserImageByID/:userID', getUserImageByID);

app.listen(PORT, async (error) => {
  if (!error) console.log('server is running: ' + PORT);
  else console.log('server error occured:  ' + error);

  try {
    await sequelize.authenticate();
    console.log('db success');
  } catch (error) {
    console.log('db error : ' + error);
  }
});
