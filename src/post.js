const router = require('express').Router();
const Post = require('../model/post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description
  });
  try {
    const savePost = await post.save();
    res.send(savePost);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
