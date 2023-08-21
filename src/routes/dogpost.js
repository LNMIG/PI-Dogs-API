const router = require('express').Router();
const { Breed, Temper } = require('../db.js');

router.post('/', async function(req, res, next){
    try {
        let {name, height, weight, life_span, image, temperaments} = req.body;
        
        name = name.toLowerCase().split(' ').map(n=> {return n.charAt(0).toUpperCase() + n.slice(1)}).join(' ');
        
        let newTemperaments = [];
        if(!Array.isArray(temperaments)) {
            newTemperaments = temperaments.split(',').map(temper => {return temper.trim()}).sort().filter(temper => temper !=='');
        } else {
            newTemperaments = temperaments;
        }
        
        const [breed, createdB] = await Breed.findOrCreate({ 
            where: {
                name,
                height,
                weight,
                life_span,
                image,
            }
        });
        
        //createdB ? await breed.increment({ 'id': 1000 }) : null;
        
        for (let i=0; i<newTemperaments.length; i++) {
            const [temper, createdT] = await Temper.findOrCreate({ 
                where: {
                    name: newTemperaments[i],
                }
            });
            await breed.addTempers(temper);
        }
        createdB 
        ? res.status(201).json({newBreed: 'New breed added to database!'})
        : res.status(500).json({newBreed: 'Sorry, breed already exists.'});

    } catch (error) {
        next(error);
    }
});

module.exports = router;

//: res.status(204).json({newBreed: 'Sorry, new breed not added. There is already a breed matching yours', data: breed});