const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const auth = require('../middleware/auth');
const post = require('./post');

router.get('/', (req, res) => {
  res.send(`sakthivel`);
});

router.post('/user', async (req, res) => {
  // check whether email exits
  const emailExits = await User.findOne({
    email: req.body.email,
  });
  if (emailExits) return res.status(400).send(`Email already exits`);

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

router.post('/loginCheck', async (req, res) => {
  // check whether email does not exits
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send(`Email or password is incorrect`);

  // check password
  if (user.password !== req.body.password)
    return res.status(400).send('Email or password is incorrect');

  const userData = { _id: user._id };
  const token = jwt.sign(userData, process.env.TOKEN_SECRET);
  res.header('auth-token', token);
  res.send(token);
});

router.get('/posts', auth, async (req, res) => {
  res.send(req.user);
});

router.use('/post', post);

module.exports = router;
