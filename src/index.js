const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();
const port = 3000;
const { getSessions, withUserData } = require('./userData');
const blog = require('./blog');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  getSessions().then((sessions) => {
    res.json({
      sessions,
    });
  });
});

app.use('/:user', withUserData(config), blog);

app.listen(port, () => console.log(`React-Workshop API on port: ${port}!`));
