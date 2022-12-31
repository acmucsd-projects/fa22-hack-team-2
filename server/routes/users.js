const express = require('express');
const { response } = require('../app');
const router = express.Router();

// Get user model
const User = require("../models/users");

router.get("/register", async(req, res) => {
    const users = await User.find().exec(); 
    res.status(200).json({users});
});


//Create new user when submitting create use request
router.post("/register", async (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;
  const confirmPassword = req.body.confirmpassword;

  console.log(req.body);
  
  //TODO: handle existing user credentials
  if (!newUsername || !newPassword) {
    res.status(400);
    console.log("invalid user creation");
  } else if (confirmPassword != newPassword) {
    //TODO: handling if confirm password doesnt match 
    console.log("passwords do not match");
  } else {
    const newUser = await User.create({
      username:newUsername,
      password:newPassword,
    });
    newUser.save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
  }
});



module.exports = router;
