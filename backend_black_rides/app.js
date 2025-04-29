const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongoUrl =
  'mongodb+srv://adminblackrides:blackrides123@cluster0.vjlg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const JWT_SECRET =
  'hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe';
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Database Connected');
  })
  .catch(e => {
    console.log(e);
  });
require('./UserDetails');
const User = mongoose.model('UserInfo');

app.get('/', (req, res) => {
  res.send({status: 'Started'});
});

app.post('/register', async (req, res) => {
  const {name, email, mobile, password, age} = req.body;
  console.log(req.body);

  // Check if the user is at least 18 years old
  if (age < 18) {
    return res.send({
      status: 'error',
      data: 'You must be at least 18 years old to register.',
    });
  }

  const oldUser = await User.findOne({email: email});

  if (oldUser) {
    return res.send({data: 'User already exists!!'});
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      name: name,
      email: email,
      mobile,
      password: encryptedPassword,
      age,
    });
    res.send({status: 'ok', data: 'User Created'});
  } catch (error) {
    res.send({status: 'error', data: error});
  }
});

app.post('/login-user', async (req, res) => {
  const {email, password} = req.body;

  // Check if the user exists
  const oldUser = await User.findOne({email: email});
  if (!oldUser) {
    return res
      .status(404)
      .send({status: 'error', message: "User doesn't exist!"});
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, oldUser.password);

  if (isPasswordValid) {
    const token = jwt.sign({email: oldUser.email}, JWT_SECRET);

    // Respond with the token and user type
    return res.status(200).send({
      status: 'ok',
      token,
      userData: oldUser,
    });
  } else {
    console.log('Incorrect password'); // Log for debugging
    return res
      .status(401)
      .send({status: 'error', message: 'Invalid credentials'});
  }
});

app.post('/userdata', async (req, res) => {
  const {token} = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;

    User.findOne({email: useremail}).then(data => {
      return res.send({status: 'Ok', data: data});
    });
  } catch (error) {
    return res.send({error: error});
  }
});

app.listen(5001, () => {
  console.log('running');
});
