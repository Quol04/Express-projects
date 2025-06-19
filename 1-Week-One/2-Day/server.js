const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

let posts = [
  { id: 1, title: 'Post One', content: 'This is the content of post one.' },
  { id: 2, title: 'Post Two', content: 'This is the content of post two.' },
  { id: 3, title: 'Post Three', content: 'This is the content of post three.' }
];

app.get('/', (req, res) => {
  res.send(posts);
});
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send('Post not found');
  }
});






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
