const db = require('../models');
const crypto = require('crypto');
const jwt = require('../jwt');

exports.login = async function(req, res) {
  try {
    const {email, password} = req.body;
    const hashPassword = crypto.createHmac('sha256', 'llavedehash')
                               .update(password)
                               .digest('hex');

    const user = await db.User
      .findOne({
        where: {
          email: email,
          password: hashPassword
        },
        attributes: ['name', 'email', 'rol']
      });
    if (user) {
      //firmar el token jwt
      const token = jwt.sign({user});
      //regresar el token jwt
      res.json({token: `Bearer ${token}`});
    } else {
      res.status(401).json({error: 'email o clave invalida.'});
    }
  } catch(err) {
    res.status(500).json({error: err});
  }
}
