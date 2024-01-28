const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const groupRoutes = require('./routes/group');
const { connectToDatabase } = require('./db');

const app = express();
const port = "<port_no.>";

app.use(bodyParser.json());

connectToDatabase()
  .then(() => {
    app.use('/auth', authRoutes);
    app.use('/admin', adminRoutes);
    app.use('/user', userRoutes);
    app.use('/group', groupRoutes);

    app.listen(port, () => {
      console.log(`Chat App is running on port ${port}`);
    });
  })

app.get('/', (req, res) => {        
  res.sendFile('index.html', { root: __dirname });

});

module.exports = app;
