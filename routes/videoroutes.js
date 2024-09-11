// routes/videoRoutes.js

const express = require('express');
const multer = require('multer'); // Middleware for handling multipart/form-data
const path = require('path');
const router = express.Router();

// In-memory storage for demo purposes
const videos = [
  {
    id: 1,
    title: 'Sample Video 1',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Sample Video 2',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Sample Video 3',
    thumbnail: 'https://via.placeholder.com/150'
  }
];

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// POST endpoint to upload video
router.post('/upload', upload.single('videoFile'), (req, res) => {
  const { title, description } = req.body;
  const videoFile = req.file;

  if (!videoFile) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Here you can handle saving the video metadata to a database
  res.status(200).json({ message: 'Video uploaded successfully', title, description, videoFile });
});

// GET endpoint to fetch list of videos
router.get('/list', (req, res) => {
  res.status(200).json(videos);
});

module.exports = router;
