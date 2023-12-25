// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'find_your_pg'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/login', (req, res) => {
    // Handle login logic here
    const { username, password } = req.body;
     // Insert the received username and password into the 'user' table
     const insertUserQuery = `
        INSERT INTO user (username, password) VALUES (?, ?)
    `;

 connection.query(insertUserQuery, [username, password], (err, result) => {
    if (err) {
        console.error('Error inserting user data:', err);
        res.status(500).json({ message: 'Error inserting user data' });
        return;
    }
    console.log('User data inserted into user table:', result);
    res.json({ message: 'User data inserted successfully' });
});
    console.log("login details",username, password);
    // Perform authentication/validation
    // For now, sending a simple response
    // res.json({ message: 'Login sfdsfuccessful', username  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
