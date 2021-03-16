const router = require('express').Router();
const { verifyPass, getJwt, userExist } = require('../middlewares/login');

router.route('/').post(userExist, verifyPass, getJwt);

module.exports = router;
