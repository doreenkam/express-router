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

router.post('/', (req, res) => {
  try {
    const data = req.body;
    users.push(data);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const newData = req.body;
    const id = req.params.id - 1;
    if (users[id]) {
      users.splice(id, 1, newData);
      res.status(200).send(users);
    } else {
      res.status(404).send("User doesn't exist!");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const id = req.params.id - 1;
    if (users[id]) {
      users.splice(id, 1);
      res.status(200).send(users);
    } else {
      res.status(404).send("User doesn't exist!");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
