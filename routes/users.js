const router = require('express').Router();
let User = require('../models/usermodel');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/user/add').post((req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;