const router = require('express').Router();
const Post = require('../model/post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ name: -1 });
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

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.send(post);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const deletePost = await Post.remove({ _id });
    res.send(deletePost);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.patch('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const updatePost = await Post.updateOne(
      { _id },
      {
        $set: req.body
      }
    );
    res.send(updatePost);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

module.exports = router;
