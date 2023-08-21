const router = require('express').Router();
const fetch = require ('node-fetch');
const { Temper } = require('../db.js');
const { API_KEY } = process.env;

router.get('/', async function(_req, res, next){
    try {
      const allTemperDB = await Temper.findAll();

      if (allTemperDB.length === 0 ) {
        const allBreedsAPI = await fetch (`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`).then(result => result.json());

        let ordTempAPI = [], fiTempAPI = [], setTempAPI = [];
        allBreedsAPI.forEach(breed => {
          let {temperament} = breed;
          fiTempAPI.push(temperament);
        });

        //                todo a un string | minúsculas | a arreglo | saca esapcios extremos de c/temper | ordena array | filtro espacios blancos
        ordTempAPI = fiTempAPI.toString(',').toLowerCase().split(',').map(temper => {return temper.trim()}).sort().filter(temper => temper !=='');
        // creo objeto Temperaments no repetidos
        setTempAPI = new Set(ordTempAPI);
        // genero un Array usando el objeto y paso a mayúsculas la primer letra de cada elemento
        ordTempAPI = Array.from(setTempAPI).map(t => {return t[0].toUpperCase() + t.slice(1)});

        for (let i=0; i<ordTempAPI.length; i++) {
          let loading = await Temper.create({ name: ordTempAPI[i] });
        }

        const allTemperDB = await Temper.findAll();
        res.status(201).json(allTemperDB);
    } else {
        res.status(200).json(allTemperDB);
    }

    } catch (error) {
      next (error)
    }
  });

module.exports = router;