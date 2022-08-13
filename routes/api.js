const router = require('express').Router();

const apiUsersRouter = require('./api/userCrud.js');

router.use('/users', apiUsersRouter);

module.exports = router;