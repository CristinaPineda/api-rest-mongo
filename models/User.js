const mongoose = require('mongoose');

const User = mongoose.model('User', {
    id: String,
    nome: String,
    nomeUsuario: String,
    senha: Number,
    dataAcesso: Date,
});

module.exports = User;
