const router = require('express').Router();

const { emailInUse, createUser } = require('../middlewares/signup');

router.route('/').post(emailInUse, createUser);

module.exports = router;
