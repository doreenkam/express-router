const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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

router.get('/:id', (req, res) => {
  try {
    const id = req.params.id - 1;
    const data = fruits[id];
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('color', 'Color is required').not().isEmpty(),
  ],
  (req, res) => {
    try {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({ error: errors.array() });
      } else {
        const data = req.body;
        fruits.push(data);
        res.status(200).send(fruits);
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

router.put('/:id', (req, res) => {
  try {
    const newData = req.body;
    const id = req.params.id - 1;
    if (fruits[id]) {
      fruits.splice(id, 1, newData);
      res.status(200).send(fruits);
    } else {
      res.status(404).send("Fruit doesn't exist!");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const id = req.params.id - 1;
    if (fruits[id]) {
      fruits.splice(id, 1);
      res.status(200).send(fruits);
    } else {
      res.status(404).send("Fruit doesn't exist!");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
