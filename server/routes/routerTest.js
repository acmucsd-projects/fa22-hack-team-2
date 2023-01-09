const express = require('express');
const router = express.Router();

const tests = require('../models/test')

router.get('/test/:number', async(req, res, next) => {
    try{
        const data = await tests.findOne({Number: req.params.number});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;