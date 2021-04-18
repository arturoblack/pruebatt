'use strict';

const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const { JWT_PRIVATE_KEY,
//          JWT_PUBLIC_KEY,
//          JWT_ISSUER,
//          JWT_AUDIENCE
//        } = require('../../config');

const _secretKey = "clavesuperhypermegasecreta";

// use 'utf8' to get string instead of byte array  (512 bit key)

/**
 * ## Json Web Token Utilities
 *
 * Utilidades para el uso de JWT en el proyectio
 */
// const privateKEY = fs.readFileSync(JWT_PRIVATE_KEY, 'utf8');
// const publicKEY = fs.readFileSync(JWT_PUBLIC_KEY, 'utf8');

/**
 * ## Firmar token
 *
 * Permite firmar un token JWT usando las llaves definidas
 * en la configuracion de la aplicacion.
 * @param {*} payload
 * @param {*} options
 *
 * @returns cadena de token firmada
 */
exports.sign = function(payload, options) {
  // Token signing options
  // let signOptions = {
  //   // TODO: evaluar la necesidad
  //   issuer: JWT_ISSUER,
  //   subject: options.subject,
  //   audience: JWT_AUDIENCE,
  //   expiresIn: '30d',
  //   algorithm: 'RS256'
  // };
  // const token = jwt.sign(payload, privateKEY, signOptions);
  const token = jwt.sign(payload, _secretKey, { expiresIn: '1h' });
  return token;
}

/**
 * ## Verificar valides del Token JWT
 *
 * verifica que el token este firmado de forma correcta
 * que no este corrupto y que no haya expirado
 * @param {string} token string Token JWT a verificar
 *
 * @returns  {boolean}  verdadero: token valido, falso: token invalido
 */
exports.verify = function(token) {
  const tokenDeco = jwt.verify(token, _secretKey);
  if (tokenDeco && tokenDeco.exp >= Math.floor(Date.now() / 1000)) {
    return true;
  } else {
    return false;
  }
}

/**
 * ## Decodificar token
 *
 * Decodifica el token
 * @param {string} token string Token JWT a decodificar
 *
 * @returns {boolean} any Objeto decodificado desde el token(string)
 */
exports.decode = function(token) {
  return jwt.verify(token, _secretKey);
}
