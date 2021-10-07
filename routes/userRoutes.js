const router = require('express').Router();
const User = require('../models/User');

// Rota create
router.post('/', async (req, res) => {
  const { idUser, nome, nomeUsuario, senha, dataAcesso } = req.body;

  if(!nome || !nomeUsuario || !senha ) {
    res.status(422).json({ error: 'Todos os campos são obrigatórios'});
    return;
  };

  const user = {
    idUser: nome,
    nome,
    nomeUsuario,
    senha,
    dataAcesso: Date(),
  };

  try {
    await User.create(user);
    res.status(201).json({ message: 'Usuario criado!'});

  } catch (error) {
    res.status(500).json({ error: error });
  };
});

// Rota Read (todos os usuarios)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    
  } catch (error) {
    res.status(500).json({ error: error });
  };
});

//Rota Read
router.get('/:idUser', async (req, res) => {
  try {
    const idUser = req.params.idUser;
    const userId = await User.findOne({ idUser: idUser });
    if(!userId) {
      res.status(422).json({ message: 'Usuário não encontrado!'});
      return;
    }
    res.status(200).json(userId);
  } catch (error) {
    res.status(500).json({ error: error });
  };
});

// Rota Update
router.patch('/:idUser', async (req, res) => {
  const idUse = req.params.idUser;
  const { idUser, nome, nomeUsuario, senha, dataAcesso } = req.body;
  const use = {
    idUser: nome,
    nome,
    nomeUsuario,
    senha,
    dataAcesso: Date(),
  };

  try {
    const upDateUser = await User.updateOne({ idUser: idUse }, use);
    if(upDateUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!'});
      return;
    }
    res.status(200).json({ message: `Usuario ${idUse} atualizado com sucesso!`});
  } catch (error) {
    res.status(500).json({ error: error });
  };
});

// Delete
router.delete('/:idUser', async (req, res) => {
  const idUser = req.params.idUser;
  const user = await User.findOne({ idUser: idUser});

  if(!user) {
    res.status(422).json({ message: 'Usuário não encontrado!'});
    return;
  };

  try {
    await User.deleteOne({ idUser: idUser });
    res.status(200).json({ message: "Usuario removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  };
})

module.exports = router;
