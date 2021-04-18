const { request } = require('express');
const jwt = require('../jwt');

exports.isLogin = function(req, res, next) {
  try {
    const authHeader = req.headers.authorization.split(" ")[1];
    if (jwt.verify(authHeader)) {
      const token = jwt.decode(authHeader)
      req.user = token.user;
      next();
    } else {
      res.status(401).json({error: 'token no autorizado'});
    }
  } catch (error) {
    res.status(500).json({error: 'error con el token'});
  }
}

exports.isBoss = function(req, res ,next) {

  if (req.user.rol === 'BOSS') {
    next();
  } else {
    res.status(401).json({error: 'usuario no autorizado'});
  }
} 