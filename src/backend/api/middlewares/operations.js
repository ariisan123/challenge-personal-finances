const { Operation } = require('../../database');
const jwt = require('jsonwebtoken');
require('../../dotenv');

module.exports = {
  isLogged(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({ msg: 'you must login', ok: false });
    }
    const token = authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (user) {
      res.locals.userId = user.userId;
      return next();
    } else {
      return res.status(401).json({ msg: 'you are not logged in', ok: false });
    }
  },
  async newOperation(req, res) {
    try {
      const { userId } = res.locals;
      const newOperation = await Operation.create({ ...req.body, userId });
      return res
        .status(201)
        .json({ msg: 'operation created', ok: true, operation: newOperation });
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false });
    }
  },
  async editOperation(req, res) {
    const { id } = req.params;
    const { userId } = res.locals;
    try {
      const editedOperation = await Operation.update(
        { ...req.body },
        { where: { id, userId } }
      );
      if (editedOperation) {
        return res.status(200).json({
          msg: 'operation updated',
          ok: true
        });
      }
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false });
    }
  },
  async deletOperation(req, res) {
    try {
      const { id } = req.params;
      const { userId } = res.locals;
      const deletedOperation = await Operation.destroy({
        where: { id, userId }
      });
      console.log(deletedOperation);
      if (deletedOperation) {
        return res.status(200).json({ msg: 'operation deleted', ok: true });
      } else {
        return res.status(404).json({ msg: 'operation not found', ok: false });
      }
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false });
    }
  },
  async getAll(req, res) {
    try {
      const { userId } = res.locals;
      const operations = await Operation.findAll({ where: { userId } });

      return res
        .status(200)
        .json({ msg: 'operations ok', ok: true, data: operations });
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false });
    }
  },
  async getAllSent(req, res) {
    try {
      const { userId } = res.locals;
      const operations = await Operation.findAll({
        where: { userId, type: 'out' }
      });

      return res
        .status(200)
        .json({ msg: 'operations ok', ok: true, data: operations });
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false });
    }
  },
  async getAllReceived(req, res) {
    try {
      const { userId } = res.locals;
      const operations = await Operation.findAll({
        where: { userId, type: 'in' }
      });

      return res
        .status(200)
        .json({ msg: 'operations ok', ok: true, data: operations });
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false });
    }
  }
};
