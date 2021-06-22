const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    nome: String,
    email: String,
    password: String,
    rg: String,
    cpf: String,
    endereco: String,
    datanasc: String,
    isPrestador: String
})
module.exports = mongoose.model('user', userSchema, 'users')

