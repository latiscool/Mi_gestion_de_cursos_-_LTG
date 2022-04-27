const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const consultas = require('./db/query')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log('💻 Servidor se esta ejecutando en puerto ' + PORT)
);
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.post('/curso', async (req, res) => {
  const newCurso = req.body;
  const respuesta = await consultas.nuevoCurso(newCurso);
  res.send(respuesta);
});

app.get('/cursos', async (req, res) => {
  const respuesta = await consultas.getData();
   res.send(respuesta);
});

app.put('/curso', async (req, res) => {
  const curso = req.body;
  const respuesta = await consultas.updateData(curso);
  res.send(respuesta);
});

app.delete('/curso/:id', async(req, res)=>{

const {id}=req.params
const respuesta = await consultas.deleteData(id)
res.send(respuesta);

})
// RUTA GET - ERROR
app.get('*', (req, res) => {
  res.send(`<center><h1>PAGINA NO ENCONTRADA.!</h1>
  <p style="color:red; font-size:50px;">ERROR 404</p></center>`);
});
