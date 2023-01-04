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
  
  // If any field is empty, let user know
  if (!newUsername || !newPassword || !confirmPassword) {
    res.json({message: "empty"});
    //TODO: create modal box to warn about empty
   
    console.log("Cannot have empty fields");
  } else if (confirmPassword != newPassword) {
    //TODO: handling if confirm password doesnt match 
    res.json({message: "match"});
    
    console.log("passwords do not match");
  } else if (await User.findOne({username: newUsername})){
    res.json({message: "exist"});
    //TODO: handle existing user credentials by creating modal box saying username taken
    
    console.log("username already exist!")
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


// Update user preferences for a logged-in user
router.put("/preferences", async (req, res) => {
  const username = req.body.username;
  const dietaryRestrictions = req.body.dietaryRestrictions;
  const mealSize = req.body.mealSize;
  const maxBudget = req.body.maxBudget;

  // Update preferences of valid logged-in user
  if (await User.find({username: username})) {
    const updatedUser = await User.updateOne({
      username: username
    }, {
      $set: {
        restrictions: dietaryRestrictions,
        // TODO: set mealSize, maxBudget, etc.
      }
    }).exec();
    res.status(200).json({updatedUser});
    console.log("successfully updated preferences for " + username + " (in PUT body)");
  } else {
    console.log("username not found");
  }
  

  // Update the preferences for the currently logged-in user

  // const currentUser = 
  // User.deleteOne({username: ???})

  
});


module.exports = router;
