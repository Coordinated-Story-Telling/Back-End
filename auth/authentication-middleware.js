const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')


const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: 'you shall not pass' });

      } else {
        res.user = { username: decodedToken.username}
          next()
        }
        
      })
    } else {
      res.status(400).json({message: 'no credentials provided'})
    }
}
