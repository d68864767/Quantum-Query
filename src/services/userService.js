```javascript
// Importing required modules
const User = require('../models/userModel');

// User Service Object
const UserService = {};

// Function to create a new user
UserService.createUser = async (username, password, email) => {
    try {
        const user = new User({
            username,
            password,
            email
        });
        return await user.save();
    } catch (error) {
        throw error;
    }
};

// Function to find a user by username
UserService.findUserByUsername = async (username) => {
    try {
        return await User.findOne({ username });
    } catch (error) {
        throw error;
    }
};

// Function to update a user's details
UserService.updateUser = async (username, newDetails) => {
    try {
        return await User.findOneAndUpdate({ username }, newDetails, { new: true });
    } catch (error) {
        throw error;
    }
};

// Function to delete a user
UserService.deleteUser = async (username) => {
    try {
        return await User.findOneAndDelete({ username });
    } catch (error) {
        throw error;
    }
};

// Exporting the User Service
module.exports = UserService;
```
