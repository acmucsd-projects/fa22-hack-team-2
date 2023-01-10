const express = require('express');
const router = express.Router();

const foods = require('../models/dining')

/* GET food item by ID. */
router.get('/server/:food', async(req, res, next) => {
    try{
        const data = await foods.findOne({Food: req.params.food});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/server/', async(req, res, next) => {
    try{
        const data = await foods.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;