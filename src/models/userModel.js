```javascript
// Importing required modules
const mongoose = require('../config/db.js');

// User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// User Model
const User = mongoose.model('User', UserSchema);

// Exporting the User Model
module.exports = User;
```
