const { User } = require('../../database');
const bcrypt = require('bcrypt');

module.exports = {
  async emailInUse(req, res, next) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(409).json({ msg: 'Email already in use', ok: false });
      } else {
        return next();
      }
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false, err });
    }
  },
  async createUser(req, res) {
    try {
      const { email, password } = req.body;
      const hashpass = bcrypt.hashSync(password, 10);
      const newUser = await User.create({ email, password: hashpass });
      if (newUser)
        return res.status(201).json({ msg: 'user created', ok: true });
    } catch (err) {
      return res.status(500).json({ msg: 'server error', ok: false, err });
    }
  }
};
