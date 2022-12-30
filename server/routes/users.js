const express = require('express');
const router = express.Router();

// Get user model
const User = require("../models/users");

/* GET users listing. 
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
});
*/

//Get all users from database
router.get("/users", async(req, res) => {
    const users = await User.find().exec(); 
    res.status(200).json({users});
});


//Create new user
router.post("/users", async (req, res) => {
  const {newUser} = req.body;
  const {username, password, history, allergens, restrictions} = newUser;

  if (!username || !password || !history || !allergens || !restrictions) {
    res.status(400);
    console.log("invalid user creation");
  } else {
    const newUser = await User.create(newUser);
    res.status(200).json({newUser})
  }


});




module.exports = router;
