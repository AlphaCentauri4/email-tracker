// server.js
const express = require('express');
const mongoose = require('mongoose');
const trackerRoutes = require('./routes/tracker');

const app = express();
const PORT = process.env.PORT || 10000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/emailTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(express.json());

// Routes
app.use('/tracker', trackerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
