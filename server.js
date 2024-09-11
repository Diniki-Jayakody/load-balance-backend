const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const authRoutes = require('./routes/authroutes');
const videoRoutes = require('./routes/videoroutes'); //
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware to allow requests from different origins
app.use(cors());

app.use('/uploads', express.static('uploads'));
// Use the auth routes
app.use('/api', authRoutes);
app.use('/api/videos', videoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
