const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    id: Number,
    nome: String,
    nomeUsuario: String,
    senha: Number,
    dataAcesso: Date,
})

module.exports = Person;
