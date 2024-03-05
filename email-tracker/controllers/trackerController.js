// controllers/trackerController.js
const fetch = require('node-fetch');

exports.trackEmailOpen = async (req, res) => {
  try {
    const { email } = req.query;

    // Save email open event to JSONBin
    const response = await fetch('https://api.jsonbin.io/b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': process.env.master_key
      },
      body: JSON.stringify({ email, timestamp: new Date() })
    });

    const data = await response.json();

    // Serve a transparent pixel image
    res.sendFile('pixel.png', { root: __dirname });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
