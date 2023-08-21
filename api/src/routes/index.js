const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsall = require('./dogsall.js');
const temperament = require('./temperament.js');
const dogpost = require('./dogpost.js');
const deletedog = require('./deletedog.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsall);
router.use('/temperament', temperament);
router.use('/dog', dogpost);
router.use('/dog/delete', deletedog);

module.exports = router;
