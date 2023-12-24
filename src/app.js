```javascript
// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const routes = require('./api/routes');

// Creating an Express application
const app = express();

// Applying middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up routes
app.use('/api', routes);

// Handling 404
app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

// Starting the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

module.exports = app;
```
