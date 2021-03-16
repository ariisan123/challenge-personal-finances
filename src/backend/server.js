const express = require('express');
const { urlencoded, json } = require('body-parser');
const apiRoutes = require('./api/routes/main');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/api', apiRoutes);

app.listen(process.env.API_PORT, (err) => {
  if (err) console.log(err);
  console.log(`Conectado correctamente en puerto ${process.env.API_PORT}`);
});
