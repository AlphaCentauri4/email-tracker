// controllers/trackerController.js
const EmailOpen = require('../models/emailOpen');

exports.trackEmailOpen = async (req, res) => {
  try {
    // Extract email address from request
    const { email } = req.query;
    
    // Save email open event to MongoDB
    await EmailOpen.create({ email, timestamp: new Date() });

    // Serve a transparent pixel image
    res.sendFile('pixel.png', { root: __dirname });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
