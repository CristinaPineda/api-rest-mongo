const express = require('express');
const mongoose = require('mongoose');
const app = express();

const User = require('./models/User');

// ler json
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// Rotas
app.post('/user', (req, res) => {
  
  const { id, nome, nomeUsuario, senha, dataAcesso } = req.body

  const user = {
    id,
    nome,
    nomeUsuario,
    senha,
    dataAcesso,
  }

  // try {
  //    catch (error) {
  //      res.status()
  //    }
  // }

})

// rota inicializa
app.get('/', (req, res) => {

  // requisição
  res.json({ message: 'oi express' })

})

//porta
mongoose
  .connect(
    'mongodb+srv://cristina:130913@api-cluster.srsr0.mongodb.net/bancodaapi?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Conectado com sucesso ao mongodb atlas')
    app.listen(3000);

  })
  .catch((err) => console.log(err))

