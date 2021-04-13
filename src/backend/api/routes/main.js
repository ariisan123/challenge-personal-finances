const { Router } = require('express');
const router = Router();
const signupRoute = require('./signup');
const loginRoute = require('./login');
const operationsRoute = require('./operations');

router.use('/signup', signupRoute);
router.use('/login', loginRoute);
router.use('/operations', operationsRoute);

module.exports = router;
