const mongoose = require('mongoose');

const User = mongoose.model('User', {
    idUser: String,
    nome: String,
    nomeUsuario: String,
    senha: Number,
    dataAcesso: Date,
});

module.exports = User;
