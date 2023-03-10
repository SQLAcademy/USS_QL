const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const USSQLController = require('./controller/USSQLController');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get ('/', (req,res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.hmtl'))
})

app.use((req, res) => {
  res.status(404).json('Error: Page not found.');
});

app.listen(port);
