const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
// const User = require('../models/userModel')
const crypto = require('crypto');

function generateUserToken(credentials) {
    // Find the user based on email and password (in a real-world scenario, you would typically query a database)
    const user = usersDatabase.find(u => u.email === credentials.email && u.password === credentials.password);
  
    if (!user) {
      // User not found or invalid credentials
      return null;
    }
  
    let secretKey = generateRandomKey(32);
    // Generate a token with user data
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
    console.log('Token generated:', token);
    return token;
}
const generateRandomKey = (length) => {
    return crypto.randomBytes(length).toString('hex');
};