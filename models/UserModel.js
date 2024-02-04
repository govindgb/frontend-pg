// models/userModel.js

const db = require('../database/db');

// Check if 'user' table exists, if not, create it
const createTable = () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `;
    db.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating user table:', err);
            return;
        }
        console.log('User table created or already exists');
    });
};

// Insert a new user into the 'user' table
const createUser = (username, password) => {
    const insertUserQuery = `INSERT INTO user (username, password) VALUES (?, ?)`;
    db.query(insertUserQuery, [username, password], (err, result) => {
        if (err) {
            console.error('Error inserting user data:', err);
            return;
        }
        console.log('User data inserted into user table:', result);
        return 'User data inserted into user table:';
    });
};

module.exports = { createTable, createUser };
