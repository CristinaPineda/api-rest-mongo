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
app.post('/user', async (req, res) => {
  const { id, nome, nomeUsuario, senha, dataAcesso } = req.body;

  if(!nome || !nomeUsuario || !senha ) {
    res.status(422).json({ error: 'Todos os campos são obrigatórios'});
  }

  const user = {
    id: nome,
    nome,
    nomeUsuario,
    senha,
    dataAcesso: Date(),
  }

  try {
    await User.create(user);
    res.status(201).json({ message: 'Usuario criado!'});

  } catch (error) {
    res.status(500).json({ error: error })
  }
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
