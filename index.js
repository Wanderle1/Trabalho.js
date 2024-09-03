const express = require('express')
app = express()
port = 3000
app.use(express.json())

app.get('/', (req, res) =>{
    console.log('Inicializando')
})

const adicionarEstudante= require('./estudantes/adicionarEstudante')
app.post('/estudante', adicionarEstudante)

const listarEstudantes = require('./estudantes/listaEstudantes')
app.get('/estudante', listarEstudantes)

const atualizarEstudantes = require('./estudantes/atualizaEstudantes')
app.put('/estudante/:id', atualizarEstudantes)

const exluirEstudantes = require('./estudantes/excluirEstudante')
app.delete('/estudante/delete/:id', exluirEstudantes)

const listarPorNome = require('./estudantes/listarPorNome')
app.get('/estudante/nome', listarPorNome)

const listarPorMatricula = require('./estudantes/listarPorMatricula')
app.get('/estudante/matricula', listarPorMatricula)

const listarPorCurso = require('./estudantes/listarPorCurso')
app.get('/estudante/curso', listarPorCurso)

const listarPorAno = require('./estudantes/listarPorAno')
app.get('/estudante/ano', listarPorAno)

app.listen(port, () =>{
    console.log(`Iniciado em http://localhost:${port}`)
})