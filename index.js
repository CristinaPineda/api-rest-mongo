const express = require('express');
const mongoose = require('mongoose');
const app = express();

// ler json
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

//Rotas
const userRoutes = require('./routes/userRoutes');

app.use('/user', userRoutes);

// rota inicializa
app.get('/', (req, res) => {
  // requisição
  res.json({ message: 'oi express' })
});

//porta
mongoose
  .connect(
    'mongodb+srv://cristina:130913@api-cluster.srsr0.mongodb.net/bancodaapi?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Conectado com sucesso ao mongodb atlas')
    app.listen(3000);

  })
  .catch((err) => console.log(err));
