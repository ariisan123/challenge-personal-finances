const router = require('express').Router();
const {
  editOperation,
  newOperation,
  isLogged,
  deletOperation,
  getAll,
  getAllReceived,
  getAllSent
} = require('../middlewares/operations');

router.route('/').get(isLogged, getAll);
router.route('/new').post(isLogged, newOperation);
router.route('/in').get(isLogged, getAllReceived);
router.route('/out').get(isLogged, getAllSent);

router
  .route('/:id')
  .put(isLogged, editOperation)
  .delete(isLogged, deletOperation);

module.exports = router;
