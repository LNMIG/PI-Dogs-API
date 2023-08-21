const router = require('express').Router();
const { Breed } = require('../db.js');

// --------------- FOR  delete /dog/delete/{idRaza} ----------
router.get('/:idBreed', async function(req, res, next){

    try {
        const { idBreed } = req.params;
        const idBreedDB = await Breed.destroy({
            where: { id: idBreed }
        });
        
        idBreedDB 
        ? res.status(201).json({State: 'Breed was deleted!'})
        : res.status(404).json({State: 'Sorry, breed not found. Was not deleted'}); 
        
    } catch (error) {
        next (error)
    }
});

module.exports = router;