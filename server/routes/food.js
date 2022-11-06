const express = require('express');
const router = express.Router();

const foods = require('../models/dining.js')

/* GET users listing. */
router.get('/server', async(req, res, next) => {
    const data = foods.findById("PUTIDHERE");
    console.log(data);
});

module.exports = router;