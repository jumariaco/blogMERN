import express from 'express';
const router = express.Router();
import Post from '../models/Post.js'; 

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Le post n'a pas été trouvé" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new post
router.post('/', async (req, res) => {
  const { title, content, comment } = req.body;
  const post = new Post({
    title,
    content,
    comment 
  });
  
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a post by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) return res.status(404).json({ message: "Le post n'a pas été trouvé" });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: "Le post n'a pas été trouvé" });
    res.json({ message: 'Post supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD a comment to a post
router.post('/:id/comment', async (req, res) => {
  const { author, content } = req.body;
  
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Le post n'a pas été trouvé" });
    
    post.comment.push({ author, content }); 
    
    const updatedPost = await post.save();
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



export default router;
