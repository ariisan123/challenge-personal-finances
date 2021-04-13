const { User } = require('../../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('../../dotenv');

module.exports = {
  async userExist(req, res, next) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ msg: 'user not found', ok: false });
      } else {
        res.locals.user = user;
        return next();
      }
    } catch (err) {
      return res.status(500).json({ msg: 'serrver error', ok: false, err });
    }
  },
  verifyPass(req, res, next) {
    const { password: hashedPass } = res.locals.user;
    const { password } = req.body;
    const passIsEqual = bcrypt.compareSync(password, hashedPass);
    passIsEqual
      ? next()
      : res.status(409).json({ msg: 'incorrect password', ok: false });
  },
  getJwt(req, res) {
    const { id } = res.locals.user;
    const token = jwt.sign({ userId: id }, process.env.SECRET_KEY);
    return res.status(200).json({ token });
  }
};
