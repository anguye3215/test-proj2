const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Just finished building and deploying my first AWS Pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);