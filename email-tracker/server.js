// server.js
const express = require('express');
const trackerRoutes = require('./routes/tracker');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());

// Routes
app.use('/tracker', trackerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
