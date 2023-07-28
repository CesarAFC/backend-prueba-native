const router = require('express').Router();
const user = require('./user.routes');

router.use('/myCamera', user);

module.exports = router;
