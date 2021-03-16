const express = require('express');
const { urlencoded, json } = require('body-parser');
const apiRoutes = require('./api/routes/main');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/api', apiRoutes);

const PORT = 4000;

app.listen(PORT || process.env.API_PORT, (err) => {
  if (err) console.log(err);
  console.log(`Conectado correctamente en puerto ${PORT}`);
});
