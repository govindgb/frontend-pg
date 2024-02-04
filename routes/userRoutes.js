// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const dbConnection = require('../database/db'); // Import database connection
const {loginUser} = require('../controllers/UserController')
router.post('/login', loginUser)
// router.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const insertUserQuery = `INSERT INTO user (username, password) VALUES (?, ?)`;

//     dbConnection.query(insertUserQuery, [username, password], (err, result) => {
//         if (err) {
//             console.error('Error inserting user data:', err);
//             res.status(500).json({ message: 'Error inserting user data' });
//             return;
//         }
//         console.log('User data inserted into user table:', result);
//         res.json({ message: 'User data inserted successfully' });
//     });

//     console.log("login details", username, password);
//     // Perform authentication/validation
//     // For now, sending a simple response
//     // res.json({ message: 'Login successful', username });
// });

module.exports = router;
