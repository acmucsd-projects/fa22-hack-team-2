const express = require('express');
const router = express.Router();

const location = require('../models/location');

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


module.exports = router;