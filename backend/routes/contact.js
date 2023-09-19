const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Here we will handle contact form submissions
  res.send('Contact form submission received');
});

module.exports = router;
