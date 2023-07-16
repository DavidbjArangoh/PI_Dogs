const express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dogRouter = require("./DogRoutes")
// const tempRouter = require("./TempRoutes")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/dogs', dogRouter);

// router.use("/temperaments", tempRouter)


module.exports = router;
