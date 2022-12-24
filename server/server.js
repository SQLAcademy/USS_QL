const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));







app.use((req, res) => {
  res.status(404).json('Error: Page not found.');
});

app.listen(port);
