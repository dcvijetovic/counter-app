const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./middleware/authorization');
const { encoder } = require('./utils/encoder');
const login = require('./login');
const port = 3001;

app.use(cors());

app.use(express.json());

app.post('/login', login);

app.post('/encoder', auth, (req, res) => {
  const { input } = req.body;
  const result = encoder(input);
  res.json({ result });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
