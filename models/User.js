const mongoose = require('mongoose');

const User = mongoose.model('User', {
    id: Number,
    nome: String,
    nomeUsuario: String,
    senha: Number,
    dataAcesso: Date,
});

module.exports = User;
