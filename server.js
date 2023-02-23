const express = require('express');
const app = express();
const port = 3000;
const usersRoutes = require('./routes/users');
const fruitsRoutes = require('./routes/fruits');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRoutes);
app.use('/fruits', fruitsRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
