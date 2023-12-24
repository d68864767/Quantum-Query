```javascript
// Importing required modules
const dotenv = require('dotenv');
const db = require('./db');

// Load environment variables from .env file
dotenv.config();

// Exporting the configurations
module.exports = {
    db,
    port: process.env.PORT,
    secretKey: process.env.SECRET_KEY
};
```
