const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model.js');
const secrets = require('../config/secrets')
const validation = require('../middleware/middleware')

// for endpoints beginning with /api/auth
router.post('/register', validation.validateUserRegistration, (req, res) => {

  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  let { username } = req.body
  console.log(username)

  Users.add(user)
    .then(saved => {
      const token = generateToken(user)
        Users.findBy({ username })
        .first()
        .then(user => {
            const id = user.id
            res.status(201).json({token, id})
        })
      })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', validation.validateUserLogin, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        const id = user.id
        res.status(200).json({token, id});
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken (user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;


