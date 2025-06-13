const Post = require('../models/postModel');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Article non trouvé' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.updatePost(req.params.id, title, content);
    if (!updatedPost) return res.status(404).json({ error: 'Article non trouvé' });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.deletePost(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
