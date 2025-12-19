// app.js
const express = require('express');
const app = express();
const port = 5002;

// Route
app.get('/', (req, res) => {
  res.send('Welcome to my Node App!');
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Node app listening at http://0.0.0.0:${port}`);
});