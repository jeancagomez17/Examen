const router = require('express').Router();

const apiUsersRouter = require('./api/userCrud.js');
const apiProdRouter = require('./api/prodCrud.js');
const apiVentRouter = require('./api/ventaCrud.js');

router.use('/users', apiUsersRouter);
router.use('/prods', apiProdRouter);
router.use('/vents', apiVentRouter);

module.exports = router;