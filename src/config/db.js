```javascript
// Importing required modules
const mongoose = require('mongoose');
require('dotenv').config();

// Database connection
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error: ', err));

module.exports = mongoose;
```
