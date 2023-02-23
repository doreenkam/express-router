const express = require('express');
const router = express.Router();

let fruits = [
  {
    name: 'Apple',
    color: 'Red',
  },
  {
    name: 'Banana',
    color: 'Yellow',
  },
  {
    name: 'Kiwi',
    color: 'Green',
  },
  {
    name: 'Grape',
    color: 'Purple',
  },
];

router.get('/', (req, res) => {
  try {
    const data = fruits;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
