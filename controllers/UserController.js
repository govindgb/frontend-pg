const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')


const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    res = User.createUser(username,password)
    return res;
})
module.exports = {loginUser}