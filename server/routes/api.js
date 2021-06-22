const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://sysadm:syspass@cluster0.fkwi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db, err =>{
    if(err){
        console.error('Erro!' + err)
    } else {
        console.log('Conectado ao mongodb')
    }
})



function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Requisição não Autorizada')
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('Requisição não Autorizada')
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload){
        return res.status(401).send('Requisição não Autorizada')
    }
    req.userId = payload.subject;
    next();
}

router.get('/', (req, res) =>{
    res.send('From API route')
})

router.post('/cadastro', (req, res) =>{
    let userData = req.body;
    this.emailUsuario = userData.email;
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

let emailUsuario;
router.post('/login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        this.emailUsuario = userData.email;
        if(error){
            console.log(error)
        } else {
            if(!user){
                res.status(401).send('E-mail inválido')
            } else
            if (user.password !== userData.password){
                res.status(401).send('Senha inválida')
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})
let configuracoesSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    rg: {type: String, required: true},
    cpf: {type: String, required: true},
    endereco: {type: String, required: true},
    datanasc: {type: String, required: true},
    senha: {type: String, required: true},
    confirmarsenha: {type: String, required: true}
});

let a = mongoose.model("users", configuracoesSchema)
router.get('/configuracoes', (req, res) =>{

  let info = []
    const query = a.find({email: this.emailUsuario},  (error, data) => {
        if (error){
            console.log(error)
        } else {
            console.log(data)
            console.log('id ' + this.emailUsuario)
            res.json(data)
        }
    });
    
    //events = this.data
    //console.log('esta' + events)
    //res.json(events);
})

router.get('/special', (req, res) =>{
    let events = []
    res.json(events)
})

module.exports = router