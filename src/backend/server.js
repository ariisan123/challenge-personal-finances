const express = require('express');
const { urlencoded, json } = require('body-parser');

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

const PORT = 3000;

app.listen(PORT || process.env.API_PORT, (err) => {
  if (err) console.log(err);
  console.log(`Conectado correctamente en puerto ${PORT}`);
});
