const express = require('express');
const router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
});

module.exports = router;
*/

// Creating new user
router.post("/users", (req, res) => {
  const {newUser} = req.body;
  const {/* have attributes here*/} = newUser;

  if (/*failure conditions*/) {
    res.status(400);
    console.log("invalid user creation");
  } else {
    res.status(200).json({newUser})
  }


});


module.exports = router;
