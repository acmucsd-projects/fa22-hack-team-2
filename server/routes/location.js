const { query } = require('express');
const express = require('express');
const router = express.Router();

const location = require('../models/location');

//used to post new documents to mongodb
router.post('/location', async (req, res) => {
    const foodArray = [];
    for (let i = 0; i < req.body.food.length; i++) {
        const foodObject = req.body.food[i];
        const restrictionArray = [];
        for (let i = 0; i < foodObject.restrictions.length; i++) {
            restrictionArray.push(foodObject.restrictions[i])
        }
        const food = {
            food: foodObject.food,
            cal: foodObject.cal,
            calFromFat: foodObject.calFromFat,
            totFat: foodObject.totFat,
            totFatDV: foodObject.totFatDV,
            totCarb: foodObject.totCarb,
            totCarbDV: foodObject.totCarbDV,
            satFat: foodObject.satFat,
            satFatDV: foodObject.satFatDV,
            dietaryFiber: foodObject.dietaryFiber,
            dietaryFiberDV: foodObject.dietaryFiberDV,
            transFat: foodObject.transFat,
            transFatDV: foodObject.transFatDV,
            sugars: foodObject.sugars,
            sugarsDV: foodObject.sugarsDV,
            cholesterol: foodObject.cholesterol,
            cholesterolDV: foodObject.cholesterolDV,
            protein: foodObject.protein,
            proteinDV: foodObject.proteinDV,
            sodium: foodObject.sodium,
            sodiumDV: foodObject.sodiumDV,
            restrictions: restrictionArray,
            price: foodObject.price
        }
        foodArray.push(food);
    }
    const post = new location({
        name: req.body.name,
        food: foodArray
    })
    await post.save()
    res.send(post)
})

//deprecated route - DONT USE
router.get('/food/:hall/:food', async (req, res) => {
   const posts = await location.aggregate([
    {$match: {'name': req.params.hall}},
    {$unwind: '$food'},
    {$project: {'food': 1, '_id': 0}},
    {$match: {'food.food': req.params.food}}
   ])
    res.send(posts)
})

//main api route to query food from a spcecific dining hall based on food characteristics
router.get('/food/:hall', async (req,res) => {
    const query = []
    if (req.query.protein) {
        const max_protein = parseInt(req.query.protein.split("-")[1])
        const min_protein = parseInt(req.query.protein.split("-")[0])
        query.push({'food.protein': {$gt : min_protein, $lt: max_protein}})
    } if (req.query.fat) {
        const max_fat = parseInt(req.query.fat.split("-")[1])
        const min_fat = parseInt(req.query.fat.split("-")[0])
        query.push({'food.totFat': {$gt : min_fat, $lt: max_fat}})
    } if (req.query.sugar) {
        const max_sugar = parseInt(req.query.sugar.split("-")[1])
        const min_sugar = parseInt(req.query.sugar.split("-")[0])
        query.push({'food.sugars': {$gt : min_sugar, $lt: max_sugar}})
    } if (req.query.cal) {
        const max_cal = parseInt(req.query.cal.split("-")[1])
        const min_cal = parseInt(req.query.cal.split("-")[0])
        query.push({'food.cal': {$gt : min_cal, $lt: max_cal}})
    } if (req.query.carb) {
        const max_carb = parseInt(req.query.carb.split("-")[1])
        const min_carb = parseInt(req.query.carb.split("-")[0])
        query.push({'food.totCarb': {$gt : min_carb, $lt: max_carb}})
    } if (req.query.r) {
        const restriction = req.query.r
        query.push({'food.restrictions' : { "$all": restriction }})
    } if (req.query.name) {
        query.push({'food.food' : req.query.name})
    } if (req.query.size) {
        const size = req.query.size
        if (size == "small") {
            query.push({'food.cal': {$lt: 400}})
        } else if (size == "medium") {
            query.push({'food.cal' : {$gt: 400, $lt: 700}})
        } else if (size == "large") {
            query.push({'food.cal': {$gt: 700}})
        }
    }
    console.log(query)
    if (query[0] != null) {
        const posts = await location.aggregate([
            {$match: {'name': req.params.hall}},
            {$unwind: '$food'},
            {$project: {'food': 1, '_id': 0}},
            {$match: {"$and" : query}},
        ])
        res.send(posts)
    } else {
        const posts = await location.find({name: req.params.hall})
        res.send(posts)
    }
})


module.exports = router;