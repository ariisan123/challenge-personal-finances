const { Router } = require('express');
const router = Router();
const singupRoute = require('./signup');
const loginRoute = require('./login');
const operationsRoute = require('./operations');

router.use('/signup', singupRoute);
router.use('/login', loginRoute);
router.use('/operations', operationsRoute);

module.exports = router;
