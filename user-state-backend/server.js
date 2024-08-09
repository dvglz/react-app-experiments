// backend/server.js
const express = require('express');
const app = express();
const port = 3001; // Note the port change

app.get('/user/state', (req, res) => {
    // Mock user state response
    res.json({ state: 'active' }); // Change this to 'inactive' to test different states
});

// Optional: Default route to handle root URL
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Backend server is running');
});