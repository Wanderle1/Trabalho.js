let {aluguel} = require('../data')

function listarAluguelPorID(req, res){
    let {id}= req.query

    const lisID = aluguel.filter(a => a.id == id)

    if(lisID.length === 0){
        res.status(404).send('aluguel não encontrado!')
    }

    res.status(202).send({aluguel: lisID })
    
}

module.exports = listarAluguelPorID
