const express = require('express');
const router = express.Router();

const moreTests = require('../models/moretests')

router.get('/moretests', async(req, res, next) => {
    const color = req.query.color;
    const number = req.query.number;
    console.log(number);
    try{
        if(color) {
            const data = await moreTests.findOne({'Link.Color': color});
            res.json(data);
        }
        if(number) {
            const data = await moreTests.findOne({'Link.Number': number});
            res.json(data)
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/moretests/ref/:id', async(req, res, next) => {
    try{
        const data = await moreTests.findOne({Ref: req.params.id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/moretests', async(req, res, next) => {
    try{
        const data = await moreTests.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router;