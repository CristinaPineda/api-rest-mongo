const router = require('express').Router();
const User = require('../models/User');

// Rota create
router.post('/', async (req, res) => {
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

module.exports = router;
