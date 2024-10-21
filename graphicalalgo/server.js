const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// React app
app.use(express.static(path.join(__dirname, 'build')));

// Sorting Visualization
app.use('/Sort-Visualization', (req, res, next) => {
    console.log('Serving Sort-Visualization:', req.path);
    next();
}, express.static(path.join(__dirname, 'Sort-Visualization')));

// Searching Visualization
app.use('/Search-Visualization', (req, res, next) => {
    console.log('Serving Search-Visualization:', req.path);
    next();
}, express.static(path.join(__dirname, 'Search-Visualization')));

// Serve index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
