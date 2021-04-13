const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./api/routes/main');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRoutes);

app.listen(process.env.API_PORT, (err) => {
  if (err) console.log(err);
  console.log(`Conectado correctamente en puerto ${process.env.API_PORT}`);
});
