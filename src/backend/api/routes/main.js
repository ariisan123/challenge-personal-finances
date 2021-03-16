const { Router } = require('express');
const router = Router();
const singupRoute = require('./signup');
const loginRoute = require('./login');

router.use('/signup', singupRoute);
router.use('/login', loginRoute);

module.exports = router;
