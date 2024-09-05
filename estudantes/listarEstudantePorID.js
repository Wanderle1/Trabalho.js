let {estudantes} = require('../data')

function listarEstudantePorID(req, res){
    let {id}= req.query

    const lisID = estudantes.filter(e => e.id == id)

    if(lisID.length === 0){
        res.status(404).send('estudante não encontrado!')
    }

    res.status(202).send({aluguel: lisID })
    
}

module.exports = listarEstudantePorID
