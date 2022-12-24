const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express main page');
});

app.use((req, res) => {
  res.status(404).json('Error: Page not found.');
});

app.listen(port);
