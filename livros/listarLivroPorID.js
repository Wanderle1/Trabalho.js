let {livros} = require('../data')

function listarLivroPorID(req, res){
    let {id}= req.query

    const lisID = livros.filter(l => l.id == id)

    if(lisID.length === 0){
        res.status(404).send('aluguel não encontrado!')
    }

    res.status(202).send({aluguel: lisID })
    
}

module.exports = listarLivroPorID
