const express = require('express');
const router = express.Router();

let users = [
  {
    name: 'User 1',
    age: 30,
  },
  {
    name: 'User 2',
    age: 45,
  },
  {
    name: 'User 3',
    age: 27,
  },
  {
    name: 'User 4',
    age: 22,
  },
];

router.get('/', (req, res) => {
  try {
    const data = users;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const id = req.params.id - 1;
    const data = users[id];
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
